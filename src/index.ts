import { createBtn } from './createBtn';
import { getRandomNumber } from './getRandomNumber';
import { Person } from './Person';
import { RoundPerson } from './RoundPerson';
import { setFilters } from './setFilters';
import { SquarePerson } from './SquarePerson';

// arreglo para guardar las personas
const people: Person[] = [];
// para verificar valores en la consola, solo debe usarse para desarrollo
(window as any).people = people;

// crear un elemento de tipo input
const input = document.createElement('input');
// agregar este nuevo elemento al cuerpo del documento
document.body.appendChild(input);


// Botón para SquarePerson
createBtn('Crear Cuadrado', () => {
  const newPerson = new SquarePerson(input.value, getRandomNumber(8, 50));
  people.push(newPerson);
  newPerson.draw();
});


// Botón para RoundPerson
createBtn('Crear Círculo', () => {
  const newPerson = new RoundPerson(input.value, getRandomNumber(8, 50));
  people.push(newPerson);
  newPerson.draw();
});


setFilters(people);


function allPeopleSayHi() {
  for(let i = 0; i < people.length; i++) {
    people[i].sayHi();
  }
}


const allPeopleStretch = () => {
  for(let i = 0; i < people.length; i++) {
    const person = people[i];
    if('stretch' in person) {
      (person as SquarePerson).stretch();
    }
  }
}