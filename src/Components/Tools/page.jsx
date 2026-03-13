// const tools = [
//   {
//     name: "Angle Grinder",
//     img: "https://www.mrpowertools.com/data/upload/ueditor/20240206/65c1a12c8394d.jpg",
//     desc: "Used for cutting and grinding metal surfaces."
//   },
//   {
//     name: "Welding Machine",
//     img: "https://tiimg.tistatic.com/fp/1/009/159/welding-machine-623.jpg",
//     desc: "Powerful machine for strong welding joints."
//   },
//   {
//     name: "Power Drill",
//     img: "https://m.media-amazon.com/images/I/71GhQ-RE6PL.jpg",
//     desc: "Precision drilling for steel structures."
//   },
//   {
//     name: "Metal Cutter",
//     img: "https://m.media-amazon.com/images/I/51E8KOuabCL.jpg",
//     desc: "Heavy duty cutting machine for metal."
//   },
//   {
//     name: "Welding Helmet",
//     img: "https://m.media-amazon.com/images/I/41yVqUhfPYL._AC_SR290,290_.jpg",
//     desc: "Safety helmet used during welding."
//   },
//   {
//     name: "Steel Hammer",
//     img: "https://paintnhardware.com/3623-medium_default/stanley-51-186-claw-hammer-with-fibreglass-handle-16-450g-.jpg",
//     desc: "Heavy hammer for shaping metal."
//   },
//   {
//     name: "Clamp Tool",
//     img: "https://www.aloktools.com/wp-content/uploads/2017/04/C-CLAMPS-CASTED-768x768.jpg",
//     desc: "Used for holding metal pieces firmly."
//   },
//   {
//     name: "Welding Rod",
//     img: "https://5.imimg.com/data5/DC/WT/MY-38382173/stainless-steel-welding-electrodes.jpg",
//     desc: "Essential rod used in welding process."
//   }
// ]

// const Tools = () => {
//   return (
//     <section className="bg-[#0b0b0b] text-white py-24 overflow-hidden">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h3 className="text-orange-500 tracking-[5px] font-semibold">
//             OUR TOOLS
//           </h3>

//           <h2 className="text-4xl lg:text-5xl font-[myfont1] mt-4">
//             Professional Welding Equipment
//           </h2>

//           <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//             Modern tools that ensure strong and durable welding work.
//           </p>
//         </div>

//       </div>

//       {/* Slider */}
//       <div className="slider">

//         <div className="slide-track">

//           {[...tools, ...tools].map((tool, index) => (

//             <div key={index} className="tool-card">

//               <img src={tool.img}  className="tool-img"/>

//               <div className="p-5 text-center rounded-full">
//                 <h4>{tool.name}</h4>
//                 <p>{tool.desc}</p>
//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   )
// }

// export default Tools



const tools = [
  {
    name: "Angle Grinder",
    img: "https://www.mrpowertools.com/data/upload/ueditor/20240206/65c1a12c8394d.jpg",
    desc: "Used for cutting and grinding metal surfaces."
  },
  {
    name: "Welding Machine",
    img: "https://tiimg.tistatic.com/fp/1/009/159/welding-machine-623.jpg",
    desc: "Powerful machine for strong welding joints."
  },
  {
    name: "Power Drill",
    img: "https://m.media-amazon.com/images/I/71GhQ-RE6PL.jpg",
    desc: "Precision drilling for steel structures."
  },
  {
    name: "Metal Cutter",
    img: "https://m.media-amazon.com/images/I/51E8KOuabCL.jpg",
    desc: "Heavy duty cutting machine for metal."
  },
  {
    name: "Welding Helmet",
    img: "https://m.media-amazon.com/images/I/41yVqUhfPYL._AC_SR290,290_.jpg",
    desc: "Safety helmet used during welding."
  },
  {
    name: "Steel Hammer",
    img: "https://paintnhardware.com/3623-medium_default/stanley-51-186-claw-hammer-with-fibreglass-handle-16-450g-.jpg",
    desc: "Heavy hammer for shaping metal."
  },
  {
    name: "Clamp Tool",
    img: "https://www.aloktools.com/wp-content/uploads/2017/04/C-CLAMPS-CASTED-768x768.jpg",
    desc: "Used for holding metal pieces firmly."
  },
  {
    name: "Welding Rod",
    img: "https://5.imimg.com/data5/DC/WT/MY-38382173/stainless-steel-welding-electrodes.jpg",
    desc: "Essential rod used in welding process."
  }
]

const Tools = () => {
  return (
    <section id="tools" className=" text-white py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 text-center mb-20">

        <h3 className="text-orange-500 tracking-[6px] font-semibold">
          OUR TOOLS
        </h3>

        <h2 className="text-4xl lg:text-5xl font-[myfont1] mt-4">
          Professional Welding Equipment
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          High quality industrial tools that ensure precision,
          durability and strength in welding work.
        </p>

      </div>


      {/* Slider */}
      <div className="slider">

        <div className="slide-track">

          {[...tools, ...tools].map((tool, index) => (

            <div key={index} className="tool-card">

              <div className="img-box">
                <img src={tool.img} className="rounded-full" />
              </div>

              <div className="content">
                <h4>{tool.name}</h4>
                <p>{tool.desc}</p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Tools