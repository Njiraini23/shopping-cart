

//create the context
//provide the state to the context
//wrap context in root component
//consume the context using useContext

import { createContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({children}){
    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);
    const [cartItems, setCartItems] = useState([]); 
    const navigate = useNavigate() 
    
    async function fetchListOfProducts(){
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json(); 

        console.log(result);

        if(result && result?.products) {
            setListOfProducts(result?.products);
            setLoading(false)
        }
    }

    function handleAddToCart(getProductDetails){
        console.log(getProductDetails);

        let cpyExistingCartItems = [...cartItems];
        const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(cartItem=>cartItem.id === getProductDetails.id);

        console.log(findIndexOfCurrentItem);

        if(findIndexOfCurrentItem === -1){
            cpyExistingCartItems.push({
                ...getProductDetails,
                quantity : 1,
                totalPrice: getProductDetails?.price
            })
        } else {

        }
        console.log(cpyExistingCartItems, "cpyExistingCartItems");
        setCartItems(cpyExistingCartItems);
        localStorage.setItem('cartItems', JSON.stringify(cpyExistingCartItems));
        navigate('/cart'); 
        
    }

   useEffect(()=>{
    fetchListOfProducts();
    setCartItems(JSON.parse(localStorage.getItem('cartItems') || []))
   }, []);
   
   console.log(cartItems);

    return <ShoppingCartContext.Provider
     value={{ 
        listOfProducts, 
        loading, 
        setLoading, 
        productDetails, 
        setProductDetails,
        handleAddToCart,
        cartItems, 
        }}>
        {children}
        </ShoppingCartContext.Provider>
}

export default ShoppingCartProvider;