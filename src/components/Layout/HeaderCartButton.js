import React, {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css'
import {CartContext} from '../../store/CartProvider'
const HeaderCartButton = (props) => {
  const [btnBump, setBtnBump] = useState(false);
  
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  
  const numberOfCardItems = items.reduce((curNumber, item) => {
    return curNumber +item.amount
  }, 0);

  const btnStyles = `${styles.button} ${btnBump ? styles.bump : ''}`;

  useEffect(() => {
    if(items.length===0){
      return;
    }
    setBtnBump(true);
    console.log("on");

    const timer = setTimeout(()=>{setBtnBump(false)},300);
    return () => {
      console.log("off");
      clearTimeout(timer);
    }

  }, [items])
  return (
    <button onClick={props.handleCart} className={btnStyles}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCardItems}</span>
    </button>
  );
};

export default HeaderCartButton;
