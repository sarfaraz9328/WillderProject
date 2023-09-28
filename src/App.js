import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero";
import ImageGallery from "./component/imageGallery/gallery";
import About from "./component/about";
import Traingle from "./component/triangle";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageGallery />
      <About />
      <Traingle />
      <Footer />
    </div>
  );
};

export default App;
