import About from "../pages/About";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar"
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";


const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}

export default MainLayout;