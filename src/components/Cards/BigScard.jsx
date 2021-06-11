import React from 'react';
import { Card } from 'react-bootstrap';

import shopno from '../../images/shopno.jpg';

const BigScard = () => {
    const data=[
        {
            image:shopno
        }
    ]
    return (
        <>
        <Card style={{paddingLeft:"10px", width: "18rem" }}>
        <Card.Img style={{height:'200px'}} variant="top" src={shopno} />

        </Card>
            
        </>
    )
}

export default BigScard
