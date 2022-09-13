import "./App.css";
import CirclesSection from "./components/circles/CirclesSection";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
import Work from "./components/work/Work";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <CirclesSection />
      <Work />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
