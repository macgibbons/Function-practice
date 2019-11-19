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

arrayBuilder(words);
stringBuilder(newArray);