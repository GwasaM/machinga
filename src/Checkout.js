import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal'


function Checkout() {
    return( <div className = "checkout">
        <div className = "checkout__left">
            <img className = "checkout__ad" src = "./images/advert1.jpg" alt = "" />

            </div>
            <div>
                <h2 className = "checkout__title">Your Shopping Basket</h2>
            </div>
            <div className = "checkout__right">
               
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout
