import { Helmet } from "react-helmet";
import About from "../Component/About";
import Book from "../Component/Book";
import Hero from "../Component/Hero";
import Navbar from "../Component/Nav";
import Service from "../Component/Section";
import Testimonials from "../Component/Testimonial";
import Footer from "../Component/Footer";
import Contact from "../Component/Contact";

const Homepage = () => {
    return ( 
        <>
        <Helmet>
        <title>Busayo Davies CSCM, MPMC</title>
        <meta name="description" content="Entrepreneur
        Social Impact Coach/Mentor
        Transformation Trainer/Speaker
        ADVOCATE|| boychild|| Charity @concept_smile_projects" />
        <meta name="keywords" content="Social Impact, Growth Impact, Life Coach, Life Navigation" />
        </Helmet>
        <Hero/>
        <About/>
        <Service/>
        <Book/>
        <Testimonials/>
        <Contact/>
        </>
     );
}
 
export default Homepage;