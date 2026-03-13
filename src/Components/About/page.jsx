import about_img from "../../assets/About.png"
import about_bg from "../../assets/aboutsection.png"
const About = () => {

    return (
        <section id="about" className="relative bg-[#0b0b0b] text-white pt-28 pb-24 -mt-32 rounded-t-[40px] z-20">



            <div className="absolute inset-0 bg-black/10"></div>
            <img
                src={about_bg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-25 blur-2xl"
            />


            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                <div className="relative group ">
                    <img
                        src={about_img}
                        className="rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] w-full object-cover p-5 bg-white group-hover:scale-105 transition duration-500    "
                    />
                    <div className="absolute -z-10 top-10 left-10 w-full h-full bg-orange-500 blur-[120px] opacity-30"></div>
                </div>

                {/* Text Section */}
                <div className="space-y-6">

                    <h3 className="text-orange-500 tracking-[5px] font-semibold">
                        ABOUT OUR WORK
                    </h3>

                    <h2 className="text-4xl lg:text-5xl font-[myfont1] leading-tight">
                        Trusted Welding & Fabrication
                        <span className="text-orange-500"> Since 2000</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Our workshop specializes in high-quality steel fabrication including
                        gates, railings, shutters, windows, channel gates, and custom metal work.
                        With years of experience and skilled craftsmanship, we deliver strong,
                        durable, and beautifully designed fabrication work for homes and businesses.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-6 pt-4">

                        {/* Card 1 */}
                        <div className="group relative p-[1px] rounded-xl bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 hover:opacity-100 transition duration-500">

                            <div className="bg-[#151515] p-5 rounded-xl border border-white/10 h-full">
                                <h4 className="text-2xl font-bold text-orange-500">25+</h4>
                                <p className="text-gray-400 text-sm">Years Experience</p>
                            </div>

                        </div>


                        {/* Card 2 */}
                        <div className="group relative p-[1px] rounded-xl bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 hover:opacity-100 transition duration-500">

                            <div className="bg-[#151515] p-5 rounded-xl border border-white/10 h-full">
                                <h4 className="text-2xl font-bold text-orange-500">5000+</h4>
                                <p className="text-gray-400 text-sm">Projects Completed</p>
                            </div>

                        </div>


                        {/* Card 3 */}
                        <div className="group relative p-[1px] rounded-xl bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 hover:opacity-100 transition duration-500">

                            <div className="bg-[#151515] p-5 rounded-xl border border-white/10 h-full">
                                <h4 className="text-2xl font-bold text-orange-500">100%</h4>
                                <p className="text-gray-400 text-sm">Quality Work</p>
                            </div>

                        </div>


                        {/* Card 4 */}
                        <div className="group relative p-[1px] rounded-xl bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 hover:opacity-100 transition duration-500">

                            <div className="bg-[#151515] p-5 rounded-xl border border-white/10 h-full">
                                <h4 className="text-2xl font-bold text-orange-500">24/7</h4>
                                <p className="text-gray-400 text-sm">Customer Support</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About