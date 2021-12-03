import React from 'react'
import './Home.css'
import Product from './Product'
import MachingaBackg from './images/MachingaBack.svg'


function Home() {
    return (
        <div className = "home">
           <div className = "home__container">
               <img 
               className = "home__image"
               src = {MachingaBackg}
                alt = "" />
                <div className = "home__row">
                   <Product 
                    title = "The Lean start up"
                    price = {109.00}
                    image = "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                    rating = {5}
                    />
                   <Product 
                    title = "Gaming accessories"
                    price = {28.99}
                    image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
                    rating = {3}
                    />
                </div> 

                <div className = "home__row">
                <Product 
                    title = "Electronic Holiday gift guide"
                    price = {890.99}
                    image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/XCM_CUTTLE_1370663_1923434_CA_379x304_1X_en_CA._SY304_CB654091123_.jpg"
                    rating = {2}
                    />
                   <Product 
                    title = "Electronics"
                    price = {80.90}
                    image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                    rating = {4}
                    />
                    <Product 
                    title = "Phone"
                    price = {990}
                    image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuide/Fuji_Dash_GGquad_1X._SY116_CB654300275_.jpg"
                    rating = {2}
                    />
                </div> 

                <div className = "home__row">
                <Product 
                    title = "Deals and Promotions"
                    price = {28.99}
                    image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
                    rating = {5}
                    />
                </div> 

                

           </div>
        </div>
    )
}

export default Home
