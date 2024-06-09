import { useContext } from 'react';
import classes from './mealsItem.module.css';
import Mealsform from './mealsfom';
import Cxt from '../../context/cart-context';

const MealsItem = props => {

    const price = `$${props.price.toFixed(2)}`;

    const Ccx = useContext(Cxt);
    
    const AddTocart = amount =>{
       Ccx.addItem({
        id : props.id,
        name : props.name,
        amount : amount,
        price : props.price
       });
       console.log(Ccx.addItem.id);
    }

    return(
     <li className={classes.meals}>
        <div>
            <h3 className={classes.names}>{props.name}</h3>
            <div className={classes.desc}>{props.desc}</div>
            <div className={classes.pri}>{price}</div>
        </div>
        <div>
            <Mealsform id={props.id} onAddToCart={AddTocart}/>
        </div>
    </li>
);
}

export default MealsItem;