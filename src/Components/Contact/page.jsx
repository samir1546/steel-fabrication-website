const Contact = () => {
    return (
        <section
            id="contact"
            className="relative py-32 bg-cover bg-center"
            style={{
                backgroundImage:
                    "url(https://thumbs.dreamstime.com/b/artistic-welding-sparks-light-industrial-background-blue-flash-orange-sparkles-85300810.jpg)"
            }}
        >

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT TEXT */}
                <div className="space-y-8">

                    <h3 className="text-orange-500 tracking-[6px] font-semibold">
                        CONTACT US
                    </h3>

                    <h2 className="text-5xl font-[myfont1] leading-tight text-white">
                        Need Welding Work
                        <span className="text-orange-500"> Done?</span>
                    </h2>

                    <p className="text-gray-300 text-lg">
                        From iron gates to balcony railings, grills and metal sheds —
                        our welding experts deliver strong and durable fabrication work.
                    </p>

                    <div className="flex gap-6 pt-6">

                        <div className="bg-[#111] px-6 py-4 rounded-xl border border-white/10">
                            <h4 className="text-orange-500 text-2xl font-bold">25+</h4>
                            <p className="text-gray-400 text-sm">Years Experience</p>
                        </div>

                        <div className="bg-[#111] px-6 py-4 rounded-xl border border-white/10">
                            <h4 className="text-orange-500 text-2xl font-bold">5000+</h4>
                            <p className="text-gray-400 text-sm">Projects</p>
                        </div>

                    </div>

                </div>

                {/* FORM */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-orange-500 to-transparent">

                    <div className="bg-[#0b0b0b]/90 backdrop-blur-xl p-10 rounded-2xl border border-white/10 space-y-6">

                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Get Free Quote
                        </h3>

                        {/* name */}
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full text-white border border-white/10 p-4 rounded-lg
              focus:border-orange-500 outline-none transition"
                        />

                        {/* phone */}
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full text-white border border-white/10 p-4 rounded-lg
              focus:border-orange-500 outline-none transition"
                        />

                        {/* work */}
                        <input
                            type="text"
                            placeholder="Work Details (Gate, Railing, Shed...)"
                            className="w-full text-white border border-white/10 p-4 rounded-lg
              focus:border-orange-500 outline-none transition"
                        />

                        {/* message */}
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full text-white border border-white/10 p-4 rounded-lg
              focus:border-orange-500 outline-none transition"
                        ></textarea>

                        {/* button */}
                        <button
                            className="w-full py-4 rounded-lg bg-orange-500 font-semibold
              hover:bg-orange-600 transition shadow-[0_15px_40px_rgba(249,115,22,0.5)]"
                        >
                            Send Message
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact