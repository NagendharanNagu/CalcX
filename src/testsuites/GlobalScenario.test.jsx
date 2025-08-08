import {setupCalculator,pressButtons, expectDisplayToBe,expectButtonToBePresent} from './testUtils'
import { describe, it } from "vitest"

// Positive Scenario
test("Verifying the initial value of the calculator", () => {
  setupCalculator() 
  expectDisplayToBe('0')
});

//Checking the number, operators, Equal and AC buttons availablity in app
describe("Calculator UI", () => {
  it("should have 1 to 9 number buttons available", () => {
    setupCalculator();

    // Loop from 1 to 9 and check each number button
    for (let i = 1; i <= 9; i++) {
      expectButtonToBePresent(i.toString());
    }
  });
  it("should have operators like +, -, x, / buttons available", () => {
    setupCalculator();

    const operators = ["+", "-", "x", "/","."];
    operators.forEach((op) => {
      expectButtonToBePresent(op);
    });
  });

  it("should have = & AC buttons available", () => {
    setupCalculator();

    const Equal_Clear = ["=", "AC"];
    Equal_Clear.forEach((btn) => {
      expectButtonToBePresent(btn);
    });
  });

  it("should have ( and ) buttons available", () => {
    setupCalculator();

    expectButtonToBePresent("(");
    expectButtonToBePresent(")");
  });
});


describe("Calculator Display and Sequential Operations", () => {
  it("should display 2+3 and show 5 after pressing =", () => {
    setupCalculator()
    pressButtons(['2','+','3'])  
    expectDisplayToBe("2+3");
    pressButtons(["="])
    expectDisplayToBe('5')
  })
  it("should perform sequential operation 5+2+5 and show 12 after =", () => {
    setupCalculator()
    pressButtons(['2','+','3', '='])
    expectDisplayToBe('5')

    //+2+5=
    pressButtons(['+','2','+',"5"])
    expectDisplayToBe("5+2+5");
    pressButtons(['='])
    expectDisplayToBe('12')
  })
});


test("Multiple Operations in sequence", () => {
  setupCalculator() 
  pressButtons(['5','+','3','=',"x","2","="])
  expectDisplayToBe('16')
});

test("Ensuring the AC button press clears the display", () => {
  setupCalculator() 
  pressButtons(['AC'])
  expectDisplayToBe('0')
});



// Negative Scenarios
test("Only . is pressed", () => {
  setupCalculator() 
  pressButtons(['.'])
  expectDisplayToBe('0.')
});

test("Operator without operands", () => {
  setupCalculator() 
  pressButtons(['+',"5","="])
  expectDisplayToBe('5')
});


test("Handling consecutive operators, i.e ignoring operator at second occurance",()=>{
  setupCalculator() 
  pressButtons(["5","+",'+',"5","="])
  expectDisplayToBe('8' || "Invalid Expression")
})

test("Handling multiple decimals in a number",()=>{
  setupCalculator() 
  pressButtons(["5",".",'.',"5","="])
  expectDisplayToBe('5.5' || "Invalid Expression")
})