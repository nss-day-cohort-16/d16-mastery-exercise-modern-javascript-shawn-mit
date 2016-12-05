"use strict";

//1. A base Robot function.

 function Robot () {
    this.armor = 100;
    this.damage = 0;
    this.weapon = weapon;

};


 

//1. Define three robot type functions (e.g. Drone, Bipedal, ATV).

function Drone() {
    this.weapon = laserbeams;
    this.special = "aerial";
};

Drone.prototype = new Robot();

let Starscream = new Drone.prototype; 
let Shockwave = new Drone.prototype;

Starscream.prototype.special2 = "sonicboom";

Shockwave.prototype.special2 = "invisibility";

//////////////////////////////////////

function Bipedal() {
    this.weapon =  missiles;
    this.special = "ground";
};


Bipedal.prototype = new Robot();

let Stunticon = new Bipedal.prototype;
let Graveler = new Bipedal.prototype;

Stunticon.prototype.special2 = "mach 5";
Graveler.prototype.special2 = "dig holes"
/////////////////////////////////////

function ATV() {
    this.weapon = mortar;
    this.special = "amphibian";
};

ATV.prototype = new Robot();

 let Warpath = new ATV.prototype;
 let Blitzkrieg = new ATV.prototype; 

//1. Define at least 2 specific robot model functions for each type.

 Warpath.prototype.special2 = "pulse mortar";
 Blitzkrieg.prototype.special2 = "ultrasound mortar";


/////////////////////////////////////


//1. Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.

Drone.prototype.health = Math.floor((Math.random() * 100) - 10);

Bipedal.prototype.health = Math.floor((Math.random() * 150) - 6);

ATV.prototype.health = Math.floor((Math.random() * 200) - 3);


//1. Give each robot model a different range of damage they do using the same technique.


Drone.prototype.damage = Math.ceil((Math.random() * 100) + 10 );

Bipedal.prototype.damage = Math.ceil((Math.random() * 100) + 5);

ATV.prototype.damage = Math.ceil((Math.random() * 105) + 3);





