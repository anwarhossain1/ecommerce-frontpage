import React from "react";
import './carousel.scss';
import { Carousel } from 'react-bootstrap';
import cover from '../images/cover.png';


class BootstrapCarouselComponent extends React.Component {

    render() {
        return (
          <div>  
          <div class='container-fluid' >  
           <div className="row title" >  
          </div>  
          </div>  
          <div className='container-fluid' >  
          <Carousel  keyboard={false} pauseOnHover={true}>  
          <Carousel.Item style={{'height':"300px"}}  >  
          <img style={{'height':"300px"}}  
          className="d-block w-100"  
          src={cover}  />  
                  </Carousel.Item  >  
                  <Carousel.Item style={{'height':"300px"}}>  
                  <img style={{'height':"300px"}}  
                    className="d-block w-100"  
                     src={cover}  />   
                          </Carousel.Item>  
                        <Carousel.Item style={{'height':"300px"}}>  
                        <img style={{'height':"300px"}}  
                         className="d-block w-100"  
                          src={cover}  />  
                          </Carousel.Item>  
                         </Carousel>  
                 </div>  
         </div>  
        )
    };
}

export default BootstrapCarouselComponent;