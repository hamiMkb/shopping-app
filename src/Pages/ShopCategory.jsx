import React from 'react'
import './CSS/ShopCategort.css'
import { ShopContext } from '../Context/ShopContext'
import { useContext } from 'react'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../components/Item/Item'
import Navbar from '../components/Navbar/Navbar'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <>
    <Navbar />
    <div className='Shop-Category'>
      <img className='shopcategory-banner' src={props.banner} alt="banner" />
      <div className="shopcategory-indexsort">
        <p>
          <span>showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
          { all_product.map ((item,i) => {
            if (props.category === item.category) {
               return <Item key={i} {...item} />
            }
            else { return null }
           
          })}
      </div>
      <div className="shopcategory-loadmore">
        Load more
      </div>

    </div>

   </>

  )
}

export default ShopCategory