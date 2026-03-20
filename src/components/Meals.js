import { useEffect, useState } from "react";
import axios from "axios";

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
      <h2>Create list of meals</h2>
      {}
    </ul>
  );
};

export default Meals;
