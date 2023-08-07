import { render } from "@testing-library/react"
import Home from "../pages/Home"
import '@testing-library/jest-dom'



test('render the home page', () => {
    render(<Home/>)
    expect(true).toBeTruthy()
})