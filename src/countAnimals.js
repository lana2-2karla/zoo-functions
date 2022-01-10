const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const objAnimais = {};
    species.forEach((s) => {
      objAnimais[s.name] = s.residents.length;
    });
    return objAnimais;
  }
  if ((!animal.sex)) {
    return species.find((bicho) => bicho.name === animal.specie).residents.length;
  }
  if ((animal.specie && animal.sex)) {
    const teste = species.find((especie) => especie.name === animal.specie).residents
      .filter((r) => r.sex === animal.sex).length;
    return teste;
  }
}
// console.log(countAnimals());

module.exports = countAnimals;
