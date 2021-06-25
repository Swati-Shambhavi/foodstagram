import Meal from './Meal';
import style from '../scss/AvailableMeals.module.scss';
import meal1 from '../images/meal1.jpg';
import meal2 from '../images/meal2.jfif';
import meal3 from '../images/meal3.jpg';
import meal4 from '../images/meal4.jpg';
import meal5 from '../images/meal5.jfif';
import meal6 from '../images/meal6.jfif';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    pic: meal1,
    price: 499.99,
  },
  {
    id: 'm2',
    name: 'Biryani',
    description: 'A mughal specialty!',
    pic: meal2,
    price: 550.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    pic: meal3,
    price: 250,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    pic: meal4,
    price: 300,
  },
  {
    id: 'm5',
    name: 'Pizza',
    description: 'Pizza time',
    pic: meal5,
    price: 369,
  },
  {
    id: 'm6',
    name: 'Golgappe',
    description: 'Spicy and crunchy',
    pic: meal6,
    price: 250,
  },
];

const AvailableMeals = () => {
  return (
    <section>
      <ul className={style.meals}>
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id}>
            <Meal
              name={meal.name}
              pic={meal.pic}
              des={meal.description}
              price={meal.price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
