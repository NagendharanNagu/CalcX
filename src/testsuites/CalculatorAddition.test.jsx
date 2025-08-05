import {setupCalculator,pressButtons, expectDisplayToBe} from './testUtils'


test("Adding two single-digit numbers correctly", () => {
  setupCalculator() 
  pressButtons(['5','+','3','='])
  expectDisplayToBe('8')
});
