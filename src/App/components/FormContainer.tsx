import React, { FunctionComponent, useState } from "react";
import { information } from "../../API/api";
import "../style/addItem.css";
import AddComment from "./AddComment";

type FormContainerProps = {
  beers: {
    name: string;
    description: string;
    year: number;
    producer: string;
    picture: string;
  };
  wines: {
    name: string;
    description: string;
    year: number;
    producer: string;
    picture: string;
  };
  setProducer: (val: string) => void;
  setName: (val: string) => void;
  setYear: (val: string) => void;
  setDescription: (val: string) => void;
  setValue: (val: string) => void;
  addItem: (params: any) => void;
  setClicked: (params: any) => void;
  clicked: number
};

const FormContainer: FunctionComponent<FormContainerProps> = ({
  wines,
  beers,
  setDescription,
  setName,
  setYear,
  setProducer,
  setValue,
  addItem,
  setClicked,
  clicked
}) => {

  //Function to sort list of wines
  const sortingWines = (value: any) => {
    if (value == "Name") {
      return (wines as unknown as any[]).sort((a: any, b: any) =>
        a.name.localeCompare(b.name)
      );
    } else if (value == "Year") {
      return (wines as unknown as any[]).sort(
        (a: any, b: any) => a.year - b.year
      );
    } else if (value == "Producer") {
      return (wines as unknown as any[]).sort((a: any, b: any) =>
        a.producer.localeCompare(b.producer)
      );
    } else {
      return wines as unknown as any[];
    }
  };
  //Function to sort list of beers
  const sortingBeers = (value: any) => {
    if (value == "Name") {
      return (beers as unknown as any[]).sort((a: any, b: any) =>
        a.name.localeCompare(b.name)
      );
    } else if (value == "Year") {
      return (beers as unknown as any[]).sort(
        (a: any, b: any) => a.year - b.year
      );
    } else if (value == "Producer") {
      return (beers as unknown as any[]).sort((a: any, b: any) =>
        a.producer.localeCompare(b.producer)
      );
    } else {
      return beers as unknown as any[];
    }
  };

  

  return (
    <>
      <div data-testid="form-test" className="form-container">
        <select onChange={(e) => sortingWines(e.target.value)}>
          <option disabled hidden selected>
            Order Wines By
          </option>
          {information.map((item: any, id: any) => (
            <option value={item} key={id}>
              {item}
            </option>
          ))}
        </select>

        <select onChange={(e) => sortingBeers(e.target.value)}>
          <option disabled hidden selected>
            Order Beers By
          </option>
          {information.map((item: any, id: any) => (
            <option value={item} key={id}>
              {item}
            </option>
          ))}
        </select>
        <h1>Add an item</h1>
        <select name="" id="" onChange={(e) => setValue(e.target.value)}>
          <option hidden disabled selected>
            Select a drink
          </option>
          <option value="w">Wine</option>
          <option value="b">Beer</option>
        </select>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Producer"
          onChange={(e) => setProducer(e.target.value)}
        />
        <button className="add-btn" onClick={addItem}>
          Add
        </button>
            <AddComment setClicked={setClicked} clicked={clicked} />
      </div>
    </>
  );
};

export default FormContainer;
