const R = require('ramda')

const User = (age, gender, salary) => ({
  age,
  gender,
  salary,
})

const users = [
  User(18, 'm', 1110),
  User(23, 'm', 1400),
  User(45, 'm', 6230),
  User(21, 'm', 3450),
  User(29, 'f', 7420),
  User(19, 'f', 2240),
  User(20, 'f', 5420),
  User(31, 'f', 6210),
  User(33, 'f', 4850),
  User(41, 'f', 5240),
]

const isMale = user => user.gender === 'm'

const isFemale = user => user.gender === 'f'

const getGender = {
  m: isMale,
  f: isFemale
}

const isGender = gender => getGender[gender]

const getAge = user => user.age

const getSalary = user => user.salary


const sumMaleAges = R.pipe(
  R.filter(isGender('m')),
  R.map(getAge),
  R.reduce(R.add, 0)
)

const sumMaleSalaries = R.pipe(
  R.filter(isGender('m')),
  R.map(getSalary),
  R.reduce(R.add, 0)
)

const sumFemaleAges = R.pipe(
  R.filter(isGender('f')),
  R.map(getAge),
  R.reduce(R.add, 0)
)

const sumFemaleSalaries = R.pipe(
  R.filter(isGender('f')),
  R.map(getSalary),
  R.reduce(R.add, 0)
)

console.log(`
  Male Ages: ${sumMaleAges(users)}
  Male Salaries: R$ ${sumMaleSalaries(users)}

  Female Ages: ${sumFemaleAges(users)}
  Female Salaries: R$ ${sumFemaleSalaries(users)}
`)