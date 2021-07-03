import React, { useEffect, useState } from 'react';
import meals from './meals.json';
const TestingDb = () => {
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
        console.log(err.message);
      });
  }, []);
  //   const showDataHandler = () => {
  //     meals.map((meal) => <li>{meal.name}</li>);
  //   };
  return (
    <div>
      <h1>fetching firebase data</h1>
      <button>Fetch</button>
      <button>SHOW DATA</button>
    </div>
  );
};

export default TestingDb;
