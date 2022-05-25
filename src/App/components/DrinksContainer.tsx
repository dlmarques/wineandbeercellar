import React, { FunctionComponent, useState } from "react";
import CellarItem from "./CellarItem";

type DrinksContainerProps = {
  setSearchWineTerm: (val: string) => void;
  bottles: {
    name: string;
    description: string;
    year: number;
    producer: string;
    picture: string;
  };
  searchWineTerm: string;
};

const DrinksContainer: FunctionComponent<DrinksContainerProps> = ({
  setSearchWineTerm,
  bottles,
  searchWineTerm,
}) => {
  const [isWinesActive, setIsWinesActive] = useState(false);
  
  //Function to open containers
  const openWineContainer = () => {
    setIsWinesActive((prevIsWinesActive) => !prevIsWinesActive);
  };

  return (
    <>
      <div className="container" data-testid="container-test">
        <header>
          <i className="bi bi-caret-down-fill" onClick={openWineContainer}></i>
          <div style={{ width: "auto" }}>
            <h1>
              List of Drinks
            </h1>
          </div>
          <input
            type="text"
            placeholder="Search Wine (by name, year, producer)"
            onChange={(e) => setSearchWineTerm(e.target.value)}
          />
        </header>

        { isWinesActive ?
          (bottles as unknown as any[])
          .filter((val) => {
            if(searchWineTerm == ""){
             return val;
            }else if(val.name.toLowerCase().includes(searchWineTerm.toLowerCase())){
              return val
            }
          })
          .map((drink: any, id: any) => (
            <CellarItem
              id={id}
              name={drink.name}
              description={drink.description}
              isActive={isWinesActive}
              image={drink.picture}
              year={drink.year}
              producer={drink.producer}
            />
          )): null}
      </div>
    </>
  );
};

export default DrinksContainer;
