const { employees, species } = require('../data/zoo_data');

// Encontre funcionário através do param e captura info
function findEmployees(obj) {
  const objFunci = employees.find((funcio) => Object.values(funcio).includes(obj.name || obj.id));
  const arrAnimal = objFunci.responsibleFor;
  const findAnimal = arrAnimal.map((animal) => species.find(({ id }) => id === animal).name);
  const findLocation = arrAnimal.map((animal) => species.find(({ id }) => id === animal).location);
  // Captura info e monta objeto:
  const objInfoFunci = {
    id: objFunci.id,
    fullName: `${objFunci.firstName} ${objFunci.lastName}`,
    species: findAnimal,
    locations: findLocation,
  };
  return objInfoFunci;
}
function getEmployeesCoverage(param) {
  if (!param) {
    const arrCoverage = [];
    employees.forEach((e) => arrCoverage.push(findEmployees({ id: e.id })));
    return arrCoverage;
  }
  try {
    return findEmployees(param);
  } catch (error) {
    throw new Error('Informações inválidas');
  }
}

// console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
