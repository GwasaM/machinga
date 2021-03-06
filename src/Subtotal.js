import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className = "subtotal">
            <CurrencyFormat 
             renderText = {(value) => (
                 <>
                   <p>
                       {/* part of the work */}
                       Subtotal (0 items); <span>0</span>
                   </p>
                   <small className = "subtotal__gift">
                   <input type = "checkbox" /> This order contains a gift    
                   </small>
                 </>
             )}
             decimalScale = {2}
             value = {0}
             displayType = {"text"}
             thousandSeparator = {true}
             prefix = {"$"}
                 />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
