/*

    inheritance before ES6
*/
function Animal() {

}
function Dog() {

}

Object.defineProperties(Animal.prototype, {
    name: {
        value() {
            return 'Animal';
        }
    },
    say: {
        value() {
            return `I'm ${this.name()}`;
        }
    }
})

// Dog instanceof Animal => true
// dog.__proto__.__proto__... === Animal.prototype
// dog.__proto__ === Dog.prototype 
// Dog.prototype.__proto__ === Animal.prototype

Dog.prototype = Object.create(Animal.prototype, {
    name: {
        value() {
            return "Dog";
        }
    }
});

document.write(new Dog() instanceof Animal);
document.write(new Dog().say());

console.log(Dog.prototype.constructor);   // Should be Dog, but the output is Animal.
// Fix
Dog.prototype = Object.create(Animal.prototype, {
    // Fix the constructor
    constructor:{
        value: Dog,
        enumerable: false
    },
    name: {
        value() {
            return "Dog";
        }
    }
});
