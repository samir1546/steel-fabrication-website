const works = [
  {
    title: "Iron Gate",
    desc: "Strong and stylish iron gate fabrication.",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/1/XD/TT/LT/43151678/floor-form-centering-sheet-500x500.jpg"
  },
  {
    title: "Steel Railing",
    desc: "Modern railing design for stairs and balconies.",
    img: "https://5.imimg.com/data5/UR/LJ/RB/ANDROID-8179937/product-jpeg.jpg"
  },
  {
    title: "Steel Railing",
    desc: "Modern railing design for stairs and balconies.",
    img: "https://i.pinimg.com/originals/2f/f8/1b/2ff81b6c45bbd5ad14124ccaa52319f2.jpg"
  },
  {
    title: "Steel Railing",
    desc: "Modern railing design for stairs and balconies.",
    img: "https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2023/05/Designer-Glass-Steel-Railing.jpg"
  },
  {
    title: "Steel Railing",
    desc: "Modern railing design for stairs and balconies.",
    img: "https://www.shriramgates.com/images/stainless-steel-staircase-railing/SS-SCR_02.jpg"
  },
  {
    title: "Steel Railing",
    desc: "Modern railing design for stairs and balconies.",
    img: "https://img.4imz.com/media/KL65TJ8I/upload/stainless-steel-railing-manufacturer-in-vadodara-1568615507.jpg"
  },
  {
    title: "Window Grill",
    desc: "Durable steel grill for home security.",
    img: "https://www.jkcement.com/wp-content/uploads/2025/12/195.png"
  },
  {
    title: "Window Grill",
    desc: "Durable steel grill for home security.",
    img: "https://i.ytimg.com/vi/Pbrjxyg3Bq8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBK-DNv5GYepjkd50VGs8TV92JT0g"
  },
  {
    title: "Window Grill",
    desc: "Durable steel grill for home security.",
    img: "https://www.wdma.com.cn/cdn/shop/products/Simple-iron-windows-grills-design-modern-house_0daa8512-2c6d-469b-8a17-8032c63406ac_large.jpg?v=1577425195"
  },
  {
    title: "Metal Shed",
    desc: "Heavy duty shed fabrication for parking.",
    img: "https://2.wlimg.com/product_images/bc-500/2024/10/13783241/warehouse-metal-shed-1728040392-7627865.jpeg"
  },
  {
    title: "Metal Shed",
    desc: "Heavy duty shed fabrication for parking.",
    img: "https://www.veikous.com/cdn/shop/files/PG0301-15_Lean_to_Storage_Shed_0.jpg?v=1745914492&width=1200"
  },
  {
    title: "Metal Shed",
    desc: "Heavy duty shed fabrication for parking.",
    img: "https://3.imimg.com/data3/XH/SV/MY-9045502/large-outdoor-metal-storage-sheds-500x500.jpg"
  },
  {
    title: "Iron Door",
    desc: "Custom iron doors with strong welding.",
    img: "https://i.pinimg.com/236x/63/f8/0e/63f80e34dea0499575c6a0f046a8fdba.jpg"
  },
  {
    title: "Iron Door",
    desc: "Custom iron doors with strong welding.",
    img: "https://preciseirondoors.com/wp-content/uploads/2020/07/nova-3781.jpg"
  },
  {
    title: "Iron Door",
    desc: "Custom iron doors with strong welding.",
    img: "https://images.jdmagicbox.com/quickquotes/images_main/mtc0ndmyntg5na-1744325894-4act6iqb.jpg"
  },
  {
    title: "Balcony Grill",
    desc: "Decorative balcony grill fabrication.",
    img: "https://cms.interiorcompany.com/wp-content/uploads/2022/07/balcony-safety-grill-design-with-two-layers.jpg"
  },
  {
    title: "Balcony Grill",
    desc: "Decorative balcony grill fabrication.",
    img: "https://www.nobroker.in/blog/wp-content/uploads/2025/04/Classic-Simple-Modern-Window-Grill-Design-for-Balcony.webp"
  },
  {
    title: "Balcony Grill",
    desc: "Decorative balcony grill fabrication.",
    img: "https://cms.interiorcompany.com/wp-content/uploads/2022/07/apartments-balcony-grill-design-with-vertical-slats.jpg"
  }
]

const WorkGallery = () => {
  return (
    <section className=" text-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <h3 className="text-orange-500 tracking-[6px] font-semibold">
            OUR WORK
          </h3>

          <h2 className="text-4xl lg:text-5xl font-[myfont1] mt-4">
            Welding Work Gallery
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of our recent welding and fabrication projects.
          </p>

        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

          {works.map((work, index) => (

            <div
              key={index}
              className="relative group overflow-hidden rounded-xl"
            >

              {/* Image */}
              <img
                src={work.img}
                className="w-full rounded-xl transition duration-700 grayscale group-hover:grayscale-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition duration-500">

                <h4 className="text-xl font-semibold mb-1">
                  {work.title}
                </h4>

                <p className="text-sm text-gray-300">
                  {work.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default WorkGallery