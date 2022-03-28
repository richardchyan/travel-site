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

function App() {

  return (
    <div className="App">
     <Navbar />
     {/* <Dropdown/>  */}
     {/* <Slider slides={SliderData}/> */}
     <TextCards />
     <ImageCards />
    </div>
  );
}

export default App;
