import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {

    const gola = useRef(null);
    const alltext = useRef(null);

    useEffect(() => {

        gsap.to(gola.current, {
            rotate: 60,
            y: 60,
            x: 60,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        })

        gsap.from(alltext.current.children, {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.2
        })

    }, [])

    return (

        <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">

            {/* glow circle */}

            <div
                ref={gola}
                className="absolute w-[180px] h-[180px] md:w-[240px] md:h-[240px] bg-orange-500 rounded-full blur-[120px] top-32 left-10"
            />

            {/* background */}

            <img
                src="https://dfdx9u0psdezh.cloudfront.net/common/Background_mobile.svg"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            {/* content */}

            <div
                ref={alltext}
                className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl gap-6"
            >

                {/* tagline */}

                <p className="text-orange-500 tracking-[3px] md:tracking-[6px] text-sm md:text-lg font-semibold">
                    STRONG • STEEL • FABRICATION
                </p>

                {/* heading */}

                <h1 className="text-white font-bold leading-tight flex flex-col md:flex-row items-center gap-4 text-4xl sm:text-5xl md:text-7xl">

                    <span>EKTA</span>

                    <span className="relative border border-orange-500 px-4 py-2 bg-[#E8602E21]">

                        FABRICATION

                        <span className="absolute w-2 h-2 bg-white rounded-full -top-1 -left-1"></span>
                        <span className="absolute w-2 h-2 bg-white rounded-full -top-1 -right-1"></span>
                        <span className="absolute w-2 h-2 bg-white rounded-full -bottom-1 -left-1"></span>
                        <span className="absolute w-2 h-2 bg-white rounded-full -bottom-1 -right-1"></span>

                    </span>

                </h1>

                {/* sub heading */}

                <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-bold tracking-wide">
                    M.S.S.S FABRICATION
                </h2>

                {/* description */}

                <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl">
                    Spl In: Fancy Gate, Grill, Railing, Shutter, Window,
                    Channel Gate, Fiber Shed, Tin Shed Etc.
                </p>

                {/* customers */}

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">

                    <div className="flex -space-x-3">

                        <img className="w-9 h-9 rounded-full border border-white" src="https://randomuser.me/api/portraits/men/32.jpg" />
                        <img className="w-9 h-9 rounded-full border border-white" src="https://randomuser.me/api/portraits/women/44.jpg" />
                        <img className="w-9 h-9 rounded-full border border-white" src="https://randomuser.me/api/portraits/men/45.jpg" />
                        <img className="w-9 h-9 rounded-full border border-white" src="https://randomuser.me/api/portraits/women/65.jpg" />

                    </div>

                    <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left">
                        <span className="text-orange-500 font-semibold">1 Million+</span> Happy Customers
                    </p>

                </div>

                {/* button */}

                <button className="mt-4 font-semibold text-white px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-lg rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.6)] hover:shadow-[0_0_40px_rgba(249,115,22,1)] hover:-translate-y-1 transition-all duration-500">

                    Call Me →

                </button>

            </div>

        </section>

    )

}

export default Hero