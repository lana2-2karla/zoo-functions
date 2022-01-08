const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  //const paramStr = String(animal.value);
  //return paramStr;
  //if (animal.specie === species.map((s) => s.toString(s.name)) 
  //return species.reduce((acc, objS) => {
    return species.residents.filter((r) => r)
  //} ,0)
//}
console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
