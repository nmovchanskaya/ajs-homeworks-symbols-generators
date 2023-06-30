import Character from './character.js';

class Team {
  constructor(persons) {
    this.persons = persons;
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.persons.length; i++) {
      yield this.persons[i];
    }
  }
}

const persons = [];
persons.push(new Character('Joe', 'Swordsman'));
persons.push(new Character('Sam', 'Magician'));
const team = new Team(persons);

for (const person of team) {
  console.log(person);
}
