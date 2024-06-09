import React , {useState} from 'react';
import './App.css';
import Cart from './comp/cart/cart';
import Header from './comp/layout/header';
import Meals from './comp/meals/meals';
import CartProv from './context/cartProvider';



function App() {
  
  const [isShown , setShown] = useState(false);

  const showHandler = () =>{
    setShown(true);
  }

  const closeHandler =() =>{
    setShown(false);
  }

  return (
    <CartProv>
      {isShown && <Cart onClose={closeHandler}/>}
      <Header onShow={showHandler}/>
      <main>
       <Meals/>
      </main>
    </CartProv>
  );
}

export default App;
