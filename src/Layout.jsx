import { Outlet } from "react-router"
import Navbar from "./Components/Navbar/page"
import Footer from "./Components/Footer/page"


const Layout = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout