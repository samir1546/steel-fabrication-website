import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  X,
  Flame,
  ShieldCheck,
  ArrowRight,
  Filter,
  Layers,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

// Complete Enhanced Works Data with Category tags & Project IDs
const works = [
  {
    id: "PRJ-01",
    title: "Iron Gate",
    category: "Iron Gates",
    desc: "Heavy-duty custom forged iron gate with anti-corrosion finish.",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/1/XD/TT/LT/43151678/floor-form-centering-sheet-500x500.jpg",
    spec: "Forged Iron • Matte Finish",
  },
  {
    id: "PRJ-02",
    title: "Steel Railing",
    category: "Steel Railings",
    desc: "Architectural grade stainless steel staircase railing.",
    img: "https://5.imimg.com/data5/UR/LJ/RB/ANDROID-8179937/product-jpeg.jpg",
    spec: "SS 304 Grade • Mirror Polish",
  },
  {
    id: "PRJ-03",
    title: "Steel Railing",
    category: "Steel Railings",
    desc: "Modern minimalist balcony safety steel railing.",
    img: "https://i.pinimg.com/originals/2f/f8/1b/2ff81b6c45bbd5ad14124ccaa52319f2.jpg",
    spec: "SS 316 Marine Grade",
  },
  {
    id: "PRJ-04",
    title: "Steel Railing",
    category: "Steel Railings",
    desc: "Designer glass & stainless steel combination railing.",
    img: "https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2023/05/Designer-Glass-Steel-Railing.jpg",
    spec: "Toughened Glass + SS 304",
  },
  {
    id: "PRJ-05",
    title: "Steel Railing",
    category: "Steel Railings",
    desc: "Premium spiral staircase stainless steel structure.",
    img: "https://www.shriramgates.com/images/stainless-steel-staircase-railing/SS-SCR_02.jpg",
    spec: "Custom Curved • Heavy Duty",
  },
  {
    id: "PRJ-06",
    title: "Steel Railing",
    category: "Steel Railings",
    desc: "Commercial building safety stair railing system.",
    img: "https://img.4imz.com/media/KL65TJ8I/upload/stainless-steel-railing-manufacturer-in-vadodara-1568615507.jpg",
    spec: "Satin Finish • High Load Capacity",
  },
  {
    id: "PRJ-07",
    title: "Window Grill",
    category: "Window Grills",
    desc: "Geometric laser-cut security steel window grill.",
    img: "https://www.jkcement.com/wp-content/uploads/2025/12/195.png",
    spec: "Mild Steel • Powder Coated",
  },
  {
    id: "PRJ-08",
    title: "Window Grill",
    category: "Window Grills",
    desc: "Decorative vintage security steel grill for residential home.",
    img: "https://i.ytimg.com/vi/Pbrjxyg3Bq8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBK-DNv5GYepjkd50VGs8TV92JT0g",
    spec: "Wrought Iron • Antique Black",
  },
  {
    id: "PRJ-09",
    title: "Window Grill",
    category: "Window Grills",
    desc: "Modern minimalist vertical steel bar window grill.",
    img: "https://www.wdma.com.cn/cdn/shop/products/Simple-iron-windows-grills-design-modern-house_0daa8512-2c6d-469b-8a17-8032c63406ac_large.jpg?v=1577425195",
    spec: "Solid Square Bar • Rustproof",
  },
  {
    id: "PRJ-10",
    title: "Metal Shed",
    category: "Metal Sheds",
    desc: "Industrial heavy-duty warehouse roofing metal shed.",
    img: "https://2.wlimg.com/product_images/bc-500/2024/10/13783241/warehouse-metal-shed-1728040392-7627865.jpeg",
    spec: "Truss Structure • Galvanized Sheets",
  },
  {
    id: "PRJ-11",
    title: "Metal Shed",
    category: "Metal Sheds",
    desc: "Lean-to outdoor vehicle parking metal storage shed.",
    img: "https://www.veikous.com/cdn/shop/files/PG0301-15_Lean_to_Storage_Shed_0.jpg?v=1745914492&width=1200",
    spec: "Weatherproof • Polycarbonate/Steel",
  },
  {
    id: "PRJ-12",
    title: "Metal Shed",
    category: "Metal Sheds",
    desc: "Large outdoor industrial steel storage shed facility.",
    img: "https://3.imimg.com/data3/XH/SV/MY-9045502/large-outdoor-metal-storage-sheds-500x500.jpg",
    spec: "Heavy Span Column • Custom Height",
  },
  {
    id: "PRJ-13",
    title: "Iron Door",
    category: "Iron Doors",
    desc: "Custom carved main entrance luxury wrought iron door.",
    img: "https://i.pinimg.com/236x/63/f8/0e/63f80e34dea0499575c6a0f046a8fdba.jpg",
    spec: "Hand-Forged • Double Glass Layer",
  },
  {
    id: "PRJ-14",
    title: "Iron Door",
    category: "Iron Doors",
    desc: "Royal estate double iron door with intricate scrolling.",
    img: "https://preciseirondoors.com/wp-content/uploads/2020/07/nova-3781.jpg",
    spec: "Thermal Break • Bronze Tinted Glass",
  },
  {
    id: "PRJ-15",
    title: "Iron Door",
    category: "Iron Doors",
    desc: "Contemporary security steel main door for modern homes.",
    img: "https://images.jdmagicbox.com/quickquotes/images_main/mtc0ndmyntg5na-1744325894-4act6iqb.jpg",
    spec: "Multi-Lock System • Dark Metallic",
  },
  {
    id: "PRJ-16",
    title: "Balcony Grill",
    category: "Balcony Grills",
    desc: "Dual-layer decorative safety balcony grill structure.",
    img: "https://cms.interiorcompany.com/wp-content/uploads/2022/07/balcony-safety-grill-design-with-two-layers.jpg",
    spec: "Child Safety Design • Dual Tone",
  },
  {
    id: "PRJ-17",
    title: "Balcony Grill",
    category: "Balcony Grills",
    desc: "Classic simple modern apartment balcony grill.",
    img: "https://www.nobroker.in/blog/wp-content/uploads/2025/04/Classic-Simple-Modern-Window-Grill-Design-for-Balcony.webp",
    spec: "Horizontal Slat • Black Powder Coated",
  },
  {
    id: "PRJ-18",
    title: "Balcony Grill",
    category: "Balcony Grills",
    desc: "Architectural vertical slat balcony safety railing system.",
    img: "https://cms.interiorcompany.com/wp-content/uploads/2022/07/apartments-balcony-grill-design-with-vertical-slats.jpg",
    spec: "Aluminum / Mild Steel Mixed",
  },
];

// Unique categories for filtering
const categories = [
  "All",
  "Steel Railings",
  "Window Grills",
  "Metal Sheds",
  "Iron Doors",
  "Balcony Grills",
  "Iron Gates",
];

const WorkGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedWork, setSelectedWork] = useState(null);

  // Filter works based on category
  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((item) => item.category === activeCategory);

  return (
    <section
      id="work"
      className="relative w-full  text-white py-28 sm:py-36 overflow-hidden select-none"
    >
      {/* ---------------- BACKGROUND AMBIENT EFFECTS ---------------- */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[1000px] sm:h-[1000px] bg-gradient-to-tr from-[#FF5500]/15 via-[#FF8800]/5 to-transparent rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FF4500]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />
      <div className="absolute inset-0  pointer-events-none" />

      {/* Top Border Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5500]/40 to-transparent" />

      {/* ---------------- SECTION HEADER ---------------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-12 sm:mb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-[#FF5500]/30 shadow-[0_0_20px_rgba(255,85,0,0.15)] mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#FF5500]" />
          <span className="text-xs font-bold tracking-[0.25em] text-neutral-300 uppercase">
            CRAFTED WITH PRECISION • BUILT TO LAST
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500">
            Architectural
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FFAA00] to-[#FFD54F] drop-shadow-[0_10px_25px_rgba(255,85,0,0.3)]">
            Gallery
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed tracking-wide font-normal"
        >
          Explore our portfolio of high-grade steel railings, designer iron
          doors, heavy sheds, and custom structural metalwork.
        </motion.p>
      </div>

      {/* ---------------- CATEGORY FILTER TABS ---------------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12 sm:mb-16">
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-[#FF5500] to-[#FF8800] shadow-[0_5px_20px_rgba(255,85,0,0.35)] scale-105"
                    : "text-neutral-400 bg-neutral-900/80 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ---------------- MASONRY GALLERY GRID ---------------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredWorks.map((work, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={`${work.id}-${index}`}
                onClick={() => setSelectedWork(work)}
                className="group relative break-inside-avoid overflow-hidden rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-[#FF5500]/60 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-[0_15px_35px_rgba(255,85,0,0.20)] hover:-translate-y-1"
              >
                {/* ID Tag */}
                <div className="absolute top-3 left-3 z-20 bg-neutral-950/80 border border-white/10 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest text-[#FF7700]">
                  {work.id}
                </div>

                {/* Inspect Button Icon */}
                <div className="absolute top-3 right-3 z-20 bg-neutral-900/90 border border-white/20 p-2 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FF7700]" />
                </div>

                {/* Project Image */}
                <div className="relative w-full overflow-hidden bg-neutral-950">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.88] contrast-105 group-hover:brightness-100"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-black/20 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                </div>

                {/* Card Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-[#FF5500] uppercase tracking-wider bg-[#FF5500]/10 px-2 py-0.5 rounded border border-[#FF5500]/20">
                      {work.category}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white tracking-wide group-hover:text-[#FF8800] transition-colors">
                    {work.title}
                  </h4>

                  <p className="text-xs text-neutral-300 mt-1 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {work.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ---------------- BOTTOM BANNER CTA ---------------- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-16 sm:mt-24">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900/90 via-neutral-900/50 to-neutral-900/90 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#FF5500]" />
            </div>
            <div>
              <h5 className="text-base font-bold text-white tracking-wide">
                Need Custom Size or Design?
              </h5>
              <p className="text-xs text-neutral-400 mt-0.5">
                We fabricate customized steel gates, railings, and doors
                according to your site dimensions.
              </p>
            </div>
          </div>

          <a
            href="tel:YOUR_PHONE_NUMBER"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF8800] text-white font-bold text-xs uppercase tracking-widest shadow-[0_5px_20px_rgba(255,85,0,0.3)] hover:scale-105 transition-all duration-300"
          >
            <span>Consult Architect</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ---------------- LIGHTBOX FULL-SCREEN MODAL ---------------- */}
      <AnimatePresence>
        {selectedWork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWork(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-[#0a0a0a] border border-[#FF5500]/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-10 overflow-hidden"
            >
              {/* Top Ambient Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF5500]/15 rounded-full blur-[100px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/40 flex items-center justify-center transition-all z-20"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Modal Large Image */}
                <div className="relative h-64 sm:h-80 bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                  <img
                    src={selectedWork.img}
                    alt={selectedWork.title}
                    className="w-full h-full object-cover filter brightness-[0.95] contrast-105"
                  />
                </div>

                {/* Modal Details */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#FF5500] uppercase font-bold bg-[#FF5500]/10 px-2.5 py-1 rounded-md border border-[#FF5500]/30">
                      {selectedWork.id} • {selectedWork.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-3 uppercase tracking-tight">
                      {selectedWork.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {selectedWork.desc}
                  </p>

                  <div className="pt-2 border-t border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                      <span className="font-semibold">Material Spec:</span>{" "}
                      {selectedWork.spec}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <Flame className="w-4 h-4 text-[#FFAA00]" />
                      <span className="font-semibold">Finish:</span> Heavy
                      Industrial Grade / Anti-Rust
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="tel:YOUR_PHONE_NUMBER"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF8800] text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Get Quotation For This Design</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkGallery;
