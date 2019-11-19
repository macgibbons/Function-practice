// practice: age in dog years 
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears;
}

const dogAge = calculateAgeInDogYears(56);
console.log(dogAge);


// Practice: Best in Show 
const favoriteDogBreed = (dogBreed) => {
    if (dogBreed === 'meow') {
        return "I love Cats"
    } else {

        const sentenceBuilder = `My favorite dog breed is ${dogBreed}.`

        return sentenceBuilder;
    }
}

const myDog = favoriteDogBreed('blue Heeler');

const myAnswer = `When it comes to dogs, ${myDog}`;

console.log(myAnswer)

const iLoveCats = favoriteDogBreed('meow');

console.log(iLoveCats);



// Practice: Addition 

// Practice: Self-driving Cars 

const go = (direction, speed) => {
    if (speed >= 75) {
        const mySpeed = `The car is moving ${direction} at ${speed} mph. SLOW DOWN!`

        return mySpeed
    } else {
        const mySpeed = `The car is moving ${direction} at ${speed} mph.`

        return mySpeed;
    };


};

const firstSpeed = go('forwards', 76);
const secondSpeed = go('sidways', 4);

console.log(firstSpeed);
console.log(secondSpeed);

// Practice Even or Odd 

const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        const evenNum = `Even`
        return evenNum
    } else {
        const oddNum = `Odd`
        return oddNum;
    }
}

const evenOrOddTest = evenOrOdd(7);

console.log(evenOrOddTest);


// Practice Double Functions 

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

// this function iterates the array and filters out every word beginning with 'k' and returns a new array
const arrayBuilder = (array) => {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.startsWith("k")) {

        } else {
            newArray.push(element)
        }
    }
    console.log(newArray);
    return newArray;
}

// this function builds a string out of the new array 

const stringBuilder = (Array) => {
    const finalString = `${Array}`
    console.log(finalString);
}



const finalArray = arrayBuilder(words);
stringBuilder(finalArray);

// Practice: You Can Tune a Piano, But You Can't...
// Sven the Norwegian fisherman goes out at 5:32 AM every day to fish for tuna in the North Sea. Each time he casts his line, he has a 33% chance of catching a tuna.

// On a side note, did you know that you can ask JavaScript for a random number? You use the Math.random() method which, by default, returns a number between 0 and 1. If you mutiply the result by 2, you will get a number between 0 and 2. This would allow you to simulate a coin flip. You could check if the value was between 0 and 1 (heads), or between 1 and 2 (tails).

// Math.random() * 2  // Number between 0 and 2
// Write a function that simulates Sven's chances of catching a tuna. The function needs no input, and it simply returns true or false. If a random number falls in a certain range, return true. If it falls in any other range, return false.

// Invoke the function and then log one of the following messages to the console.

const svenFunction = () => {
const coinFlip = Math.random() * 3;
if (coinFlip <= 2 && coinFlip > 1 ) {
    return  `Sven hooked a tuna! :)`
    } else {
        return `Sven came up empty handed :(`
    }   
}

console.log(svenFunction(0))

// Sven hooked a tuna!  :)
// or

// Sven came up empty-handed.  :(

// Exploration Tasks
// Try multiplying the random() method by different values and see how it affects how often Sven catches a fish.
// Instead of hard-coding the number by which you multiple random(), see if you can pass that number in as an argument to the function.
// Is your function a pure function? Why or why not? If you're unsure, talk to your teammates or your instructors.
// What happens if you multiply random() by 0?

