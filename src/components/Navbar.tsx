import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/FabIcon-KVrUKMri.png"
            className="w-10 opacity-90 hover:opacity-100 transition"
          />
        </Link>

        {/* CENTER — MENU */}
        <div className="hidden lg:flex items-center gap-10 text-white mx-auto">

          <NavLink to="/" label="HOME" active={location.pathname === "/"} />

          {/* PRODUCTS MENU */}
          <MegaMenu label="PRODUCTS">
            <MegaSection title="Vehicles">
              <MegaItem to="/brand-new" label="Brand New" />
              <MegaItem to="/Certified-EV-vehicle" label="Certified EV-vehicle" />
            </MegaSection>

            <MegaSection title="Certified EV vehicle">
              <MegaItem to="/certified/passenger" label="Passenger Vehicle" />
              <MegaItem to="/certified/bus" label="Bus" />
              <MegaItem to="/certified/truck" label="Truck" />
              <MegaItem to="/certified/e-bike" label="E-Bike" />
            </MegaSection>

            <MegaSection title="Spare Parts">
              <MegaItem to="/spare-pparts" label="All Spare Parts" />
            </MegaSection>
          </MegaMenu>

          {/* SERVICES MENU */}
          <MegaMenu label="SERVICES">
            <MegaSection title="EV Services">
              <MegaItem to="/ev-training" label="EV Training" />
              <MegaItem to="/skd-product" label="SKD Development" />
            </MegaSection>

            <MegaSection title="Charging Setup">
              <MegaItem to="/charging-dc" label="DC Charger" />
              <MegaItem to="/charging-ac" label="AC Charger" />
              <MegaItem to="/charging-pv" label="PV Solar Charger" />
              <MegaItem to="/battery-swap" label="Battery Swap Station" />
            </MegaSection>

            <MegaSection title="Vehicle Conversion">
              <MegaItem to="/three-wheeler" label="Three Wheeler" />
              <MegaItem to="/bus-truck" label="Bus & Truck" />
            </MegaSection>
          </MegaMenu>

          {/* ⭐ COMPANY MENU (SMALL) ⭐ */}
          <SmallMenu label="COMPANY">
            <SmallMenuItem to="/about" label="About Us" />
            <SmallMenuItem to="/contact" label="Contact Us" />
          </SmallMenu>

        </div>

        {/* RIGHT — MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </nav>
  );
};

/* ---------------- DESKTOP MENU COMPONENTS ---------------- */

const NavLink = ({ to, label, active }: any) => (
  <Link
    to={to}
    className={`tracking-[0.20em] text-[13px] uppercase font-light 
      ${active ? "text-primary" : "text-white/80 hover:text-white"}
    `}
  >
    {label}
  </Link>
);

const MegaMenu = ({ label, children }: any) => (
  <div className="relative group">
    <button className="tracking-[0.20em] text-[13px] uppercase font-light text-white/80 hover:text-white">
      {label}
    </button>

    <div className="
      absolute left-1/2 -translate-x-1/2 top-full mt-3
      w-[760px] p-8 rounded-2xl 
      bg-black/40 backdrop-blur-xl shadow-xl
      opacity-0 invisible 
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300
      grid grid-cols-3 gap-10 text-white
    ">
      {children}
    </div>
  </div>
);

/* ⭐ SMALL COMPANY MENU ⭐ */
const SmallMenu = ({ label, children }: any) => (
  <div className="relative group">
    <button className="tracking-[0.20em] text-[13px] uppercase font-light text-white/80 hover:text-white">
      {label}
    </button>

    <div className="
      absolute left-1/2 -translate-x-1/2 top-full mt-3
      w-[240px] p-4 rounded-xl
      bg-black/40 backdrop-blur-xl shadow-xl
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300
      flex flex-col gap-3
    ">
      {children}
    </div>
  </div>
);

const SmallMenuItem = ({ to, label }: any) => (
  <Link
    to={to}
    className="text-[14px] text-white/90 hover:text-white hover:underline"
  >
    {label}
  </Link>
);

const MegaSection = ({ title, children }: any) => (
  <div>
    <h4 className="text-sm uppercase tracking-[0.15em] text-white/60 mb-3">
      {title}
    </h4>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

const MegaItem = ({ to, label }: any) => (
  <Link to={to} className="text-[14px] text-white/90 hover:text-white hover:underline">
    {label}
  </Link>
);

/* ---------------- MOBILE MENU ---------------- */

const MobileMenu = ({ onClose }: any) => (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 text-white p-6 space-y-6 overflow-y-auto animate-fade-in">

    <MobileItem to="/" label="HOME" onClick={onClose} />

    <MobileGroup label="PRODUCTS">
      <MobileSub label="Vehicles">
        <MobileItem to="/brand-new" label="Brand New" onClick={onClose} />
        <MobileItem to="/bus" label="Bus" onClick={onClose} />
        <MobileItem to="/truck" label="Truck" onClick={onClose} />
        <MobileItem to="/ebike" label="E-Bike" onClick={onClose} />
      </MobileSub>

      <MobileSub label="Certified EV">
        <MobileItem to="/certified/passenger" label="Passenger" onClick={onClose} />
        <MobileItem to="/certified/bus" label="Bus" onClick={onClose} />
      </MobileSub>

      <MobileItem to="/spare-parts" label="Spare Parts" onClick={onClose} />
    </MobileGroup>

    <MobileGroup label="SERVICES">
      <MobileItem to="/ev-training" label="EV Training" onClick={onClose} />
      <MobileItem to="/skd-product" label="SKD Development" onClick={onClose} />

      <MobileSub label="Charging Setup">
        <MobileItem to="/charging-dc" label="DC Charger" onClick={onClose} />
        <MobileItem to="/charging-ac" label="AC Charger" onClick={onClose} />
      </MobileSub>

      <MobileSub label="Vehicle Conversion">
        <MobileItem to="/three-wheeler" label="Three Wheeler" onClick={onClose} />
      </MobileSub>
    </MobileGroup>

    <MobileItem to="/about" label="ABOUT" onClick={onClose} />
    <MobileItem to="/contact" label="CONTACT" onClick={onClose} />

  </div>
);

const MobileItem = ({ to, label, onClick }: any) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-lg tracking-[0.15em] uppercase text-white/90 hover:text-white"
  >
    {label}
  </Link>
);

const MobileGroup = ({ label, children }: any) => (
  <div>
    <h3 className="text-white/60 text-sm uppercase tracking-[0.15em] mb-2">
      {label}
    </h3>
    <div className="space-y-3 ml-4">{children}</div>
  </div>
);

const MobileSub = ({ label, children }: any) => (
  <div>
    <p className="text-white/70 text-sm uppercase tracking-[0.12em] mt-2 mb-1">{label}</p>
    <div className="ml-4 space-y-2">{children}</div>
  </div>
);

export default Navbar;
