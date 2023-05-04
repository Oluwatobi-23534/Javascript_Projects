const me = {
    name: 'Tobi',
    age: 25,
    city: 'Lagos',
    "favorite food": "Jollof rice",
    greeting: function() {console.log(`Hi my name is ${this.name} and I am ${this.age} years old.`)}
}

console.log(me.name);
console.log(me["city"])

me.greeting();