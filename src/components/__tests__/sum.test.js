import { sum } from "../sum";

test("sum function should calculate the sum of towo number",  ()=> {
    const result  = sum(3,4);

    expect(result).toBe(7);
});