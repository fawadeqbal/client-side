import Announce from "./components/Annoucement/Announce";
import Navbar from "./components/Navbar/Navbar";
import CatagoryPage from "./pages/CatagoryPage";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import WishlistPage from "./pages/WishListPage";
import Collections from "./pages/Collections";
import ContactUsPage from './pages/ContactUsPage'
import FAQsPage from './pages/FAQsPage'
import OurTeam from "./pages/OurTeam";
import AboutUs from './pages/AboutUs'
import StoreLocator from "./pages/StoreLocator";


function App() {
  

  const title = "Summer Kings";
  const description = "Explore a vast collection of clothing, accessories, and footwear to express your unique style. ";

  return (
    <>
      <Announce />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catagory'element={<CatagoryPage />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/wishlist' element={<WishlistPage />}/>
        <Route path='/collection/:id' element={<Collections/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>
        <Route path='/faqs' element={<FAQsPage/>}/>
        <Route path='/team' element={<OurTeam/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/location' element={<StoreLocator/>}/>
      </Routes>

      <Footer title={title} description={description} />
    </>
  );
}

export default App;