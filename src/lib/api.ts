export const API_BASE = import.meta.env.VITE_API_BASE || "";
const API_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT || 10000);

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), API_TIMEOUT);

  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    signal: ctrl.signal,
    headers: {
      "Accept": "application/json",
      ...(init?.headers || {}),
    },
  }).finally(() => clearTimeout(id));

  if (!res.ok) {
    throw new Error(`API ${path} failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

/**
 * প্রথমে API ট্রাই করবে। ফেল করলে public/<fallbackFile> থেকে JSON নেবে।
 */
export async function fetchWithFallback<T>(apiPath: string, fallbackFile: string): Promise<T> {
  try {
    return await apiFetch<T>(apiPath);
  } catch {
    const res = await fetch(`/${fallbackFile}`, { headers: { "Accept": "application/json" }});
    if (!res.ok) throw new Error(`Fallback failed: ${fallbackFile}`);
    return res.json() as Promise<T>;
  }
}
