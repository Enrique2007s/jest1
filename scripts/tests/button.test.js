const buttonClick = require("../button");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe('DOM tests', () => {
    test('expects p content to change on button click', () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toBe("You Clicked");
    });
    test('h1 should exist', () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});