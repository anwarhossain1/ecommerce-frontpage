import React from 'react'
import BigScard from './BigScard'
import BigScard2 from './BigScard2'
import icon from '../../images/right-arrow.png';
import iconn from '../../images/shopping-cart(1).png';

const BigS = () => {
    return (
        <div>
            <div style={{height:'50px',margin:'10px'}}>
      <ul id='menu'>
            <li>
              <h1 style={{float:'left'}}><img src={iconn} style={{width:"2rem"}} />Big Selection Stores</h1>
            </li>
            <li >
              <button style={{float:'right',border:'none',fontWeight:'bold',background:'none'}}>Next<img style={{width:"1rem"}} src={icon}/></button>
            </li>
          </ul>

      </div>
            <BigScard/>
            <BigScard2/>

        </div>
    )
}

export default BigS
