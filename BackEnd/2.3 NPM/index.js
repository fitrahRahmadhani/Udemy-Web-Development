// var generateName = require("sillyname");

import generateName from "sillyname";
import superheroes from "superheroes";

var sillyName = generateName();
console.log(sillyName);

var superHeroes = superheroes.random();
console.log("I'm " + superHeroes);