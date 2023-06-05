/*
    CIT 281 Project 1
    Name: Daniel Woods
*/

function getRandomString() {
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let string = '';
    for (let i = 0; i < getRandomInteger(5, 25); i++) {
        const randomString = Math.floor(Math.random() * alph.length);
        string += alph.charAt(randomString);
    }
    console.log(string);
}

getRandomString();

function getRandomStrings(min, max) {
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    const randomInt = Math.floor(Math.random() * (max - min) + min);

    let string = '';
    for (let i = 0; i < randomInt; i++) {
        const randomString = Math.floor(Math.random() * alph.length);
        string += alph.charAt(randomString);
    }
    console.log(string);
}

getRandomStrings(5, 25);

/*Here are two different solutions. One uses the provided function for selecting a random string, and the other uses
a const instead. I came up with the const solution first and then tried to implement the given function as the 
rebric suggested*/





let bro = 5

function getRandomStrings(min, max) {
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    const randomInt = Math.floor(Math.random() * (max - min) + min);

    let hello = '';
    for (let i = 0; i < randomInt; i++) {
        const randomString = Math.floor(Math.random() * alph.length);
        hello += alph.charAt(randomString);
    }
    console.log(hello);
}
