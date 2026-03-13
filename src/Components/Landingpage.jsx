import About from './About/page'
import Hero from './Home/page'
import Services from './Services/page'
import WorkGallery from './WorkGallery/page'
import animationbanner from '../assets/aboutsection.png'
import backimage from '../assets/hero-bg.png'
import Tools from './Tools/page'
import Contact from './Contact/page'
// import aboutsection from '../assets/aboutsection.png'
const Landingpage = () => {
  return (
    <>
      <Hero />
      <About />


      <Services />

      <div
        className="relative bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${backimage})` }}
      >
        <div className="bg-black/70 ">
          <Tools />
        </div>
      </div>
      {/* Parallax Section */}
      <div
        className="relative bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${animationbanner})`
        }}
      >
        <div className="bg-black/70">
          <WorkGallery />
        </div>
      </div>


      <Contact />

    </>
  )
}

export default Landingpage