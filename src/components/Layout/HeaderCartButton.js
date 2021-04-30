import React, {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css'
import {CartContext} from '../../store/CartProvider'
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCardItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber +item.amount
  }, 0);

  return (
    <button onClick={props.handleCart} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCardItems}</span>
    </button>
  );
};

export default HeaderCartButton;
