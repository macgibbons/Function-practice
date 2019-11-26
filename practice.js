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







// Practice: Fast Food (Multiple Parameters)
// Your job in this exercise is to write a function that returns an object that represents a fast food meal. The customer will be able to order a sandwich, a side item (like fries or apples), a drink, and a dessert. Your function should take all of those externally defined values as input (i.e. parameters) and then return an object like this.

// {
//     "sandwich": "Ultimate Slammer",
//     "side": "Potato wedges",
//     "drink": "Mr. Pepper",
//     "dessert": "Fudge sundae"
// }

const buildMeal = (sandwich, side, drink, dessert) => {
    const meal = {
        "sandwich": sandwich,
        "side": side,
        "drink": drink,
        "dessert": dessert
    };
return meal;
}
const myMeal = buildMeal ('Ultimate Slammer', 'potato wedges', 'mr. pepper', 'fudge sundae',)
console.log(myMeal);

// Tip: Since each of these values are separate items, then there needs to be one parameter for each one. Then you need to specify four arguments.

// const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")
// Exploration Tasks
// What happens if you define more parameters than arguments?
// What happens if you change the order of your parameters?
// What happens if you change the order of your argument values when you invoke the function?
// What happens if you remove one of your parameters?




// Practice: Same Chores, Different Days
// Here's a fancy term for you: Higher Order Functions. It's a function that takes another function as a parameter and uses it for its own purposes.

// Here's a simple example. This is a function that reads in a number, then returns that number multiplied by 2.

// const twice = number => number * 2

// twiceTwo = twice(2)
// console.log(twiceTwo)  // 4

// twiceSix = twice(6)
// console.log(twiceSix)  // 12

// twiceThirteen = twice(13)
// console.log(twiceThirteen)  // 26
// You can make functions that multiply numbers by any amount. Make two more functions: one that multiplies by 5, and one that squares a number.

// const timesFive = number => number * 5
// console.log(timesFive(2))  // 10
// console.log(timesFive(5))  // 25

// const square = number => number * number
// console.log(square(4))  // 16
// console.log(square(13))  // 169
// So now you have three functions, each of which does something different to a number.

// const twice = number => number * 2
// const timesFive = number => number * 5
// const square = number => number * number
// Now you can define another function that takes one of those functions as input. It's a more generic function that will perform any task on a number, but needs you to tell it what it should do.

// /*
//     I can make any number bigger, but you need to tell
//     me how much bigger by giving me the function you
//     want me to invoke on the number
// */
 const bigify = (number, operationFunction) => {
     const result = operationFunction(number)
     return result
 }
//  Now take the same number and perform all three operations on it by invoking bigify().

const number = 7
// const by2 = bigify(number, twice)  // 14
// const by5 = bigify(number, timesFive)  // 35
// const byItself = bigify(number, square)  // 49
// Lightning Exercise: Define another function that cubes a number. Then augment the code above by passing the function to bigify()

const cubed = (number) => number * number * number;

console.log(cubed(2));

const byCubed = bigify(number, cubed);

console.log(byCubed); //343 



// You are now going to do something similiar. You are going to make the same person perform a series of three chores. Then you get to decide which three chores, depending on the day.






// Defining the Chores
// First define six (6) functions that defines a single parameter whose value should be an object. That object will look like this.

// {
//     firstName: "Donald",
//     lastName: "McLelland"
// }
// Each function should return a string in the following format, if the object parameter represents Donald McLelland.

// "Donald McLelland went to the grocery store"
// or

// "Donald McLelland got the engine oil changed"
// So think of six random tasks that you perform on a regular basis and define a function for each one. We will start you off with a hint.

// const xxxxx = person => `${} ${} `
const mac = {
    firstName: "Mac",
    lastName: "Gibbons"
}

const gotGas = (person) => `${person.firstName} ${person.lastName} filled up his tank`;
const whatIsYourName = (person) => `${person.firstName}'s last name is ${person.lastName}.`
const wentForaRun = person => `${person.firstName} went for a jog today but had to stop because it rained`

console.log(gotGas(mac));
console.log(whatIsYourName(mac));
console.log(wentForaRun(mac));





// Lazy Day
// Now define a function that has three parameters. The purpose of each parameter is as follows:

// chore - A function that will perform a chore
// person - An object representing a perform. It should have a firstName and a lastName property.
// day - The weekday to perform the task (e.g. "Tuesday")
// We suggest you name this higher order function dayPlanner().

// The return value of dayPlanner should be a string in the following format, assuming the person object represents Yolanda Johnson, the chore was mowing the lawn, and the day was Thursday.

// "Yolanda Johnson mowed the lawn on Thursday."
// Log that output to the developer console.
const theChore = () => {
    return 'took the trash out'
}
const thePerson = {
    firstName: 'Mac',
    lastName: 'Gibbons'
}
const dayOfWeek = 'Tuesday'

const dayPlanner = (chore, person, day) => {
   return `${person.firstName} ${person.lastName} ${chore} on ${dayOfWeek}`
}


console.log(dayPlanner(theChore(), thePerson, dayOfWeek))






// Busy Day
// Refactor the dayPlanner higher order function to accept five (5) parameters. The first three should be functions. The fourth should be the person object. The fifth should be the day string.

// (firstChore, secondChore, thirdChore, person, day)
// Inside the higher order function, invoke all three chore functions and format the return value for dayPlanner to follow this format.

// "On Monday, Yolanda Johnson mowed the lawn, and Yolanda Johnson
// picked up the dry cleaning, and Yolanda Johnson replaced the
// batteries in the smoke detectors."
// Log that output to the developer console.

const firstChore = () => {
    return `folded the laundry`
}

const secondChore = () => {
    return `went grocery shopping`
}

const thirdChore = () => {
    return `meal prepped for the week`
}

const theNewPerson = {
    firstName: "Morgan",
    lastName: "Bonham"
}

const theDayOfTheWeek = "Sunday"

const newDayPlanner = (firstChore,secondChore, thirdChore, person, day) => {
    return `On ${day}, ${person.firstName} ${person.lastName} ${firstChore}, ${secondChore}, and ${thirdChore} `
}

console.log(newDayPlanner(firstChore(), secondChore(), thirdChore(), theNewPerson, theDayOfTheWeek));
