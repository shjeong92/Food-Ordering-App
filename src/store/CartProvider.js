import React, { useReducer } from 'react'

export const CartContext = React.createContext();

const defaultCartState = {
    items : [],
    totalAmount: 0,
}

const cartReducer = (state, action)  => {
    if (action.type ==='ADD'){
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }

    } else if (action.type ==='REMOVE')
    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState, cartDispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler =  (item) => {
        cartDispatchCartAction({type:'ADD', item: item});
    };
    const removeItemToCartHandler =  (id) => {
        cartDispatchCartAction({type:'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
