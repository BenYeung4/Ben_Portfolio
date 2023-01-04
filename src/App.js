import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";
import "./App.css";

// import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
