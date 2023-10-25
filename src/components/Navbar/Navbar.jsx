import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo2.png'
import Cart_icon from '../../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = ({login}) => {
  const [menu, setmenu] = useState("shop")
  const {getTotalItems} = useContext(ShopContext)
  

  return (
    <div className='navbar'>
    <div className="nav-logo">
        <img src={logo} alt="our-logo" />
        <p style={{color:'rgb(240, 212, 57)'}}>M<span style={{color:'grey'}}>K</span>B</p>
    </div>
    
    <ul className="nav-menu">
      <li onClick={()=>setmenu("shop")}><Link style={{ textDecoration: 'none' ,color:'black'}} to='/'>Shop</Link>  {menu ==="shop" ? <hr /> :<></>}</li>
      <li onClick={()=>setmenu("women")}> <Link style={{ textDecoration:'none', color:'black'}} to='/womens'>Women</Link>{menu === "women"? <hr />:<></>}</li>
      <li onClick={()=>setmenu("men")}> <Link style={{textDecoration:'none', color:'black'}} to='/mens'>Men</Link>{menu ==="men" ?  <hr />:<></>}</li>
      <li onClick={()=>setmenu("kids")}> <Link style={{textDecoration:'none', color:'black'}} to='/kids'>Kids</Link>{menu === "kids"?<hr /> :<></>}</li>
    </ul>
     
    <div className="nav-login-cart">
       <Link to='/login'><button >Login</button>  </Link>   
       <Link to='/cart'><img src={Cart_icon} alt="" /></Link>   
     
       <div className="nav-cart-count"><span>{getTotalItems()}</span></div>
       
    </div>

</div>
  )

    

  
}

export default Navbar