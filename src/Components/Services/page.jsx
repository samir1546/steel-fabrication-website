import servicesImg from "../../assets/fullbanner.png";

const services = [
  {
    title: "Arc Welding",
    desc: "Strong arc welding service for gates, grills and steel structures.",
    icon: "⚡"
  },
  {
    title: "Metal Fabrication",
    desc: "Custom fabrication for doors, windows, frames and industrial parts.",
    icon: "🛠"
  },
  {
    title: "Gate & Grill Work",
    desc: "Heavy duty welding for main gates, railings and security grills.",
    icon: "🏗"
  },
  {
    title: "Steel Structure",
    desc: "Industrial steel structure welding for factories and warehouses.",
    icon: "🏭"
  },
  {
    title: "Machine Repair",
    desc: "Repair and welding of broken metal machines and tools.",
    icon: "⚙"
  },
  {
    title: "Custom Welding",
    desc: "Special welding work based on customer requirements.",
    icon: "🔩"
  }
];


const Services = () => {
  return (
    <section id="services" className="bg-[#0b0b0b] text-white py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/"></div>
      <img
        src={servicesImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[5px] "
      />


      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <h3 className="text-orange-500 tracking-[6px] font-semibold">
            OUR SERVICES
          </h3>

          <h2 className="text-4xl lg:text-5xl font-[myfont1] mt-4">
            Professional Welding Services
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Reliable welding solutions for gates, grills,
            steel structures and industrial fabrication.
          </p>

        </div>




        {/* Services video  */}



        {/* Services Video */}

        <div className="flex justify-center mt-16">

          <div className="w-[100%] h-[35vw] rounded-2xl overflow-hidden
  shadow-[0_25px_80px_rgba(0,0,0,0.8)] border border-orange-500/30">

            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover"
              src="https://videos.pexels.com/video-files/4488661/4488661-hd_1920_1080_25fps.mp4"
            />

          </div>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => (

            <div
              key={index}
              className="group relative p-[2px] rounded-xl
              bg-gradient-to-r from-transparent via-orange-500 to-transparent
              opacity-70 hover:opacity-100 transition duration-500"
            >

              {/* Inner Card */}
              <div className="bg-[#151515] p-8 rounded-[10px] border border-white/10
              h-full transition duration-500
              group-hover:-translate-y-2
              group-hover:shadow-[0_15px_50px_rgba(255,120,0,0.35)]">

                {/* Icon */}
                <div className="text-orange-500 text-4xl mb-4 transition duration-500 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold mb-3  font-[myfont1]">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed font-[myfont1]">
                  {service.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Services