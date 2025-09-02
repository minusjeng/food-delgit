import React, { useState, useEffect } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const FoodDisplay = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await fetch(`${API}/api/food`);
        const data = await res.json();
        setFoods(data);
      } catch (err) {
        setFoods([]);
      }
    };
    fetchFoods();
  }, []);

  return (
    <div className="food-display">
      <h2 className="food-display-title">Top dishes near you</h2>
      <div className="food-display-list">
        {foods.map((food, idx) => (
          <FoodItem
            key={food._id || idx}
            id={food._id}
            image={food.image}
            name={food.name}
            price={food.price}
            desc={food.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;