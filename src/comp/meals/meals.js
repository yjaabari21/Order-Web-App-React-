import { Fragment } from "react";
import Availmeal from "./AvilableMeals";
import MealsSummary from "./mealsSummery";


const Meals = props =>{
    return <Fragment>
        <MealsSummary/>
        <Availmeal/>
    </Fragment>
}


export default Meals;