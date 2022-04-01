import Accordion from './components/Accordion';
import './App.css';
import Navbar from './Navbar'
import Dropdown from './components/Dropdown';
import Slider from './Slider/Slider';
import SliderData from './Slider/SliderData';
import vacayimg from './images/img1.jpg'
import Carousel from './components/Carousel';
import TextCards from './TextCards';
import ImageCards from './ImageCards';
import Footer from './Footer';




function App() {

  return (
    <div className="App">
     <Navbar />
     <TextCards />
     <ImageCards />
     <Footer />
    </div>
  );

}

export default App;
