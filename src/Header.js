import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingCart";
//import HeaderLogo from './images/MachingaLogo.svg'
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


function Header() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to = "/">
            <img 
            className="header__logo" src= "./images/MachingaLogo.svg"
            />
            </Link>

            <div className = "header__search">
                <input className = "header__searchInput"
                type = "text" />
                <SearchIcon className = "header__searchIcon" />
            </div>

            <div className = "header__nav">
                <div className = 'header__option'>
                    <span className = 'header__optionL1'>
                        Hello Guest
                    </span>
                    <span className = 'header__optionL2'>
                        Sign In
                    </span>


                </div>

                <div className = 'header__option'>
                    <span className = 'header__optionL1'>
                        Returns
                    </span>
                    <span className = 'header__optionL2'>
                        & Orders
                    </span>

                </div>

                <div className = 'header__option'>
                    <span className = 'header__optionL1'>
                        Your
                    </span>
                    <span className = 'header__optionL2'>
                        Prime
                    </span>

                </div>
                <Link to = "/Checkout">
                <div className = "header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className = "header__optionL2 header__basketCount">
                        {basket?.length}
                        </span>
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
