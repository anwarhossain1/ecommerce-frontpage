import React from 'react'
import CardP from './Card';
import './cards.css';
import icon from '../../images/right-arrow.png';
import iconn from '../../images/startup.png';
const Cards = () => {
    return (
      <>
      <div className="title" style={{height:'50px',margin:'10px'}}>
      <ul>
            <li>
              <h1 className="hh" ><img style={{width:"2rem"}} src={iconn}/>Start Your Wholesale Shopping</h1>
            </li>
            <li >
             <button style={{float:'right',border:'none',fontWeight:'bold',background:'none'}}>Next<img style={{width:"1rem"}} src={icon}/></button>
            </li>
          </ul>

      </div>
          
       

        <CardP />
      </>
    );
}

export default Cards
