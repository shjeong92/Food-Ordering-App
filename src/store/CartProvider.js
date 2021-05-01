import React, { useReducer } from 'react'

export const CartContext = React.createContext();

const defaultCartState = {
    items : [],
    totalAmount: 0,
}

const cartReducer = (state, action)  => {
    if (action.type ==='ADD'){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems;
        if (existingCartItem) {
            let updatedItem;
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
        
    } else if (action.type ==='REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id ===action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAMount = state.totalAmount- existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => (item.id !== action.id));
        } else {
            const updatedItem = { ...existingItem, amount : existingItem.amount -1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAMount
        }
    }

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
