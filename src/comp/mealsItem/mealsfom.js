import Input from '../ui/input';
import { useRef} from 'react';
import classes from './mealsform.module.css';

const Mealsform = props =>{
   const totalInput = useRef();

   function submitHandler(event) {
      event.preventDefault();
      const enteredTotal = totalInput.current.value;
      const ET = +enteredTotal;
      props.onAddToCart(ET);
   }

    return(
    <form className={classes.form} onSubmit={submitHandler}>
        <Input
        ref={totalInput}
         label='Amount'

         input={{
            id: 'amount_' + props.id,
            type: 'number',         
            defaultValue : '1'
         }}
        />
     <button>+ Add</button>
    </form>
    );
}

export default Mealsform;