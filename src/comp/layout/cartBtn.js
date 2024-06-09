import { useContext} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../../context/cart-context';
import classes from './cartBtn.module.css';


const CartBtn = (props) => {
  //const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const itemNum = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  /*useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  */
/*import React , {useContext} from "react";

const CartBtn = props => {
    const cartCtx = useContext(Cxt);
    const { items } = cartCtx;
    const itemNum = items.reduce((curNum , item) => {
        return curNum + item.total;
    }, 0);*/
    return(
    <button className={classes.button} onClick={props.onClick}>
        <FaShoppingCart className={classes.icon}/>
        <span>My Cart</span>
        <span className={classes.badge}>{itemNum}</span>
    </button>
    )
}

export default CartBtn;