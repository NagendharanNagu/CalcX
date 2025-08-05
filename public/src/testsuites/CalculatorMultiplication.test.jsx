import {setupCalculator,pressButtons, expectDisplayToBe} from './testUtils'


test("Multiplying two single-digit numbers correctly", () => {
  setupCalculator() 
  pressButtons(['5','x','3','='])
  expectDisplayToBe('15')
});
