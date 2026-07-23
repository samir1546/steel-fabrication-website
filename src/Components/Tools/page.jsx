import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Maximize2,
  X,
  Flame,
  CheckCircle2,
  ArrowRight,
  Cpu,
} from "lucide-react";

// Tools Data
const tools = [
  {
    id: "EQP-01",
    name: "Angle Grinder",
    category: "SURFACE & FINISHING",
    img: "https://www.mrpowertools.com/data/upload/ueditor/20240206/65c1a12c8394d.jpg",
    desc: "Used for cutting, grinding, and polishing heavy metal surfaces to perfection.",
    spec: "11,000 RPM • Heavy Duty",
    rating: "99.8% Precision",
  },
  {
    id: "EQP-02",
    name: "Welding Machine",
    category: "CORE FABRICATION",
    img: "https://tiimg.tistatic.com/fp/1/009/159/welding-machine-623.jpg",
    desc: "High-amperage industrial machine engineered for ultra-strong structural joints.",
    spec: "400A Inverter • Multi-Process",
    rating: "High-Strength Jointing",
  },
  {
    id: "EQP-03",
    name: "Power Drill",
    category: "PRECISION MACHINING",
    img: "https://m.media-amazon.com/images/I/71GhQ-RE6PL.jpg",
    desc: "Precision high-torque drilling designed for thick steel beams and structures.",
    spec: "Variable Speed • Impact Mode",
    rating: "Sub-Millimeter Accuracy",
  },
  {
    id: "EQP-04",
    name: "Metal Cutter",
    category: "HEAVY CUTTING",
    img: "https://m.media-amazon.com/images/I/51E8KOuabCL.jpg",
    desc: "Heavy-duty abrasive cut-off saw for clean, fast sectioning of steel bars.",
    spec: "14-Inch Blade • High Torque",
    rating: "Clean Edges",
  },
  {
    id: "EQP-05",
    name: "Welding Helmet",
    category: "SAFETY & SHIELDING",
    img: "https://m.media-amazon.com/images/I/41yVqUhfPYL._AC_SR290,290_.jpg",
    desc: "Auto-darkening helmet providing complete optic protection during arc welding.",
    spec: "Auto-Darkening • TrueColor",
    rating: "CE Certified Safety",
  },
  {
    id: "EQP-06",
    name: "Steel Hammer",
    category: "MANUAL SHAPING",
    img: "https://paintnhardware.com/3623-medium_default/stanley-51-186-claw-hammer-with-fibreglass-handle-16-450g-.jpg",
    desc: "Forged alloy steel hammer for metal alignment and slag removal.",
    spec: "Shock-Reduction Grip • 16oz",
    rating: "Indestructible Core",
  },
  {
    id: "EQP-07",
    name: "Clamp Tool",
    category: "FIXTURE & HOLDING",
    img: "https://www.aloktools.com/wp-content/uploads/2017/04/C-CLAMPS-CASTED-768x768.jpg",
    desc: "Cast steel C-clamps for locking metal components securely before welding.",
    spec: "Heavy-Duty Cast Iron • High-Pressure",
    rating: "Zero Alignment Slip",
  },
  {
    id: "EQP-08",
    name: "Welding Rod",
    category: "CONSUMABLES",
    img: "https://5.imimg.com/data5/DC/WT/MY-38382173/stainless-steel-welding-electrodes.jpg",
    desc: "Premium grade stainless steel electrodes for smooth arc and flawless seams.",
    spec: "AWS E6013 / E7018 • Low Spatter",
    rating: "X-Ray Quality Welds",
  },
];

const Tools = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  // Tripled array for smooth infinite marquee looping
  const marqueeTools = [...tools, ...tools, ...tools];

  return (
    <section
      id="tools"
      className="relative w-full  text-white py-28 sm:py-36 overflow-hidden select-none"
    >
      {/* ---------------- BACKGROUND EFFECTS ---------------- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] bg-gradient-to-br from-[#FF5500]/15 via-[#FF8800]/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FF4500]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5500]/40 to-transparent" />

      {/* ---------------- SECTION HEADER ---------------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-[#FF5500]/30 shadow-[0_0_20px_rgba(255,85,0,0.15)] mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#FF5500]" />
          <span className="text-xs font-bold tracking-[0.25em] text-neutral-300 uppercase">
            INDUSTRIAL ARSENAL & MACHINERY
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500">
            Precision
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FFAA00] to-[#FFD54F] drop-shadow-[0_10px_25px_rgba(255,85,0,0.3)]">
            Tooling
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed tracking-wide font-normal"
        >
          High-grade industrial equipment ensuring maximum structural strength,
          extreme tolerance, and uncompromising finish in every weld.
        </motion.p>
      </div>

      {/* ---------------- INFINITE MARQUEE CAROUSEL ---------------- */}
      <div className="relative z-10 w-full overflow-hidden py-6">
        {/* Left & Right Vignette Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track with Hover Pause */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeTools.map((tool, index) => (
            <div
              key={`${tool.id}-${index}`}
              onClick={() => setSelectedTool(tool)}
              className="group/card relative w-[280px] sm:w-[320px] bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-[#FF5500]/60 transition-all duration-500 cursor-pointer hover:shadow-[0_15px_35px_rgba(255,85,0,0.25)] hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest text-[#FF7700] uppercase font-bold bg-[#FF5500]/10 px-2.5 py-1 rounded-md border border-[#FF5500]/20">
                  {tool.id}
                </span>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-[#FF5500]" />
                  {tool.category}
                </span>
              </div>

              {/* Studio Display Box for White Images */}
              <div className="relative w-full h-48 bg-white/95 rounded-xl overflow-hidden mb-5 border border-neutral-700/30 flex items-center justify-center p-5 shadow-inner">
                {/* Subtle Studio Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200 pointer-events-none" />

                {/* Multiply Blended Image */}
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="relative z-10 w-full h-full object-contain mix-blend-multiply filter drop-shadow-md group-hover/card:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Inspect Icon */}
                <div className="absolute bottom-3 right-3 z-20 bg-neutral-900/90 border border-white/20 p-2 rounded-lg text-white opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0 shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FF7700]" />
                </div>
              </div>

              {/* Tool Information */}
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-white tracking-wide group-hover/card:text-[#FF8800] transition-colors">
                  {tool.name}
                </h4>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              {/* Footer Tag */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1.5 font-medium text-neutral-300">
                  <Zap className="w-3 h-3 text-[#FF5500]" />
                  {tool.spec}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- BOTTOM SUMMARY BANNER ---------------- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-16 sm:mt-24">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900/90 via-neutral-900/50 to-neutral-900/90 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#FF5500]" />
            </div>
            <div>
              <h5 className="text-base font-bold text-white tracking-wide">
                Certified Heavy Industrial Standard
              </h5>
              <p className="text-xs text-neutral-400 mt-0.5">
                All fabrication tools are calibrated and inspected for peak
                structural performance.
              </p>
            </div>
          </div>

          <a
            href="tel:YOUR_PHONE_NUMBER"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF8800] text-white font-bold text-xs uppercase tracking-widest shadow-[0_5px_20px_rgba(255,85,0,0.3)] hover:scale-105 transition-all duration-300"
          >
            <span>Request Machinery Specs</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ---------------- MODAL OVERLAY ---------------- */}
      <AnimatePresence>
        {selectedTool && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTool(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-[#FF5500]/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5500]/15 rounded-full blur-[100px] pointer-events-none" />

              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/40 flex items-center justify-center transition-all z-20"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                {/* Modal Studio Image Display */}
                <div className="relative h-64 bg-white/95 rounded-2xl p-6 flex items-center justify-center overflow-hidden border border-neutral-300 shadow-inner">
                  <img
                    src={selectedTool.img}
                    alt={selectedTool.name}
                    className="w-full h-full object-contain mix-blend-multiply filter drop-shadow-lg"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#FF5500] uppercase font-bold bg-[#FF5500]/10 px-2.5 py-1 rounded-md border border-[#FF5500]/30">
                      {selectedTool.id} • {selectedTool.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-3 uppercase tracking-tight">
                      {selectedTool.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {selectedTool.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                      <span className="font-semibold">Spec:</span>{" "}
                      {selectedTool.spec}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <Flame className="w-4 h-4 text-[#FFAA00]" />
                      <span className="font-semibold">Performance:</span>{" "}
                      {selectedTool.rating}
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="tel:YOUR_PHONE_NUMBER"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF8800] text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
                    >
                      <span>Inquire Tool Usage</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Tools;
