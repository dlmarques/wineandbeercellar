import React, { FunctionComponent } from 'react'
import "../style/item.css"


type CellarItemProps ={
    id: number,
    name: string,
    description: string,
    isActive: boolean,
    image: string,
    year: string,
    producer: string
}

const CellarItem : FunctionComponent<CellarItemProps> = ({id, name, description, isActive, image, year, producer}) => {

  return (
    <>
    <div data-testid="cellar-test" className={isActive ? "item active" : "item"} key={id}>
        <div className="image">
        <img src={image} alt="" />
        </div>
        <div className="text">
            <h2>{name}</h2>
            <details>
                <summary>{description}</summary>
                <p>Year: {year}</p>
                <p>Producer: {producer}</p>
            </details>
    
        </div>
    </div>
    </>
  )
}

export default CellarItem