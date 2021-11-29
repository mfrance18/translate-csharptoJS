// Put your code here
console.log("Lets roll some dice, baby!")
console.log("---------------------------")

const numString = ["zero", "one", "two", "three", "four", "five", "six"]

function getRandomRoll(min, max) {
    min = Math.ceil(1)
    max = Math.floor(6)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {


    die1 = getRandomRoll(1, 6);
    die2 = getRandomRoll(1, 6)

    let message = `${numString[die1]} + ${numString[die2]} = ${die1 + die2}`

    if (die1 === die2) {
        message += " DOUBLES!"
    }

    console.log(message)
}



// const createDie = (value) => {
//     return {
//         value,
//         toString: () => {
//             const dieString = "Unknown"
//             const numString = ["zero", "one", "two", "three", "four", "five", "six"]
//             dieString = numString[this.value]
//             return dieString
//         }
//     }
// }



