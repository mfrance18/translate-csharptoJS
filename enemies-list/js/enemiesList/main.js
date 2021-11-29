// Put your code here

console.log("My Enemies List!");
console.log("----------------")

const getEnemies = () => {
    return listOfEnemies
}

const listOfEnemies = [
    {
        firstName: "Joshua",
        lastName: "Flowers",
        offenses: ["Being a jerk to me in elemetary school", "Not being Nice to me in elementary school"],
        isReallyHated: true
    }
]


const enemies = getEnemies()

for (const myEnemy of enemies) {
    if (myEnemy.isReallyHated) {
        console.log(`${myEnemy.firstName} ${myEnemy.lastName} "Really, really dislike!`)
    } else {
        console.log(`${myEnemy.firstName} ${myEnemy.lastName} This is why: ${myEnemy.offenses}`)
    }
}

