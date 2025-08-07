import {setupCalculator,pressButtons, expectDisplayToBe} from './testUtils'


test("Adding two single-digit numbers correctly", () => {
  setupCalculator() 
  pressButtons(['5','+','3','='])
  expectDisplayToBe('8')
});

test("Adding multiple digit numbers correctly",()=>{
  setupCalculator() 
  pressButtons(['51','+','30','='])
  expectDisplayToBe('81')
});

test("Adding large digit numbers correctly",()=>{
  setupCalculator() 
  pressButtons(['51000','+','3000','='])
  expectDisplayToBe('54000')
});

test("Adding decimal inputs correctly",()=>{
  setupCalculator() 
  pressButtons(['5.1','+','3.2','='])
  expectDisplayToBe('8.3')
});

test("Adding number starts with 0",()=>{
  setupCalculator() 
  pressButtons(['0','+','4','='])
  expectDisplayToBe('4')
});
