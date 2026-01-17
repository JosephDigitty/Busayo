import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import About from "./Component/About"
import Book from "./Component/Book"
import Contact from "./Component/Contact"
import Footer from "./Component/Footer"
import Hero from "./Component/Hero"
import Navbar from "./Component/Nav"
import Service from "./Component/Section"
import Testimonials from "./Component/Testimonial"
import MainLayout from "./Layout/MainLayout"
import Homepage from "./Pages/Homepage"
import { RouterProvider } from "react-router"
import AboutPage from "./Pages/AboutPage"
import ServicePage from "./Pages/ServicePage"
import BookPage from "./Pages/BookPage"
import ContactPage from "./Pages/ContactPage"
import Gallery from "./Pages/Gallery"


function App() {
  const router = createBrowserRouter (
      createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/services" element={<ServicePage/>}/>
          <Route path="/book" element={<BookPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Route>
      ),
  )

  return (<RouterProvider router={router}/> )
}

export default App
