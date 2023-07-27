import React, {useEffect, useState} from 'react';
import Product from '../Product/Product';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([])

   useEffect( () =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
   }, []);

   useEffect( ()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart)
   },[])

   const handleAddToCart = (product) => { 
    // cart.push(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product)
}

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;