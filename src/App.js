import "./App.css";
import CirclesSection from "./components/circles/CirclesSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Testimonial from "./components/testimonial/Testimonial";
import Work from "./components/work/Work";
import blob from "./img/blob.svg";
import { useEffect } from "react";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="blob">
        <img src={blob} />
      </div>
      <Header />
      <Home />
      <About />
      <Skills />
      <CirclesSection />
      <Work />
      <Portfolio />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
