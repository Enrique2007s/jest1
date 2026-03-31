const buttonClick = require("../button");

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
});

describe('DOM tests', () => {
    TestScheduler('expects p content to change on button click', () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toBe("You Clicked");
    });
});