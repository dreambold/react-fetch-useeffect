import { useState, useEffect } from "react";
import Card from "./Card";
const Home = () => {
  const [animals, setAnimals] = useState([]);

  const handleDelete = (id) => {
    const newAnimals = animals.filter((animal) => animal.id !== id);
    setAnimals(newAnimals);
  };

  useEffect(() => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/6")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAnimals(data);
      });
  }, []);

  const handleAddAnimal = () => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // animals.push(data);
        // console.log(animals);
        // //what to do after this
        setAnimals([...animals, data]);
      });
  };

  return (
    <div className="home">
      <h2>Animals</h2>
      <button onClick={handleAddAnimal}>Add Animal</button>
      <Card animals={animals} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
