import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Wrench, Clock, Sparkles } from "lucide-react";
import about_img from "../../assets/About.png";
import about_bg from "../../assets/aboutsection.png";

/* =========================================================================
   1. CINGARI (WELDING SPARKS) CANVAS COMPONENT
   ========================================================================= */
const SparkCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Sparks Array
    const sparks = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height + canvas.height,
      size: Math.random() * 2.5 + 0.8,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: -Math.random() * 2.5 - 1,
      opacity: Math.random() * 0.9 + 0.1,
      color: ["#FF4500", "#FF8800", "#FFD54F", "#FF2200", "#FFFFFF"][
        Math.floor(Math.random() * 5)
      ],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparks.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= 0.003;

        // Reset spark position once faded or off-screen
        if (p.y < -10 || p.opacity <= 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + Math.random() * 40;
          p.opacity = Math.random() * 0.8 + 0.2;
          p.speedY = -Math.random() * 2.5 - 1;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
};

/* =========================================================================
   2. TEXT HOVER INTERACTIVE CANVAS SPARKLE EFFECT
   ========================================================================= */
const InteractiveTextCanvas = ({ children }) => {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isHovered) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      alpha: 1,
      color: "#FF8800",
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.015;

        if (p.alpha <= 0) {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
          p.alpha = 1;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#FF4500";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <div
      className="relative inline-block cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
        />
      )}
      {children}
    </div>
  );
};

/* =========================================================================
   3. 3D TILT STAT CARD COMPONENT
   ========================================================================= */
const TiltCard = ({ stat }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const Icon = stat.icon;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Calculate Tilt degrees
    const rotateX = (y / (rect.height / 2)) * -12;
    const rotateY = (x / (rect.width / 2)) * 12;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: tilt.x !== 0 ? 1.04 : 1,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 backdrop-blur-md shadow-lg flex flex-col justify-between group transition-colors duration-300 hover:border-[#FF5500]/70 hover:shadow-[0_10px_30px_rgba(255,85,0,0.25)] cursor-pointer"
    >
      <div className="flex items-center justify-between mb-2 pointer-events-none">
        <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF7700] transition-colors">
          {stat.value}
        </span>
        <Icon className="w-5 h-5 text-[#FF5500] group-hover:rotate-12 transition-transform duration-300" />
      </div>
      <span className="text-xs font-semibold text-neutral-400 tracking-wider uppercase pointer-events-none">
        {stat.label}
      </span>
    </motion.div>
  );
};

/* =========================================================================
   MAIN ABOUT COMPONENT
   ========================================================================= */
const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#030303] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center select-none z-20"
    >
      {/* ================= BACKGROUND CINGARI (SPARKS) CANVAS ================= */}
      <SparkCanvas />

      {/* ================= ANIMATED STRAIGHT SCANNING LINES ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Horizontal Laser Line */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FF5500]/70 to-transparent shadow-[0_0_12px_#FF5500]"
        />
        {/* Vertical Beam Line */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
            delay: 3,
          }}
          className="h-full w-[1.5px] bg-gradient-to-b from-transparent via-[#FF8800]/50 to-transparent shadow-[0_0_12px_#FF8800]"
        />
      </div>

      {/* ================= 1. BACKGROUND IMAGE & ATMOSPHERIC LAYERS ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Main Background Image */}
        <img
          src={about_bg}
          alt="Fabrication Workshop Background"
          className="w-full h-full object-cover opacity-100 filter brightness-40 contrast-125 scale-105"
        />

        {/* Ambient Molten Orange Radial Arc Lighting */}
        <div className="absolute -top-24 -left-24 w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-[#FF4500]/20 via-[#FF8800]/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 -right-24 w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-[#FF5500]/15 via-transparent to-transparent rounded-full blur-[140px]" />

        {/* Blueprint Grid & Vignette Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ================= 2. LEFT SIDE: SHOWCASE IMAGE WITH WHITE PATTI HOVER ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Outer Orange Glow Halo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#FF4500]/25 via-[#FF8800]/50 to-transparent rounded-3xl blur-2xl opacity-70 pointer-events-none" />

          {/* Main Frame Container */}
          <div className="relative w-full max-w-lg rounded-2xl bg-neutral-950/80 p-2 sm:p-3 border border-neutral-800/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
            {/* High-Tech HUD Laser Corner Accents */}
            <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-[#FF5500] rounded-tl-2xl z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-[#FF5500] rounded-br-2xl z-20 pointer-events-none" />

            {/* Showcase Image Container */}
            <div className="relative overflow-hidden rounded-xl border border-white/5">
              <img
                src={about_img}
                alt="EKTA Fabrication Craftsmanship"
                className="w-full h-[380px] sm:h-[460px] object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-105"
              />

              {/* ===== WHITE PATTI (LIGHT SWEEP SHINE) HOVER ANIMATION ===== */}
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-25 group-hover:left-[150%] transition-all duration-1000 ease-in-out pointer-events-none z-30" />

              {/* Subtle Dark Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
            </div>

            {/* Floating Glass Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-6 right-6 z-20 px-4 py-3 rounded-xl bg-neutral-950/90 border border-[#FF5500]/50 backdrop-blur-md shadow-2xl flex items-center gap-3"
            >
              <Award className="w-6 h-6 text-[#FF5500]" />
              <div>
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Craftsmanship
                </p>
                <p className="text-sm font-black text-white">
                  25+ Years Legacy
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= 3. RIGHT SIDE: CONTENT & GLASS STATS ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-left"
        >
          {/* Top Floating Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-[#FF5500]/40 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5500] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-neutral-200 uppercase">
              ABOUT OUR WORK
            </span>
          </div>

          {/* Main Title with Canvas Hover Sparkle Effect */}
          <InteractiveTextCanvas>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight uppercase group-hover:text-amber-100 transition-colors">
              Trusted Welding & Steel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF8800] to-[#FFD54F]">
                Fabrication Since 2000
              </span>
            </h2>
          </InteractiveTextCanvas>

          {/* Bio Description */}
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
            Our workshop specializes in high-precision steel fabrication
            including custom designer gates, heavy railings, shutters, channel
            gates, windows, and structural metalwork. Combining decade-honed
            craftsmanship with industrial durability, we build lasting strength
            for every space.
          </p>

          {/* 3D Tilt Stats Cards Grid */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { value: "25+", label: "Years Experience", icon: Award },
              { value: "5000+", label: "Projects Completed", icon: Wrench },
              { value: "100%", label: "Quality Work", icon: ShieldCheck },
              { value: "24/7", label: "Customer Support", icon: Clock },
            ].map((stat, idx) => (
              <TiltCard key={idx} stat={stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
