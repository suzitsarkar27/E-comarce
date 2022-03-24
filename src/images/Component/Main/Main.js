import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Main.css';

const Main = () => {
    const [shoping, setShopping] = useState([]);
    const [Card,setCard] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data=>setShopping(data))
    }, [])

    const handelclicked = (Product) => {
        console.log(Product)
       
        
  }
    return (
        <div className='Shop-container'>
            <div className="Product-container">
              
                {
                    shoping.map(shop => <Product
                    key={shop.id} 
                    shoping={shop}>
                    handelclicked={handelclicked}    
                   </Product>)
                }
            </div>
            <div className="card-container">
                 <h2>sildrt</h2>
            </div>
        </div>
    );
};

export default Main;