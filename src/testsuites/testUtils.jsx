import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "../components/Calculator";

export const setupCalculator = ()=>{
    render(<Calculator/>)
};

export const pressButtons = (sequence)=>{
    sequence.forEach((label)=>{
        fireEvent.click(screen.getByText(label))
    })
};

export const expectDisplayToBe = (value)=>{
    expect(screen.getByLabelText('calculator-display')).toHaveValue(value);
};

export const expectButtonToBePresent = (label) => {
  const button = screen.getByText(label);
  expect(button).toBeInTheDocument();
};
