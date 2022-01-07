const data = require('../data/zoo_data');

const { employees: funcio } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  } return funcio.find((f) => f.firstName === employeeName || f.lastName === employeeName);
}
// Se employeeName for falso, retorna objeto vazio;
// acessa nome e sobrenome;
// find percorre array funcionarios e retorna o objeto em que a condição passada é correta.
// console.log(getEmployeeByName());

module.exports = getEmployeeByName;
