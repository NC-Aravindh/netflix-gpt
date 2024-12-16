import {sum} from '../sum';
import '@testing-library/jest-dom'

test("addition of 2 numbers", ()=>{
    //Assertion
    expect(sum(5,4)).toBe(9)
});