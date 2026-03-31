/**
 * @jest-environment jsdom
 */

const addition = require("../calc");

describe('Calculator', () => {
    describe('Addition function', () => {
        test('should return 42 for 20 + 22', () => {
            expect(addition(20, 22)).toBe(42);
            });
        test('should return 40 for 10 + 30', () => {
            expect(addition(10, 30)).toBe(40);
        });

    });






//     describe('Subtraction function', () => {

//     });

//     describe('Multiplication function', () => {

//     });

//     describe('Division function', () => {

//     });
});