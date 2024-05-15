import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CircularButton } from "./CircularButton";

describe("<CircularButton />", () => {
  it("rendering component at screen", () => {
    render(<CircularButton srcImage="/log-out.svg" altImage="Logout image" />);

    screen.getByTestId("circular_button");
  });

  it("click function works", async () => {
    const handleClick = jest.fn()
    render(<CircularButton srcImage="/log-out.svg" altImage="Logout image" onClick={handleClick} />);
    const currentButton = screen.getByTestId('circular_button')

    await userEvent.click(currentButton)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("rendering correctly image", async () => {
    const altText = "Logout image"
    render(<CircularButton srcImage="/log-out.svg" altImage={altText} />);
    
    screen.getByAltText(altText)
    screen.getByRole('img')
  })

  it('click function not work if button is disabled', async () => {
    const handleClick = jest.fn()
    render(<CircularButton srcImage="/log-out.svg" altImage="Logout image" onClick={handleClick} disabled />);
    const currentButton = screen.getByTestId('circular_button')

    await userEvent.click(currentButton)
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
});
