import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../Assets/cart_cross_icon.png'

const CartItems = () => {
  const {cartitems,getTotalCartAmount,all_product,removeFromCart} = useContext(ShopContext) 
  return (
    <div className='cartitems'>
        <div className="ci-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        { all_product.map((e) =>{
            if(cartitems[e.id]>0){
                return ( <div>
                            <div className="ci-format ci-format-main">
                                <img src={e.image} alt="" className='ci-product-icon' />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <button className='ci-quantity'>{cartitems[e.id]}</button>
                                <p>{e.new_price*cartitems[e.id]}</p>
                                <img src={remove_icon} onClick={() =>{removeFromCart(e.id)}} alt="" className='ci-remove-icon' />
                            </div>
                         </div>)
            }
            return null
        })}
        <div className="ci-down">
            <div className="ci-total">
                <h1 style={{background:'rgb(243, 168, 56) ',textAlign:'center'}}>Cart Total</h1>
                <div >
                    <div className="ci-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="ci-total-item">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="ci-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <hr />
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                         <button>Checkout</button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems