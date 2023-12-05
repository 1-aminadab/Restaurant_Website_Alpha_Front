import React,{useState, useEffect} from "react";
// style
import './Home.css'
// components
import Preload from "./components/Preload";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Service";
import About from "./components/About";
import SpecialDish from "./components/SpecialDish";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import Features from "./components/Features";
import Event from "./components/Event";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
//

function Home() {
 
  const [preloadClass,setPreloadClass] = useState('')

  useEffect(() => {
    const handleLoad = () => {
      // Your code to handle the load event
      setPreloadClass('loaded')
      
    };
 
    // Add the event listener when the component mounts
    window.addEventListener('load', handleLoad);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <div>

   
      <Preload />
      <Topbar />
      <Header />
      <main>
        <article>
          <Hero />
          <Services />
          <About />
          <SpecialDish />
          <Menu />
          <Testimonials />
          <Reservation />
          <Features />
          <Event />
        </article>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Home;
