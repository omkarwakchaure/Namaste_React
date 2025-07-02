import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";


test("Should load contact us component", () => {
  render(<Contact/>);

  const heading = screen.getByText("Contact Us");
  expect(heading).toBeInTheDocument();
});

