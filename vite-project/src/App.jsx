import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Marquee from "./Components/Marquee";
import Industries from "./Components/Industries";
import Statement from "./Components/Statement";
import Expertise from "./Components/Expertise";
import Products from "./Components/Products";
import Approach from "./Components/Approach";
import Clients from "./Components/Clients";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";

function App() {
  return (
    <div id="top">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Marquee />
        <Industries />
        <Statement />
        <Expertise />
        <Products />
        <Approach />
        <Clients />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;