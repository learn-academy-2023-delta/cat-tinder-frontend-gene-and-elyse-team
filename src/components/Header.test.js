import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe("<Header />", () => {
  it("has an image", () => {
    // arrange
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // screen.logTestingPlaygroundURL()
    // act
    const image = screen.getByRole('img', {
      name: /logo for cat tinder/i
    })
    expect(image).toBeInTheDocument()
  })
})