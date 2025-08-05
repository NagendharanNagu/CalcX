import {setupCalculator,pressButtons, expectDisplayToBe} from './testUtils'


test("Subtracting two single-digit numbers correctly", () => {
  setupCalculator() 
  pressButtons(['5','-','3','='])
  expectDisplayToBe('2')
});
