const arr1 = [1,34,56,3,22,35];

for (let item of arr1) {
    console.log(item * 3);
}

const obj1 = {
    x: 35,
    y: 23,
    z: 57
}

for (let prop in obj1) {
    console.log(obj1[prop]); 
}

let n = 0;

while (n < 10) {
    n++;
    if (n > 3 && n < 6) {continue;}
    if (n===8) {break;}
    console.log(n);
}