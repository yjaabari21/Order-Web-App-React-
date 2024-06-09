import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;


















/*import { useReducer } from "react"
import Cxt from "./cart-context"

const defaultCartState = {
    items : [],
    total : 0
}
const cartReduce = (state , action) => {
    
    if(action.type === 'ADD'){    
        const existing = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existing];

        let updatedItems;
        if(existingCartItem){
            let updatedItem;
            updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItem] = updatedItem;
        }
        else{
            updatedItems = state.items.concat(action.item);
        }

        const updateTotal = state.total + action.items.price;
        return{
            items: updatedItems,
            total: updateTotal
        }
    }
    return defaultCartState;
}

const CartProv = props =>{
    const [carState , dispatchCart] = useReducer(cartReduce , defaultCartState);
    const addTocart = item => {
        dispatchCart({type:'ADD' , items:item});
    }

    const removeFromcart = id => {
        dispatchCart({type:'remove', id:id});
    }

    const contxt = {
        items:carState.items,
        total:carState.total,
        add: addTocart,
        remove: removeFromcart
    }

    return <Cxt.Provider value={contxt}>
        {props.children}
    </Cxt.Provider>
}

export default CartProv;*/