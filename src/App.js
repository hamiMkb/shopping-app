import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Shop from './Pages/Shop.jsx'
import Login from './Pages/Login.jsx'
import ShopCategory   from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Footer from "./components/Footer/Footer.jsx";
import banner_mens from './Assets/banner_mens.png'
import banner_women from './Assets/banner_women.png'
import banner_kids from './Assets/banner_kids.png'





function App() {
  
  return (
    <div>
      
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mens" element={<ShopCategory banner={banner_mens} category={"men"} />} />
          <Route path="/womens" element={<ShopCategory banner={banner_women} category={"women"} />} />
          <Route path="/kids" element={<ShopCategory banner={banner_kids} category={"kid"} />} />
          <Route path="/product" element={<Product />} >
              <Route path=":productId" element={<Product />}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
        
       
        
    </div>
  
    
  );
}

export default App;
