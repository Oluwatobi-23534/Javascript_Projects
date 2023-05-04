let greeting = name => console.log(`Hello my name is ${name}! Nice to meet you.`)

greeting("TOBI")

function addTwoNums (num1, num2) {
    let sum = num1 + num2
    return function closurePractice () {
        return sum * 4
    }
}

let firstSum = addTwoNums(3,8)
let multSum = firstSum()

console.log(multSum)
