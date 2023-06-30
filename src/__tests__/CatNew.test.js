import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CatNew from '../pages/CatNew'

const setUp = () => {
  render(
    <BrowserRouter>
      <CatNew />
    </BrowserRouter>
  )
}

describe("<CatNew/>", () => {

  it("renders the CatNew page for users", () => {
    setUp()
    const heading = screen.getByRole('heading', {
      name: /create a cat!/i
    })
    expect(heading).toBeInTheDocument()
  })

  it("displays a label for each form input", ()=> {
    setUp()
    const nameLabel = screen.getByText(/cat name/i)
    expect(nameLabel).toBeInTheDocument()
  })
})