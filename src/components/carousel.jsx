import React from "react";
import './carousel.scss';
import { Carousel } from 'react-bootstrap';


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
         src="https://picsum.photos/500/300?img=1"  />  
            <Carousel.Caption>  
              <h3>First Demo </h3>  
                  </Carousel.Caption>  
                  </Carousel.Item  >  
                  <Carousel.Item style={{'height':"300px"}}>  
                  <img style={{'height':"300px"}}  
                    className="d-block w-100"  
                     src="https://picsum.photos/500/300?img=1"  />  
                        <Carousel.Caption>  
                    <h3>Second Demo</h3>  
                       </Carousel.Caption>  
                          </Carousel.Item>  
                        <Carousel.Item style={{'height':"300px"}}>  
                        <img style={{'height':"300px"}}  
                         className="d-block w-100"  
                          src="https://picsum.photos/500/300?img=1"  />  
                         <Carousel.Caption>  
                           <h3>Third Demo</h3>  
                           </Carousel.Caption>  
                          </Carousel.Item>  
                         </Carousel>  
                 </div>  
         </div>  
        )
    };
}

export default BootstrapCarouselComponent;