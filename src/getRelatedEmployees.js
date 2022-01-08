const data = require('../data/zoo_data');

const { employees: f } = data;

function isManager(id) {
  // some percorre array f e retorna true se a condição passada for true e false se for false
  // acesso funcio(f), acesso managers(array) pelo includes
  // includes faz uma comparação e retorna true se achar o id(param)
  const booleanGer = f.some((funcio) => funcio.managers.includes(id));
  return booleanGer;
}
// console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
function getRelatedEmployees(gerId) {
  if (!isManager(gerId)) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  const colab = f.filter((fun) => fun.managers.includes(gerId));
  return colab.map((c) => `${c.firstName} ${c.lastName}`);
}
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'))

module.exports = { isManager, getRelatedEmployees };
