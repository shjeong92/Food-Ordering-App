import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  

  if (props.viewCart) {
    return (
      <Modal>
        {cartItems}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={styles.actions}>
          <button onClick={props.handleCart} className={styles["button--alt"]}>Close</button>
          <button className={styles.button}>Order</button>
        </div>
      </Modal>
    );
  } else {
    return <></>;
  }
};

export default Cart;
