import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import './ProductDisplay.css'

const ProductDisplay = ({product}) => {
    // const  {product}  = props;
    const { addToCart } = useContext(ShopContext)
    
  return (
    <div className='productdisplay'>
      <div className="pdisplay-left">
          <div className="pdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="pdisplay-img">
            <img className='pdisplay-main-img' src={product.image} alt="" />
          </div>
      </div>
      <div className="pdisplay-right">
          <h1>{product.name}</h1> 
          <div className="pdisplay-right-prices">
              <div className="pdisplay-right-price-old">
                ${product.old_price}
              </div>
              <div className="pdisplay-right-price-new">
                ${product.new_price}
                ${}
              </div>
          </div>
          <div className="pdisplay-right-des">

          </div>
          <div className="pdisplay-right-size"><h1>Select Size</h1></div>
          <div className="pdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>2XL</div> 
          </div> 
          <button onClick={() => {addToCart(product.id)}}>Add To Cart</button>

      </div>

        

    </div>
  )
}

export default ProductDisplay