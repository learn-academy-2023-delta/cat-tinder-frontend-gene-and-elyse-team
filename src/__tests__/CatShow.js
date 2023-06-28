import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import CatShow from '../pages/CatShow'
import mockCats from '../mockCats'

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/catshow/1"]}>
      <Routes>
        <Route path="/catshow/:id" element={<CatShow cats={mockCats} />}/>
      </Routes>
    </MemoryRouter>
  )
}

describe("<CatShow />", () => {
  it("renders what the cat enjoys", () => {
    // Arrange:
    renderShow()
    // const catEnjoys = screen.getByText("I enjoy Hiding under blankets")
    const catEnjoys = screen.getByText(`I enjoy ${mockCats[0].enjoys}`)
    expect(catEnjoys).toBeInTheDocument()
  })
})