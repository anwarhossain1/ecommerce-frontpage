import React, { Component } from 'react'
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
import Realestate from "./components/Cards/Realestate";
import SideDrawer from './components/sideDrawer';
import Backdrop from './components/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    console.log("hello")
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }
  
  render(){

    let backdrop;
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
      sideDrawer = <SideDrawer />
    }

    return (
      <div style={{height:"100%"}}>
       
       
  
        <Navbar/>
        <Navbar2 drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
        
        <Navbar3/>
       <Carousel/>
       <div className="img-date"><span>Valid 5/19/21 - 6/13/21</span></div>
       <Cards/>
       <BigS/>
       <Construction/>
       <Realestate/>
       <Footer/>
      </div>
    );
  }
}

export default App;
