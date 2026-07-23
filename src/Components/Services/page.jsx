import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Zap,
  Hammer,
  ShieldCheck,
  Building2,
  Wrench,
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronRight,
  X,
  Flame,
  CheckCircle2,
  Award,
  Clock,
  Briefcase,
} from "lucide-react";

// import servicesImg from "../../assets/fullbanner.png";

// FULL SECTION CINEMATIC CANVAS (Sparks + Full Height Diagonal Lasers)
const CinematicCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    // Pure section ki height & width set karne ka function
    const updateBounds = () => {
      if (!canvas || !canvas.parentElement) return;
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth || window.innerWidth;
      canvas.height = parent.offsetHeight || window.innerHeight;
    };

    updateBounds();

    // Section Size change hone par Canvas ko automatic expand karne ke liye
    const resizeObserver = new ResizeObserver(() => {
      updateBounds();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // 1. Particle Array (Sparks floating throughout the section)
    class Particle {
      constructor() {
        this.reset(true);
      }
      reset(initial = false) {
        const width = canvas.width || window.innerWidth;
        const height = canvas.height || window.innerHeight;
        this.x = Math.random() * width;
        // Pehle render par screen me kahin bhi spawn ho, baad me hamesha bottom se
        this.y = initial ? Math.random() * height : height + Math.random() * 50;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = -(Math.random() * 1.8 + 0.6);
        this.size = Math.random() * 2.5 + 0.6;
        this.alpha = Math.random() * 0.7 + 0.2;
        this.color = Math.random() > 0.4 ? "#f97316" : "#fef3c7";
        this.decay = Math.random() * 0.003 + 0.001;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
        if (this.alpha <= 0 || this.y < -20) {
          this.reset();
        }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#f97316";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // 2. Diagonal Laser Beams crossing the whole section
    class Beam {
      constructor() {
        this.reset();
      }
      reset() {
        const width = canvas.width || window.innerWidth;
        const height = canvas.height || window.innerHeight;

        this.progress = -Math.random() * 500; // Delay offset
        this.speed = Math.random() * 12 + 8;
        this.length = Math.random() * 300 + 150;

        // Angle according to section dimensions
        this.angle = Math.atan2(height, width);

        // Random start position along top or left border to cover full height
        if (Math.random() > 0.4) {
          this.startX = 0;
          this.startY = Math.random() * (height * 0.7);
        } else {
          this.startX = Math.random() * (width * 0.7);
          this.startY = 0;
        }
      }
      update() {
        const width = canvas.width || window.innerWidth;
        const height = canvas.height || window.innerHeight;

        this.progress += this.speed;
        const maxDist = Math.hypot(width, height) + this.length + 200;
        if (this.progress > maxDist) {
          this.reset();
        }
      }
      draw() {
        if (this.progress < 0) return;

        const headX = this.startX + Math.cos(this.angle) * this.progress;
        const headY = this.startY + Math.sin(this.angle) * this.progress;

        const tailX =
          this.startX + Math.cos(this.angle) * (this.progress - this.length);
        const tailY =
          this.startY + Math.sin(this.angle) * (this.progress - this.length);

        const gradient = ctx.createLinearGradient(tailX, tailY, headX, headY);
        gradient.addColorStop(0, "rgba(249, 115, 22, 0)");
        gradient.addColorStop(0.7, "rgba(249, 115, 22, 0.4)");
        gradient.addColorStop(1, "rgba(253, 230, 138, 0.95)");

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#f97316";
        ctx.stroke();
        ctx.restore();
      }
    }

    const particles = Array.from({ length: 70 }, () => new Particle());
    const beams = Array.from({ length: 4 }, () => new Beam());

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      beams.forEach((b) => {
        b.update();
        b.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-80"
    />
  );
};

const servicesData = [
  {
    id: 1,
    title: "High-Precision Arc Welding",
    tag: "MOST POPULAR",
    category: "Welding",
    desc: "Heavy-duty electric arc & TIG/MIG welding crafted for main gates, protective grills, and structural steel frames with lifetime strength.",
    icon: Zap,
    specs: [
      "X-Ray Tested Quality",
      "Rust-Proof Coating",
      "TIG & MIG Technology",
    ],
    fullDetail:
      "Our Arc Welding service utilizes state-of-the-art inverter welding machinery to ensure flawless penetration and seamless bead aesthetics. Ideal for architectural gates, heavy grills, and safety enclosures.",
  },
  {
    id: 2,
    title: "Custom Metal Fabrication",
    tag: "INDUSTRIAL GRADE",
    category: "Fabrication",
    desc: "Precision laser cutting, bending, and structural assembly for custom metal doors, windows, industrial parts, and designer frames.",
    icon: Hammer,
    specs: ["Custom CAD Designs", "Laser Cut Finish", "High Tolerance"],
    fullDetail:
      "From intricate sheet metal components to heavy structural steel assemblies, our custom fabrication division brings technical blueprints to life with pinpoint millimeter accuracy.",
  },
  {
    id: 3,
    title: "Architectural Gate & Grill",
    tag: "LUXURY FINISH",
    category: "Residential",
    desc: "Bespoke designer gates, motorized sliding entryways, safety railings, and modern laser-cut grills designed for luxury properties.",
    icon: ShieldCheck,
    specs: ["Motorized Gate Setup", "Powder Coated", "Anti-Corrosive"],
    fullDetail:
      "Elevate your building facade with luxury stainless steel, wrought iron, and mild steel main gates. Designed to resist harsh weather conditions while providing top-tier security.",
  },
  {
    id: 4,
    title: "Heavy Steel Structures",
    tag: "COMMERCIAL",
    category: "Structural",
    desc: "Industrial-grade steel trussing, factory shed structures, warehouse roofing, and load-bearing heavy steel column welding.",
    icon: Building2,
    specs: ["Structural Certified", "High Load Bearing", "Wind Resistant"],
    fullDetail:
      "We specialize in complete turnkey steel structure projects including PEB (Pre-Engineered Buildings), factory sheds, multi-story steel framing, and industrial mezzanines.",
  },
  {
    id: 5,
    title: "Machine & Tool Repair",
    tag: "24/7 SUPPORT",
    category: "Repair",
    desc: "Emergency welding repairs for cracked machinery bases, heavy equipment arms, worn-out tools, and broken metal components.",
    icon: Wrench,
    specs: ["On-Site Mobile Repair", "Cast Iron Welding", "Hard-Facing Tech"],
    fullDetail:
      "Minimize industrial downtime with our emergency repair services. Specialized in hard-facing, alloy steel welding, cast iron repair, and structural machine re-conditioning.",
  },
  {
    id: 6,
    title: "Specialized Custom Welding",
    tag: "TAILORED WORK",
    category: "Custom",
    desc: "Tailor-made structural engineering for stainless steel, aluminum, brass, and rare alloy welding tailored to exact client specs.",
    icon: Sparkles,
    specs: ["Multi-Alloy Support", "Custom Jigs & Fixtures", "Flawless Polish"],
    fullDetail:
      "Whatever your complex engineering challenge is, our master craftsmen create custom steel solutions with mirror-finish polishing, hidden welds, and ultimate structural integrity.",
  },
];

const ServiceCard = ({ service, index, setSelectedService }) => {
  const IconComponent = service.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl backdrop-blur-xl p-8 border border-white/10 shadow-2xl flex flex-col justify-between"
    >
      <div
        className="absolute inset-0 rounded-2xl border-t-2 border-r-2 border-dotted border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30"
        style={{ transform: "translateZ(30px)" }}
      ></div>

      <div style={{ transform: "translateZ(40px)" }}>
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-[50px] border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition duration-500 shadow-inner">
            <IconComponent className="w-7 h-7" />
          </div>

          <span className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full bg-white/5 text-orange-300 border border-white/10 group-hover:border-orange-500/40">
            {service.tag}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition duration-300">
          {service.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
          {service.desc}
        </p>

        <div className="space-y-2 mb-8 border-t border-white/5 pt-4">
          {service.specs.map((spec, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs text-gray-300"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>{spec}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setSelectedService(service)}
        style={{ transform: "translateZ(50px)" }}
        className="group/btn relative overflow-hidden w-full py-3 px-4 rounded-xl border border-amber-500/40 text-amber-400 font-medium text-sm flex items-center justify-between transition-colors duration-300 z-10"
      >
        <span className="absolute inset-0 bg-amber-400 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out -z-10 pointer-events-none"></span>

        <span className="relative z-10 font-semibold group-hover/btn:text-black transition-colors duration-300">
          Explore Specifications
        </span>
        <ChevronRight className="relative z-10 w-4 h-4 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300" />
      </button>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      ref={containerRef}
      id="services"
      className="text-white py-28 relative overflow-hidden selection:bg-orange-500 selection:text-black w-full min-h-screen"
    >
      {/* FULL SECTION CANVAS */}
      <CinematicCanvas />

      {/* Parallax Background Image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <img
          // src={servicesImg}
          src="https://cdn.pixabay.com/photo/2013/09/12/15/22/welding-181656_1280.jpg"
          alt="Fabrication Background"
          className="w-full h-[120%] object-cover opacity-50 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-black/80 to-[#070707]"></div>
      </motion.div>

      {/* Distributed Ambient Radial Glows (Top, Middle, Bottom) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-600/15 blur-[180px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-orange-500/10 blur-[180px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md mb-5"
          >
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
            <span className="text-xs uppercase tracking-[4px] font-semibold text-orange-400">
              EKTA FABRICATION CRAFTSMANSHIP
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Engineering Strength. <br />
            {/* SHIMMER TEXT ANIMATION */}
            <motion.span
              animate={{ backgroundPosition: ["200% center", "-200% center"] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% auto" }}
              className="bg-gradient-to-r from-orange-600 via-amber-200 to-orange-600 bg-clip-text text-transparent inline-block pb-1"
            >
              Mastering Steel Precision.
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light"
          >
            Heavy-duty industrial welding, bespoke gate fabrication,
            architectural grills, and structural steel engineering built to
            endure generations.
          </motion.p>

          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-8 rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto mb-28 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-700 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>

          <div className="relative rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
            <div className="flex items-center justify-between px-6 py-3 bg-black/60 backdrop-blur-md border-b border-white/10 z-20 relative">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                <span className="text-xs text-gray-400 font-mono ml-3">
                  LIVE WORKSHOP SHOWCASE
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-orange-400 font-semibold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 animate-spin" /> High Precision
                Spark Arc
              </div>
            </div>

            <div className="relative w-full aspect-video max-h-[520px] bg-black">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover scale-[1.01] transition-transform duration-700 group-hover:scale-105"
                src="https://videos.pexels.com/video-files/4488661/4488661-hd_1920_1080_25fps.mp4"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none"></div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-3.5 rounded-full bg-orange-500 text-black hover:bg-orange-400 transition transform hover:scale-110 shadow-lg shadow-orange-500/40"
                    title={isPlaying ? "Pause Video" : "Play Video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition border border-white/20"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-orange-400" />
                    )}
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" /> ISO
                    Certified Standards
                  </span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <span>100% Quality Welds</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              setSelectedService={setSelectedService}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#141414] border border-orange-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(249,115,22,0.2)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-orange-500 hover:text-black text-gray-400 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
                  {React.createElement(selectedService.icon, {
                    className: "w-8 h-8",
                  })}
                </div>
                <div>
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                    {selectedService.category} Service
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-300 text-base leading-relaxed font-light">
                  {selectedService.fullDetail}
                </p>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-orange-400 font-semibold mb-3">
                    Technical Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedService.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Ready to start your custom metal fabrication project?
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 transition"
                  >
                    <span>Request Free Quote</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
