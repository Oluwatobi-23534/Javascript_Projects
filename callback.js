let array1 = [1,2,3,4,5]

function higherOrder (someArray, callback) {
    for (let i of someArray) {
        callback(i);
    }
}

function logNumber (num) {
    console.log(num)
}

higherOrder(array1, logNumber);