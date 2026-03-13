import { NavLink } from "react-router"

const Navbar = () => {
    return (
        <div className='fixed top-0 w-full z-50 flex items-center justify-center text-white mt-1 px-3 sm:px-0'>

            <nav className='p-3 sm:p-4 flex items-center justify-center 
            border-white/50 border-l border-r 
           
            bg-[#E8602E21]/50
            px-5 sm:px-8 md:px-10 
            mt-5 rounded-[10px] shadow-lg backdrop-blur-sm'>

                <ul className='flex items-center justify-center 
                gap-5 sm:gap-8 md:gap-10 
                text-[14px] sm:text-[16px] md:text-[17px] 
                px-2 sm:px-4 md:px-6 
                font-[myfont] font-medium'>

                    {/* Home */}
                    <li className="overflow-hidden h-[22px] sm:h-[25px]">
                        <a href="/" className="relative block group tracking-tight">

                            <span className="block transition-transform duration-300 tracking-wide group-hover:-translate-y-full">
                                Home
                            </span>

                            <span className="block absolute left-0 top-full text-orange-500 tracking-wide transition-transform duration-300 group-hover:-translate-y-full">
                                Home
                            </span>

                        </a>
                    </li>

                    {/* About */}
                    <li className="overflow-hidden h-[22px] sm:h-[25px]">
                        <a href="#about" className="relative block group">

                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                About
                            </span>

                            <span className="block absolute left-0 top-full text-orange-500 transition-transform duration-300 group-hover:-translate-y-full">
                                About
                            </span>

                        </a>
                    </li>

                    {/* Services */}
                    <li className="overflow-hidden h-[22px] sm:h-[25px]">
                        <a href="#services" className="relative block group">

                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                Services
                            </span>

                            <span className="block absolute left-0 top-full text-orange-500 transition-transform duration-300 group-hover:-translate-y-full">
                                Services
                            </span>

                        </a>
                    </li>

                    {/* Contact */}
                    <li className="overflow-hidden h-[22px] sm:h-[25px]">
                        <a href="#contact" className="relative block group">

                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                Contact
                            </span>

                            <span className="block absolute left-0 top-full text-orange-500 transition-transform duration-300 group-hover:-translate-y-full">
                                Contact
                            </span>

                        </a>
                    </li>

                </ul>

            </nav>

        </div>
    )
}

export default Navbar