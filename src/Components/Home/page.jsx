import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Phone, ArrowUpRight, Shield, Flame, Sparkles } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const coreRingRef = useRef(null);
  const bgCanvasRef = useRef(null);
  const fgCanvasRef = useRef(null);

  useEffect(() => {
    const bgCanvas = bgCanvasRef.current;
    const fgCanvas = fgCanvasRef.current;
    if (!bgCanvas || !fgCanvas) return;

    const bgCtx = bgCanvas.getContext("2d");
    const fgCtx = fgCanvas.getContext("2d");

    let animId;
    let width = (bgCanvas.width = fgCanvas.width = window.innerWidth);
    let height = (bgCanvas.height = fgCanvas.height = window.innerHeight);

    const handleResize = () => {
      if (!bgCanvas || !fgCanvas) return;
      width = bgCanvas.width = fgCanvas.width = window.innerWidth;
      height = bgCanvas.height = fgCanvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // 1. Spark Class (Aapka existing particle spark)
    class Spark {
      constructor(isForeground = false) {
        this.isForeground = isForeground;
        this.reset();
      }

      reset() {
        // Centered Burst Origin
        this.x = width * 0.5 + (Math.random() - 0.5) * (width * 0.5);
        this.y = height * 0.55 + (Math.random() - 0.5) * 80;

        const angle = -Math.PI / 2 + (Math.random() - 0.5) * (Math.PI / 1.2);
        const speed = Math.random() * (this.isForeground ? 8 : 4) + 2;

        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.gravity = 0.07 + Math.random() * 0.04;
        this.drag = 0.98;

        this.size = this.isForeground
          ? Math.random() * 2.5 + 1.2
          : Math.random() * 1.5 + 0.5;
        this.life = 0;
        this.maxLife = Math.random() * 80 + 35;

        const h = 20 + Math.random() * 25; // Molten Amber / Gold Range
        this.color = `hsl(${h}, 100%, ${65 + Math.random() * 35}%)`;
      }

      update() {
        this.vx *= this.drag;
        this.vy *= this.drag;
        this.vy += this.gravity;

        this.x += this.vx;
        this.y += this.vy;

        this.life++;
        if (
          this.life >= this.maxLife ||
          this.y > height ||
          this.x < 0 ||
          this.x > width
        ) {
          this.reset();
        }
      }

      draw(ctx) {
        const alpha = 1 - this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;

        ctx.shadowBlur = this.isForeground ? 14 : 6;
        ctx.shadowColor = "#FF6600";

        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.vx * 2.6, this.y - this.vy * 2.6);
        ctx.stroke();

        ctx.restore();
      }
    }

    // 2. NAYA ADDED: Rocket / Straight Diagonal Speed Lines Class
    class RocketBeam {
      constructor() {
        this.reset();
      }

      reset() {
        this.progress = -Math.random() * 600; // Random delay pe launch hone ke liye
        this.speed = Math.random() * 10 + 8; // Rocket speed
        this.length = Math.random() * 250 + 120; // Beam length

        // Top-Left se Bottom-Right ki taraf angle
        this.angle = Math.atan2(height, width);

        // Top edge ya Left edge se randomly spawn karne ke liye
        if (Math.random() > 0.5) {
          this.startX = 0;
          this.startY = Math.random() * (height * 0.5);
        } else {
          this.startX = Math.random() * (width * 0.5);
          this.startY = 0;
        }
      }

      update() {
        this.progress += this.speed;
        const maxDist = Math.hypot(width, height) + this.length + 200;
        if (this.progress > maxDist) {
          this.reset();
        }
      }

      draw(ctx) {
        if (this.progress < 0) return; // Delay phase

        const headX = this.startX + Math.cos(this.angle) * this.progress;
        const headY = this.startY + Math.sin(this.angle) * this.progress;

        const tailX =
          this.startX + Math.cos(this.angle) * (this.progress - this.length);
        const tailY =
          this.startY + Math.sin(this.angle) * (this.progress - this.length);

        const gradient = ctx.createLinearGradient(tailX, tailY, headX, headY);
        gradient.addColorStop(0, "rgba(255, 85, 0, 0)"); // Faded tail
        gradient.addColorStop(0.7, "rgba(255, 136, 0, 0.4)");
        gradient.addColorStop(1, "rgba(255, 230, 180, 0.95)"); // Bright glowing tip

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#FF5500";
        ctx.stroke();
        ctx.restore();
      }
    }

    const bgSparks = Array.from({ length: 50 }, () => new Spark(false));
    const fgSparks = Array.from({ length: 35 }, () => new Spark(true));
    const rocketBeams = Array.from({ length: 3 }, () => new RocketBeam());

    const render = () => {
      bgCtx.clearRect(0, 0, width, height);
      fgCtx.clearRect(0, 0, width, height);

      // Draw background rocket lines first
      rocketBeams.forEach((beam) => {
        beam.update();
        beam.draw(bgCtx);
      });

      // Draw sparks
      bgSparks.forEach((spark) => {
        spark.update();
        spark.draw(bgCtx);
      });

      fgSparks.forEach((spark) => {
        spark.update();
        spark.draw(fgCtx);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(coreRingRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen w-full bg-[#030303] text-white flex flex-col items-center justify-between overflow-hidden py-8 px-4 sm:px-8 select-none"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://thumbs.dreamstime.com/b/dynamic-welding-illustration-sparks-metalwork-346612601.jpg"
          alt="Industrial Welding Workshop"
          className="w-full h-full object-cover filter brightness-[0.40] contrast-125 saturate-150 scale-105"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] sm:w-[700px] sm:h-[700px] bg-gradient-to-tr from-[#FF4500]/25 via-[#FF8800]/10 to-transparent rounded-full blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

        <div className="absolute inset-0 bg-radial from-transparent via-[#030303]/70 to-[#030303]" />
      </div>

      <canvas
        ref={bgCanvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full max-w-6xl flex items-center justify-between pt-2 border-b border-white/10 pb-4"
      >
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-[#FF5500] animate-pulse" />
          <span className="text-xs font-black tracking-[0.25em] text-neutral-300 uppercase">
            M.S.S.S. FABRICATION
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] font-semibold tracking-wider text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>EST. 2010 • ARCHITECTURAL STEEL WORKS</span>
        </div>

        <a
          href="tel:YOUR_PHONE_NUMBER"
          className="text-xs font-bold tracking-widest text-[#FF7700] hover:text-white transition-colors uppercase flex items-center gap-1"
        >
          <span>Get Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </motion.div>

      <div className="relative z-20 my-auto flex flex-col items-center text-center max-w-4xl space-y-6">
        <div
          ref={coreRingRef}
          className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] border border-dashed border-neutral-700/50 rounded-full pointer-events-none flex items-center justify-center"
        >
          <div className="w-[85%] h-[85%] border border-neutral-800 rounded-full" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FF5500] rounded-full shadow-[0_0_15px_#FF5500]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-[#FF5500]/40 shadow-[0_0_20px_rgba(255,85,0,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
          <span className="text-xs font-bold tracking-widest text-neutral-200 uppercase">
            Precision Engineering & Custom Steel
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-1"
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E2E8F0] to-[#475569] leading-none filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            EKTA
          </h1>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FFAA00] to-[#FFD54F] uppercase">
            FABRICATION
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm sm:text-lg font-medium text-neutral-400 max-w-lg tracking-wide"
        >
          Designer Gates • Heavy Railings • Structural Steel • CNC Metal Work
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4"
        >
          <a
            href="tel:YOUR_PHONE_NUMBER"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-neutral-300 bg-white px-8 py-3 text-xs sm:text-sm font-semibold text-gray-900 shadow-md transition-all duration-500 hover:scale-105 hover:border-[#FF6B00] hover:shadow-[0_12px_35px_rgba(255,107,0,0.30)]"
          >
            {/* Hover Background */}
            <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#FF6B00] via-[#FF8C00] to-[#FFA726] transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-white">
              <Phone className="h-4 w-4 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />
              <span className="tracking-wide uppercase whitespace-nowrap">
                Call Now
              </span>
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-20 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-4 pb-2"
      >
        {[
          { end: 10000, suffix: "+", title: "Satisfied Clients" },
          { end: 25, suffix: "+", title: "Years Experience" },
          { end: 5000, suffix: "+", title: "Projects Built" },
          { end: 100, suffix: "%", title: "Guaranteed Quality" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <span className="text-lg sm:text-2xl font-black text-white tracking-tight">
              <CountUp
                start={0}
                end={item.end}
                duration={2.5}
                separator=","
                suffix={item.suffix}
              />
            </span>

            <span className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              {item.title}
            </span>
          </div>
        ))}
      </motion.div>

      <canvas
        ref={fgCanvasRef}
        className="absolute inset-0 pointer-events-none z-30"
      />
    </section>
  );
};

export default Hero;
