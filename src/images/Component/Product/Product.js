import React from 'react';
import './Product.css';
const Product = (Props) => {
    console.log(Props)
    console.log(Props.children[1])
    const { img, name, price, ratings, seller, } = Props.shoping;
 
    return (
        <div className='Product-containers'>
            <img src={img} alt="" />
            <div>
            <h2>name:{name}</h2>
                <p>Price:{price}</p>
                <p><small>Manufactur:{ seller }</small></p>
                <p><small>Ranting:{ratings}</small></p>
            </div>
            <button onClick={(()=>Props.children[1](Props.shoping))} className='Card-button'>Add to Cart</button>
        </div>
    );
};

export default Product;