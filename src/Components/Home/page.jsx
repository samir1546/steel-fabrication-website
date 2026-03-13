import gsap from "gsap";
import { useEffect, useRef } from "react"

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
        // gsap.from(alltext.current.children, {
        //     opacity: 0,
        //     y: 50,
        //     duration:1,
        //     ease: "power1.out",
        //     stagger: 0.3
        // })
    }, [])
    return (

        <section id="home" className="relative h-screen w-full overflow-hidden bg-black">

            <div ref={gola} className="absolute w-[220px] h-[220px] border bg-orange-400 rounded-[70%] top-50 left-25 blur-[10rem]"></div>
            {/* <div ref={rightgola} className="absolute w-[200px] h-[200px] border bg-orange-400 rounded-[70%] bottom-20 right-1/4 blur-[1px]"></div> */}
            <img
                src="https://dfdx9u0psdezh.cloudfront.net/common/Background.svg"
                className="hidden sm:block absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 object-contain w-[130%] lg:w-[100%]"
            />
            <img
                src="https://dfdx9u0psdezh.cloudfront.net/common/Background_mobile.svg"
                className="block sm:hidden absolute inset-0 w-full h-full object-cover object-center"
            />

            <div ref={alltext} className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 gap-6">
                <p className="text-orange-500 tracking-[4px] sm:tracking-[6px] text-xl sm:text-lg font-semibold mb-2">
                    STRONG. STEEL. FABRICATION.
                </p>
                <h1 className="text-white  text-[3rem] sm:text-[6rem] lg:text-[8rem]  font-[myfont1] font-bold leading-none flex items-center gap-4 ">
                    EKTA <span className="relative border border-orange-500 px-6 py-2 bg-[#E8602E21]"> FABRICATION
                        <span className="absolute w-2 h-2 bg-white rounded-full -top-1 -left-1"></span>
                        <span className="absolute w-2 h-2 bg-white rounded-full -top-1 -right-1"></span>
                        <span className="absolute w-2 h-2 bg-white rounded-full -bottom-1 -left-1"></span>
                        <span className="absolute w-2 h-2 bg-white rounded-full -bottom-1 -right-1"></span>
                    </span>
                </h1>

                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide mt-2">
                    M . S . S . S . FABRICATION
                </h2>
                <p className="text-gray-300 text-lg sm:text-xl max-w-3xl font-semibold mt-2">
                    Spl In: Fancy Gate, Grill, Railing, Shutter, Window,
                    Channel Gate, Fiber Shed, Tin Shed Etc.
                </p>



                <div className="flex items-center gap-4 mt-4">
                    <div className="flex -space-x-3">
                        <img className="w-10 h-10 rounded-full border border-white" src="https://randomuser.me/api/portraits/men/32.jpg" />
                        <img className="w-10 h-10 rounded-full border border-white" src="https://randomuser.me/api/portraits/women/44.jpg" />
                        <img className="w-10 h-10 rounded-full border border-white" src="https://randomuser.me/api/portraits/men/45.jpg" />
                        <img className="w-10 h-10 rounded-full border border-white" src="https://randomuser.me/api/portraits/women/65.jpg" />
                    </div>

                    <p className="text-gray-300 text-base">
                        <span className="text-orange-500 font-semibold">1 Million+</span> Happy Customers
                    </p>

                </div>



                <div className="inline-block mt-6">

                    <button className=" relative font-[myfont1] text-white  px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-3 text-sm sm:text-lg lg:text-xl  rounded-lg font-semibold overflow-hidden group bg-gradient-to-r from-orange-500 to-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:shadow-[0_0_35px_rgba(249,115,22,0.9)] hover:-translate-y-1 transition-all duration-500 ">
                        <span className=" absolute left-[-120%] top-0 h-full w-[40%] bg-white/30 skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 "></span>
                        <span className="relative z-10 flex items-center gap-2">
                            Call Me →
                        </span>
                    </button>
                </div>
            </div>

        </section>

    )

}

export default Hero