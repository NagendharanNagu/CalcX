import {test, expect} from 'vitest'

// here first argument must be a string(Scenario), and second argument must be a arrow function

function sum(...nums){
    return nums.reduce((a,b)=>a+b,0)
}
test("1+1", ()=>{
    expect(sum(1,1)).toEqual(2)
})

test('1+2+3',()=>{
    expect(sum(1,2,3)).toEqual(6)
})

test('adding 10 numbers',()=>{
    expect(sum(1,2,3,4,5,6,7,8,9,10)).toEqual(55)
})

test('adding 1 number',()=>{
    expect(sum(100)).toEqual(100)
})

test('adding 0 number',()=>{
    expect(sum()).toEqual(0)
})


