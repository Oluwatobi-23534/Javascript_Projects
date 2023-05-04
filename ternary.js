let age = 33;

if (age > 40) {
    console.log("I am now middle aged.")
} else {
    console.log("I am still young yet.")
}

age > 40 ? console.log("I am now middle aged.") : console.log("I am still young yet.")

if (age > 40) {
    console.log("I am now middle aged.")
} else if(age == 33) {
    console.log("Hey that`s how old I am!")
} else {
    console.log("I am still young yet.")
}

age > 40 ? 
console.log("I am now middle aged.") : 
age ==33 ? 
console.log("Hey that`s how old I am!") :
(console.log("I am still young yet."))

switch (true) {
    case(age > 40):
        console.log("I am now middle aged.")
        break;
    case(age == 33):
        console.log("Hey that`s how old I am!")
        break;
    default:
        console.log("I am still young yet.")
}