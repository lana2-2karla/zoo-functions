const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // captura a especie pelo nome
  const infoSpecie = species.find((arrEspecie) => arrEspecie.name === animal);
  // Acessa infoSpecie(objeto), acessa residents(array);
  // reitera com o every
  // Faz sentido colocar o every aqui??
  const result = infoSpecie.residents.every((animais) => animais.age >= age);
  return result;
}
console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
