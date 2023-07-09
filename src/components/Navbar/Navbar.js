import { Badge, Icon } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import {BsFillBagHeartFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {
  const {cart,wishList}=useContext(StoreContext)
  
  const styles = {
    navbar:"navbar h-[60px] shadow-md w-full z-10 text-[#8a4af3] fixed bg-white",
    navbarInner:"wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center",
    button: "text-[14px] cursor-pointer ml-[25px]",
    right: "right flex flex-1 items-center justify-end text-[#8a4af3]",
    logo: "center flex text-center justify-center",
    logoContent: "logo font-bold text-[25px] text-lg text-[#8a4af3]",
    left: "left flex flex-1 items-center",
    leftEn: "language cursor-pointer text-[16px]",
    leftSearch: "searchInput flex border-[1px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all",
  };

  return (
    <div className="mb-[63px]">
    <div className={styles.navbar}>
      <div className={styles.navbarInner}>
        {/* left div */}
        <div className={styles.left}>
          <div className={styles.leftEn}>En</div>
          <div className={styles.leftSearch}>
            <input className="input outline-none" type="text" />
            <Search />
          </div>
        </div>
        {/* Logo */}
        <div className={styles.logo}>
        <img src='pics/icon.png' className="h-7 pl-3"/>
          <div className={styles.logoContent}><Link to='/'>Summer Kings </Link></div>
        </div>
        {/* Right */}
        <div className={styles.right}>
        <div className={styles.button}><Link to={'/catagory'}>Products</Link></div>
          <div className={styles.button}><Link to={'/register'}>Register</Link></div>
          <div className={styles.button}><Link to={'/login'}>Signin</Link></div>

          <div className={styles.button}>
            <Link to={'/wishlist'}>
            <Badge badgeContent={wishList.length} color="primary">
              <BsFillBagHeartFill style={{width:'25px',height:'21px'}}/>
            </Badge>
            </Link>
          </div>
          <div className={styles.button}>
            <Link to='/cart'>
            <Badge badgeContent={cart.length} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
          </div>
          <div className={styles.button}>
            <Link to='/admindashboard'>
              Admin
            </Link>
          </div>
          <div className={styles.button}>
            <Link to='/seller'>
              Seller
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
