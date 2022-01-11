const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const idAnimale = employees.find((f) => f.id === id).responsibleFor[0];
  const residentes = species.find((s) => s.id === idAnimale).residents;
  const ageResidents = residentes.map((r) => r.age).sort((a, b) => b - a)[0];
  const findResidents = residentes.find((r) => r.age === ageResidents);
  return Object.values(findResidents);
}
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
