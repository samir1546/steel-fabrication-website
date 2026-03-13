import React from "react"

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0b0b] text-white pt-20 pb-10 overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500 blur-[200px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-[myfont1]">
            Jamir Welding
            <span className="text-orange-500"> Works</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            We provide professional welding and metal fabrication services
            including gates, railings, grills and sheds with strong and
            durable finishing.
          </p>
        </div>


        {/* services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Services
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li className="hover:text-orange-500 transition cursor-pointer">
              Iron Gate Fabrication
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Balcony Railings
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Window Grills
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Metal Shed Work
            </li>

          </ul>
        </div>


        {/* contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Contact
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li>📍 Delhi, India</li>
            <li>📞 +91 8588928060</li>
            <li>✉ jamiransari@email.com</li>

          </ul>
        </div>


        {/* quick links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li className="hover:text-orange-500 transition cursor-pointer">
              Home
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              About
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Services
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Contact
            </li>

          </ul>
        </div>

      </div>


      {/* bottom line */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500 text-sm">

        © {new Date().getFullYear()} jamir Welding Works. All rights reserved.

      </div>

    </footer>
  )
}

export default Footer