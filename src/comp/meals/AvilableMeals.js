import classes from './avil.module.css';
import Card from '../ui/card';
import MealsItem from '../mealsItem/mealtem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;




































/*
const some_meals = [
    {
        id: 'one',
        name: 'sushi',
        desc: 'cooked rice with fresh raw seafood',
        price: '$18.55'
    },
    {
        id: 'two',
        name: 'tacos',
        desc: 'a corn tortilla with meat, onions, and cilantro, tomatoes, or lettuce',
        price: '$20.99'
    },
    {
        id: 'three',
        name: 'burger',
        desc: 'a flat round mass of minced meat or vegetables, which is fried eaten in a bread.',
        price: '$14.65'
    },
    {
        id: 'four',
        name: 'pizza',
        desc: 'of a flattened disk of bread dough, tomatoes, and mozzarella cheese',
        price: '$21.30'
    }
];



const Availmeal = props => {
    return <div className={classes.meals}>
    <Card>
        <ul className={classes.ul}>{some_meals.map(meal => 
        <MealsItem 
        key={meal.id} 
        name={meal.name} 
        desc={meal.desc} 
        price={meal.price}/>
        )}
        </ul>
    </Card>
    </div>
}

export default Availmeal;*/