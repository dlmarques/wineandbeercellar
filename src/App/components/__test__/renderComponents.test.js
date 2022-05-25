import React from 'react'
import {render, screen} from "@testing-library/react"
import DrinksContainer from "../DrinksContainer"
import CellarItem from '../CellarItem'
import FormContainer from '../FormContainer'

describe("renders items correctly", () => {
    test("renders container correctly", () => {
        render(<DrinksContainer />)
        const item = screen.getByTestId("container-test")
        expect(item).toBeInTheDocument();
    })

    test("renders cellar correctly", () => {
        render(<CellarItem/>)
        const item = screen.getByTestId("cellar-test")
        expect(item).toBeInTheDocument();
    })
    test("renders form correctly", () => {
        render(<FormContainer/>)
        const item = screen.getByTestId("form-test")
        expect(item).toBeInTheDocument();
    })

})