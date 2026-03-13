import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Landingpage from "./Components/Landingpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Landingpage />
            }
        ]
    }
])

export default router