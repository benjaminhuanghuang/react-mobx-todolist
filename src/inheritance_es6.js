/*

    inheritance before ES6
*/
class Animal {
    name(){
        return 'Animal';
    }

    say(){
        return `I'm ${this.name()}`;
    }
}

class Dog extends Animal {
    food = 'bone';
    
    name(){
        return 'Dog！';
    }
}

document.write(new Dog() instanceof Animal);

document.write(new Dog().say());
