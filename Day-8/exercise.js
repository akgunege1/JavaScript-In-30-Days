const dog = {
    name:'Arthur',
    age: 12,
    legs: 4,
    color: 'brown',
    bark: function(){
        return 'woof woof';
    },

    getDogInfo: function() {
        return `${this.name} ${this.age} ${this.legs} ${this.color} ${this.bark()}`;
    }

};

dog.breed = 'Shephard';

const copyDog = Object.values(dog)

console.log(dog.breed);
console.log(copyDog);


console.log(dog.getDogInfo());