import {setupCalculator,pressButtons, expectDisplayToBe} from './testUtils'


test("Multiple Operations in sequence", () => {
  setupCalculator() 
  pressButtons(['5','+','3','=',"x","2","="])
  expectDisplayToBe('16')
});