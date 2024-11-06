import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard.jsx"
import About from "../pages/About.jsx"
import NotFound from "../pages/notFound.jsx"
import ApartmenDetails from "../pages/ApartmentDetails.jsx"



function AppRoutes() {
    return (

        <Routes>

            <Route path="/" element={<Dashboard />} />
            <Route path="/About" element={<About />} />
            <Route path="/ApartmentDetails/:ApartmentId" element={<ApartmenDetails />} />


            <Route path="*" element={<NotFound />} />



        </Routes>
    )
}

export default AppRoutes
