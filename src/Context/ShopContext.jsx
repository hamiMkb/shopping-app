import React, { createContext } from "react";
import all_product from '../Assets/all_product'
import { useState } from "react";

export const  ShopContext = createContext(null)



const ShopContextProvider = (props) => {
    const getDefaultCart = () => {
        let cart ={}
        for (let index = 0; index < all_product.length+1 ; index++) {
            cart[index] = 0
            }
        return cart
    }

    const[cartitems,setCartItems] = useState(getDefaultCart())
    
    
    
  

    const getTotalCartAmount =() => {
        let totalAmount = 0
        
        for ( const item in cartitems ){
               if(cartitems[item] > 0)
                {
                    
                    let itemInfo = all_product.find(product => product.id === Number(item))
                    totalAmount += itemInfo.new_price*cartitems[item]
                   
                }
                
                
                                     }
        return (totalAmount)
                  
               
       }

    
    const getTotalItems =() => {
        let totalItem = 0

           
            for (const item in cartitems ){
                   if(cartitems[item] > 0)
                    {
                        totalItem += cartitems[item]
                    }
                   
                         }
        return totalItem                  
     }

     const addToCart = (props )=>{
        const itemId = props
        setCartItems((cartitems)=>({...cartitems , [itemId]: cartitems[itemId]+1}))
     }

    const removeFromCart = (props)=>{
        const itemId = props
        setCartItems((cartitems)=>({...cartitems,[itemId]: cartitems[itemId]-1}))
    }
    // const ContextValue = {addToCart,removeFromCart,cartitems,getTotalItems,all_product,getTotalCartAmount}
    return(
        
        <ShopContext.Provider value={{addToCart,removeFromCart,cartitems,getTotalItems,all_product,getTotalCartAmount}}>
            {props.children}
        </ShopContext.Provider>
    )
}



export default ShopContextProvider