const data = require('../data/zoo_data');
// obter array de espêcies
const { species } = data;

function getSpeciesByIds(...specieId) {
  // Map itera cada elemento(id) de specieId;
  // Find itera cada object de especies e já retorna o resultado da comparação
  // Já retorna [] quando o parametro é !specieId
  return specieId.map((id) => species.find((infSpecie) => infSpecie.id === id));
}
console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
