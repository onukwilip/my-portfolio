import "./App.css";
import CirclesSection from "./components/circles/CirclesSection";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Testimonial from "./components/testimonial/Testimonial";
import Work from "./components/work/Work";
import blob from "./img/blob.svg";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div className="blob">
        <img src={blob} />
      </div>
      <Header />
      <Home />
      <About />
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