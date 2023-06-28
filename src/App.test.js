import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("<App />", () => {
  it("has a footer", () => {
    // Arrange: what is needed to set up the testing environment
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // Act: getting method needed to pull information
    // screen.debug()
    // screen.logTestingPlaygroundURL()
    const greeting = screen.getByText(/© 2023 learn \| elyse and gene/i)
    // Assert: 
    expect(greeting).toBeInTheDocument()
  })
  it("has a heading", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // screen.logTestingPlaygroundURL()
    const heading = screen.getByRole('heading', {
      name: /welcome/i
    })
    expect(heading).toBeInTheDocument()
  })
})


// Popular Testing Library Methods:
  // getByText(): finds an element by it's test value
  // getByRole(): finds an element by it's attributes