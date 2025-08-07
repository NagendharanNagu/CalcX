import {setupCalculator,pressButtons, expectDisplayToBe} from './testUtils'

// Positive Scenario
test("Verifying the initial value of the calculator", () => {
  setupCalculator() 
  expectDisplayToBe('0')
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