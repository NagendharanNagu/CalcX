import {setupCalculator,pressButtons, expectDisplayToBe} from './testUtils'


test("Dividing two single-digit numbers correctly", () => {
  setupCalculator() 
  pressButtons(['8','/','4','='])
  expectDisplayToBe('2')
});


