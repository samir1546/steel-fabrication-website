import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  MessageCircle,
  ChevronRight,
  ArrowUp,
  Wrench,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 overflow-hidden select-none border-t border-white/5">
      {/* ---------------- CINEMATIC GLOW & GRID BACKGROUND ---------------- */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#FF5500]/15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ---------------- TOP CTA BANNER ---------------- */}
        <div className="mb-16 p-6 sm:p-8 rounded-[3px] bg-neutral-900/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(255,85,0,0.1)]">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] shrink-0 hidden sm:flex">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[10px] font-mono font-bold text-[#FF5500] tracking-widest uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
                Live Availability
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                Ready to Start Your Metal Project?
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
            <a
              href="https://wa.me/918588928160"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-[3px] bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:8588928160"
              className="px-6 py-3.5 rounded-[3px] bg-gradient-to-r from-[#FF5500] to-[#FF8800] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_10px_30px_rgba(255,85,0,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 85889 28160</span>
            </a>
          </div>
        </div>

        {/* ---------------- MAIN GRID ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* BRAND COLUMN (Col 5) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight flex items-center gap-2">
                <span className="text-white">Jamir Welding</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] to-[#FFAA00]">
                  Works
                </span>
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-[#FF5500] to-transparent rounded-full" />
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed font-normal">
              Precision heavy-duty metal fabrication, structural steel, custom
              iron gates, architectural railings, and security grills. Crafted
              with 25+ years of engineering mastery in Gurugram & NCR.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-400">
              <ShieldCheck className="w-5 h-5 text-[#FF5500]" />
              <span>Certified Craftsmanship & Site Installation</span>
            </div>
          </div>

          {/* SERVICES COLUMN (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF5500] uppercase flex items-center gap-2">
              <Wrench className="w-4 h-4" /> Our Specialties
            </h3>

            <ul className="space-y-2.5 text-sm">
              {[
                "Iron Gates & Security Doors",
                "Balcony & Stair Railings",
                "Window Safety Grills",
                "Heavy Metal Sheds & Roofs",
                "Stainless Steel (SS) Work",
                "Custom Metal Fabrication",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#contact"
                    className="group text-neutral-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF5500] group-hover:translate-x-1 transition-transform" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS COLUMN (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF5500] uppercase">
              Navigation
            </h3>

            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", href: "#" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Our Projects", href: "#projects" },
                { name: "Get Quote", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group text-neutral-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-[#FF5500] transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* DIRECT CONTACT INFO COLUMN (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF5500] uppercase">
              Workshop Contact
            </h3>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3 text-neutral-300">
                <MapPin className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                <span>Dundaheda, Sector 20, Gurugram, Haryana - 122016</span>
              </div>

              <a
                href="tel:8588928160"
                className="flex items-center gap-3 text-neutral-300 hover:text-[#FF8800] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#FF5500] shrink-0" />
                <span className="font-semibold">+91 85889 28160</span>
              </a>

              <a
                href="mailto:jamiransari@gmail.com"
                className="flex items-center gap-3 text-neutral-300 hover:text-[#FF8800] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#FF5500] shrink-0" />
                <span className="truncate">jamiransari@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* ---------------- BOTTOM FOOTER BAR ---------------- */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-500">
          <p>
            © {new Date().getFullYear()} Jamir Welding Works. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">
              Gurugram, NCR
            </span>
            <span>•</span>
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">
              Quality Guaranteed
            </span>
            <span>•</span>
            {/* Scroll To Top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-[#FF5500] transition-all duration-300 flex items-center justify-center"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
