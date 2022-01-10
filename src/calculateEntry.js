const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const entrant = Object.values(entrants);
  return entrant.reduce((acc, visita) => {
    const { age } = visita;
    if (age < 18) acc.child += 1;
    if (age >= 18 && age < 50) acc.adult += 1;
    if (age >= 50) acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants = {}) {
  const arrAgeKeys = Object.keys(countEntrants(entrants));
  const arrAgeValues = Object.values(countEntrants(entrants));
  if (entrants !== {}) {
    return arrAgeKeys.reduce((acc, key, i) => acc + prices[key] * arrAgeValues[i], 0);
  }
}
// console.log(calculateEntry([
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ]));

module.exports = { countEntrants, calculateEntry };
