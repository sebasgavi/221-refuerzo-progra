import { createBtn } from './createBtn'
import { Person } from './Person';
import { RoundPerson } from './RoundPerson';
import { SquarePerson } from './SquarePerson';

export const setFilters = (people: Person[]) => {

  const showFiltered = (filtered: Person[]) => {
    // borrar todos los elementos de pantalla
    people.forEach((person) => {
      person.remove();
    });
    // mostrar solo los elementos filtrados
    filtered.forEach((person) => {
      person.draw();
    });
  }

  createBtn('Ver Cuadrados', () => {
    const squarePeople = people.filter((person) => {
      return person instanceof SquarePerson;
    });

    showFiltered(squarePeople);
  });


  createBtn('Ver Círculos', () => {
    const roundPeople = people.filter((person) => {
      return person instanceof RoundPerson;
    });

    showFiltered(roundPeople);
  });

  createBtn('Ver Todos', () => {
    showFiltered(people);
  });


  createBtn('Transformar a Círculos', () => {
    const mappedPeople = people.map((person) => {
      if(person instanceof RoundPerson) {
        return person;
      } else {
        const newPerson = new RoundPerson('', 0);
        newPerson.copyFromOtherPerson(person);
        return newPerson;
      }
    });
    showFiltered(mappedPeople);

    console.log(people);
    console.log(mappedPeople);
  });
}