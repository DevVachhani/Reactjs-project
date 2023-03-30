import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setmeals] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [httperror, sethttperror] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-demo-7523d-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const responsedata = await response.json();
      const loadMeals = [];

      for (const key in responsedata) {
        loadMeals.push({
          id: key,
          name: responsedata[key].name,
          description: responsedata[key].description,
          price: responsedata[key].price,
        });
      }
      setmeals(loadMeals);
      setisloading(false);
      // console.log(loadMeals);
    };

    fetchMeals().catch((error) => {
      setisloading(false);
      sethttperror(error.message);
    });
  }, []);

  if (isloading) {
    return (
      <section className={classes.MealisLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httperror) {
    return (
      <section className={classes.Mealserror}>
        <p>{httperror}</p>
      </section>
    );
  }

  const mealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
