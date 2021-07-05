import Meal from './Meal';
import { useState, useEffect } from 'react';
import style from '../scss/AvailableMeals.module.scss';
import meal1 from '../images/meal1.jpg';
import meal2 from '../images/meal2.jfif';
import meal3 from '../images/meal3.jpg';
import meal4 from '../images/meal4.jpg';
import meal5 from '../images/meal5.jfif';
import meal6 from '../images/meal6.jfif';

//have not uploaded the photos on firebase, just a trick to include images in webpage
const pics = [meal1, meal2, meal3, meal4, meal5, meal6];

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [meals, setMeals] = useState([]);
  const transformData = (data) => {
    const loadedMeals = [];
    for (let key in data) {
      loadedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setMeals(loadedMeals);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchdata = fetch(
      'https://practice-ca38b-default-rtdb.firebaseio.com/meals.json'
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        transformData(data);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error !== '') {
    return <h1>Oops! An error has occured :/</h1>;
  }
  return (
    <section>
      <ul className={style.meals}>
        {meals.map((meal, index) => (
          <li key={meal.id}>
            <Meal
              id={meal.id}
              name={meal.name}
              pic={pics[index]}
              des={meal.description}
              price={meal.price}
              amt={meal.amt}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
