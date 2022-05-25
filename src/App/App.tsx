import React, { useState } from "react";
import "./style/app.css";
import "./style/addItem.css";
import { winesObject, beersObject } from "../API/api";
import DrinksContainer from "./components/DrinksContainer";
import FormContainer from "./components/FormContainer";
import CommentsContainer from "./components/CommentsContainer";

localStorage.setItem("WinesList", JSON.stringify(winesObject));
localStorage.setItem("BeersList", JSON.stringify(beersObject));

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [producer, setProducer] = useState("");
  const [value, setValue] = useState("");
  const [clicked, setClicked] = useState(0);
  //Get the object in the local storage and hold in beers variable
  const [wines, setWines] = useState(
    JSON.parse(localStorage.getItem("WinesList") || "{}")
  );
  //Get the object in the local storage and hold in beers variable
  const [beers, setBeers] = useState(
    JSON.parse(localStorage.getItem("BeersList") || "{}")
  );
  const [searchTerm, setSearchTerm] = useState("");

  //Function to add an item to Local Storage
  const addItem = () => {
    if (name && value === "w") {
      const newDrink = {
        name: name,
        description: "wine",
        year: year,
        producer: producer,
        picture:
          "https://pics.clipartpng.com/midle/Wine_Bottle_PNG_Clipart-98.png",
      };
      setWines([...wines, newDrink]);
      localStorage.setItem(
        "WinesList",
        JSON.stringify([...Array(wines), newDrink])
      );
    } else if (name && value === "b") {
      const newDrink = {
        name: name,
        description: "beer",
        year: year,
        producer: producer,
        picture:
          "https://pics.clipartpng.com/midle/Beer_Bottle_Green_PNG_Clipart-624.png",
      };
      setBeers([...beers, newDrink]);
      localStorage.setItem(
        "BeersList",
        JSON.stringify([...Array(beers), newDrink])
      );
    }
  };

  return (
    <>
      <header>
        <h1 style={{ color: "" }}>Wine and Beer Cellar</h1>
      </header>
      <div className="App">
        <div className="list">
          <DrinksContainer
            setSearchWineTerm={setSearchTerm}
            bottles={wines}
            searchWineTerm={searchTerm}
          />
          <DrinksContainer
            setSearchWineTerm={setSearchTerm}
            bottles={beers}
            searchWineTerm={searchTerm}
          />
          <CommentsContainer clicked={clicked}/>
        </div>
        <FormContainer
          beers={beers}
          wines={wines}
          setValue={setValue}
          setName={setName}
          setDescription={setDescription}
          setYear={setYear}
          setProducer={setProducer}
          addItem={addItem}
          setClicked={setClicked}
          clicked={clicked}
        />
      </div>
    </>
  );
}

export default App;
