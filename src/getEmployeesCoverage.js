const data = require('../data/zoo_data');

const { employees, species} = data;
// Encontre funcionário através do param
function findEmployees(obj) {
  return employees.find((e) => Object.values(e).includes(obj.name || obj.id)).responsibleFor;
}
// Capture espécie pelo Id
const findAnimal = ((findEmployees()) => species.find((s) => findEmployees.find((f) => s.id === f)));

console.log(findAnimal());
console.log(findEmployees({ name: 'Sharonda' }))
// function getEmployeesCoverage() {
//   // seu código aqui
// }

module.exports = getEmployeesCoverage;
