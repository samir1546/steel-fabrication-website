import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  User,
  Wrench,
  MessageSquare,
  Building2,
  Compass,
} from "lucide-react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    workType: "Iron Gate / Security Doors",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        workType: "Iron Gate / Security Doors",
        message: "",
      });
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full text-white py-28 sm:py-36 overflow-hidden select-none bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://thumbs.dreamstime.com/b/artistic-welding-sparks-light-industrial-background-blue-flash-orange-sparkles-85300810.jpg)",
      }}
    >
      {/* ---------------- DARK CINEMATIC OVERLAY ---------------- */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-none" />

      {/* Cyber Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#FF5500]/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#FF8800]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Section Glow Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5500]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ---------------- SECTION HEADER ---------------- */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-[#FF5500]/30 shadow-[0_0_20px_rgba(255,85,0,0.15)] mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#FF5500]" />
            <span className="text-xs font-bold tracking-[0.25em] text-neutral-300 uppercase">
              DIRECT FABRICATION CONSULTATION
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
              Need Welding Work
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FFAA00] to-[#FFD54F] drop-shadow-[0_10px_25px_rgba(255,85,0,0.3)]">
              Done?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed tracking-wide font-normal"
          >
            From iron gates to balcony railings, grills, doors and heavy metal
            sheds — our welding experts deliver strong, durable, and
            precision-engineered fabrication work.
          </motion.p>
        </div>

        {/* ---------------- MAIN GRID ---------------- */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: CONTACT DETAILS & STATS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white uppercase tracking-wide flex items-center gap-2">
                <Building2 className="w-6 h-6 text-[#FF5500]" />
                Jamir Ansari Welding Works
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Get in touch for custom site measurements, designs, and instant
                project cost estimates.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Phone Card */}
              <a
                href="tel:8588928160"
                className="group flex items-center gap-4 p-4 rounded-[3px] bg-neutral-900/90 border border-white/10 hover:border-[#FF5500]/60 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,85,0,0.15)]"
              >
                <div className="w-12 h-12 rounded-[3px] bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-all duration-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="grow">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                    Call / WhatsApp
                  </span>
                  <h5 className="text-base font-bold text-white group-hover:text-[#FF8800] transition-colors">
                    +91 85889 28160
                  </h5>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#FF8800] transition-colors" />
              </a>

              {/* Email Card */}
              <a
                href="mailto:jamiransari@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-[3px] bg-neutral-900/90 border border-white/10 hover:border-[#FF5500]/60 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,85,0,0.15)]"
              >
                <div className="w-12 h-12 rounded-[3px] bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-all duration-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="grow">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                    Email Inquiry
                  </span>
                  <h5 className="text-base font-bold text-white group-hover:text-[#FF8800] transition-colors truncate max-w-[200px] sm:max-w-none">
                    jamiransari@gmail.com
                  </h5>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#FF8800] transition-colors" />
              </a>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-4 rounded-[3px] bg-neutral-900/90 border border-white/10">
                <div className="w-12 h-12 rounded-[3px] bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                    Workshop Location
                  </span>
                  <h5 className="text-sm font-bold text-white mt-0.5">
                    Dundaheda, Gurugram
                  </h5>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Haryana, India
                  </p>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="flex items-center gap-4 p-4 rounded-[3px] bg-neutral-900/90 border border-white/10">
                <div className="w-12 h-12 rounded-[3px] bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                    Working Hours
                  </span>
                  <h5 className="text-sm font-bold text-white mt-0.5">
                    Mon - Sat: 08:00 AM - 08:00 PM
                  </h5>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-neutral-900/90 p-5 rounded-[3px] border border-white/10 shadow-lg">
                <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] to-[#FFAA00]">
                  25+
                </h4>
                <p className="text-xs text-neutral-400 font-medium mt-1">
                  Years Experience
                </p>
              </div>

              <div className="bg-neutral-900/90 p-5 rounded-[3px] border border-white/10 shadow-lg">
                <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] to-[#FFAA00]">
                  5000+
                </h4>
                <p className="text-xs text-neutral-400 font-medium mt-1">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: GLASSFORM WITH 4 GLOWING BORDERS */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[5px] backdrop-blur-xl bg-black/30 border border-white/10 p-8 sm:p-12 space-y-8 overflow-hidden shadow-[0_0_50px_rgba(255,85,0,0.15)]">
              {/* ---------------- 4 CORNER / SIDE GLOW BORDERS ---------------- */}
              {/* Top Border */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent pointer-events-none" />
              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent pointer-events-none" />
              {/* Left Border */}
              <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF5500] to-transparent pointer-events-none" />
              {/* Right Border */}
              <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF5500] to-transparent pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#FF5500] uppercase font-bold">
                    INQUIRY FORM
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
                    Get Free Quote
                  </h3>
                </div>
                <ShieldCheck className="w-8 h-8 text-[#FF5500]/60 hidden sm:block" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* FULL NAME */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#FF5500]" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name..."
                    className="w-full bg-transparent border-b border-neutral-700 focus:border-[#FF5500] text-white py-3 px-1 text-sm sm:text-base outline-none transition-colors duration-300 placeholder:text-neutral-600 font-medium"
                  />
                </div>

                {/* PHONE & EMAIL DUAL ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="8588928160"
                      className="w-full bg-transparent border-b border-neutral-700 focus:border-[#FF5500] text-white py-3 px-1 text-sm sm:text-base outline-none transition-colors duration-300 placeholder:text-neutral-600 font-medium"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jamiransari@gmail.com"
                      className="w-full bg-transparent border-b border-neutral-700 focus:border-[#FF5500] text-white py-3 px-1 text-sm sm:text-base outline-none transition-colors duration-300 placeholder:text-neutral-600 font-medium"
                    />
                  </div>
                </div>

                {/* WORK DETAILS (UPDATED DROPDOWN WITH 7 OPTIONS) */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-[#FF5500]" />
                    Select Work Type *
                  </label>
                  <select
                    name="workType"
                    value={formData.workType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-neutral-700 focus:border-[#FF5500] text-white py-3 px-1 text-sm sm:text-base outline-none transition-colors duration-300 font-medium cursor-pointer"
                  >
                    <option
                      value="Iron Gate / Security Doors"
                      className="bg-neutral-900 text-white"
                    >
                      1. Iron Gate / Security Doors
                    </option>
                    <option
                      value="Balcony & Stair Railings"
                      className="bg-neutral-900 text-white"
                    >
                      2. Balcony & Stair Railings
                    </option>
                    <option
                      value="Window Safety Grills"
                      className="bg-neutral-900 text-white"
                    >
                      3. Window Safety Grills
                    </option>
                    <option
                      value="Metal Sheds & Roofing"
                      className="bg-neutral-900 text-white"
                    >
                      4. Metal Sheds & Roofing
                    </option>
                    <option
                      value="Structural Steel Fabrication"
                      className="bg-neutral-900 text-white"
                    >
                      5. Structural Steel Fabrication
                    </option>
                    <option
                      value="Stainless Steel (SS) Work"
                      className="bg-neutral-900 text-white"
                    >
                      6. Stainless Steel (SS) Work
                    </option>
                    <option
                      value="Other / Custom Work"
                      className="bg-neutral-900 text-white"
                    >
                      7. Other / Custom Work
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[#FF5500]" />
                    Your Message
                  </label>
                  <textarea
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your project details or site dimensions..."
                    className="w-full bg-transparent border-b border-neutral-700 focus:border-[#FF5500] text-white py-3 px-1 text-sm sm:text-base outline-none transition-colors duration-300 placeholder:text-neutral-600 font-medium resize-none"
                  />
                </div>

                {/* PREMIUM BUTTON */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative w-full py-4 rounded-[5px] bg-gradient-to-r from-[#FF5500] to-[#FF8800] text-white font-black text-xs sm:text-sm uppercase tracking-[0.2em] overflow-hidden shadow-[0_10px_35px_rgba(255,85,0,0.4)] hover:shadow-[0_15px_45px_rgba(255,85,0,0.6)] hover:scale-[1.01] transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>Send Message</span>
                    </span>
                  </button>
                </div>

                {/* SUCCESS MESSAGE */}
                <AnimatePresence>
                  {formSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-[3px] bg-[#FF5500]/10 border border-[#FF5500]/40 text-[#FF8800] text-xs font-bold flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-[#FF5500]" />
                      <span>
                        Thank you! Your message has been sent. Jamir Ansari will
                        contact you shortly.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>

        {/* ---------------- GOOGLE MAP (DUNDAEDA, GURUGRAM) ---------------- */}
        <div className="mt-20 sm:mt-28">
          <div className="relative rounded-[3px] overflow-hidden border border-white/10 bg-neutral-900/90 shadow-2xl">
            {/* Map Header */}
            <div className="p-4 sm:p-6 bg-neutral-950 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[3px] bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">
                    Dundaheda, Gurugram Location
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Visit our shop location for direct consultation and material
                    selection.
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Dundaheda+Gurugram+Haryana"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[3px] bg-neutral-900 border border-white/10 hover:border-[#FF5500]/50 text-xs font-bold text-neutral-300 hover:text-white transition-all shadow-md"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Open Google Maps</span>
              </a>
            </div>

            {/* Embedded Map */}
            <div className="relative w-full h-[350px] sm:h-[400px] bg-neutral-950">
              <iframe
                title="Dundaheda Gurugram Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.0917029587!2d77.0784918!3d28.5233261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1991df9ed841%3A0xb30713be2be24d35!2sDundahera%2C%20Sector%2020%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter:
                    "invert(90%) hue-rotate(180deg) contrast(110%) brightness(85%)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
