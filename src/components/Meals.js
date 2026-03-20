import { useEffect, useState } from "react";
import axios from "axios";
import MealItem from "./MealItem";

const Meals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/meals")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul id="meals">
      {data.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
};

export default Meals;
