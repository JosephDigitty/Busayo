import { useEffect } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";


const MainLayout = () => {
    const pathName = useLocation()

    useEffect(() => {
      window.scrollTo(0,0)  
    },[pathName])

    return ( 
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default MainLayout;