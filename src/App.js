import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
// import Footer from "./components/Footer";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
