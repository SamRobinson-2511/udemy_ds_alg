// const object1 = { value: 10 };
// const object2 = object1;
// const object3 = { value: 10 };

//Reference type:
// object


//Context: 
//tells you where we are within the object
//this.
// console.log(this)


//instantiation
// class Player {
//   constructor(name, type){
//     console.log('player', this);
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
//   }
// }

// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type)
//   }
//   play() {
//     console.log(`Weeee I'm a ${this.type}`)
//   }
// }

// const wizard1 = new Wizard("Shelly", "Healer")
// const wizard2 = new Wizard("Shawn", "Dark Magic")


//classical inheritance - deprecated
// const Player = function(name, type){
//   this.name = name;
//   this.type = type;
// }

// Player.prototype.introduce = function(){
//   console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
// }

// const wizard1 = new Player("Shelly", "Healer");
// const wizard2 = new Player("Shawn", "dark magic");

// wizard1.play = function(){
//   console.log(`Weeeee I'm a ${this.type}`);
// }

// wizard2.play = function(){
//   console.log(`Weeeee I'm a ${this.type}`);
// }


