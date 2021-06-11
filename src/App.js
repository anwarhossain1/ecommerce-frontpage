
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from './components/carousel';
import Navbar from './components/Navbar/navbar';
import Card from "./components/Cards/Card";
import Navbar2 from "./components/Navbar/navbar2";
import Navbar3 from "./components/Navbar/navbar3";
import Cards from "./components/Cards/Cards";
import BigS from "./components/Cards/BigS";
import Footer from "./components/Footer/Footer";
import Construction from "./components/Cards/Construction";

function App() {
  const nav3=[
    'Grocery',
    'Beauty/Personal Care',
    'Toys',
    'Fashion',
    'Electronics',
    'Appliance',
    'Home & Furniture',
    'Pharmacy',
    'Flower',
    'Construction'
  ]
  
  return (
    <div className="App">

      <Navbar/>
      <Navbar2/>
      <Navbar3/>
     <Carousel/>
     <div className="img-date"><span>Valid 5/19/21 - 6/13/21</span></div>
     <Cards/>
     <BigS/>
     <Construction/>
     <Footer/>
    </div>
  );
}

export default App;
