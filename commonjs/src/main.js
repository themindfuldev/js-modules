var Zoo = require('./zoo');

var myDog = new Zoo.Dog('Sherlock', 'beagle');
console.log(myDog.bark()); // Sherlock: woof, woof!

var myWolf = new Zoo.Wolf('Werewolf');
console.log(myWolf.bark()); // Werewolf: woooooow!
