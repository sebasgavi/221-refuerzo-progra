import { getRandomNumber } from './getRandomNumber';
import { Person } from './Person';

// arreglo para guardar las personas
const people: Person[] = [];
// para verificar valores en la consola, solo debe usarse para desarrollo
(window as any).people = people;

// crear un elemento de tipo input
const input = document.createElement('input');
// agregar este nuevo elemento al cuerpo del documento
document.body.appendChild(input);

// declaramos la función que responde al evento
// escuchar un evento de tipo keypress
input.addEventListener('keydown', function (event) {
  console.log('evento escuchado', event.key);

  if(event.key === 'Enter'){
    console.log('Crear persona', input.value);

    const newPerson = new Person(input.value, getRandomNumber(8, 50));
    people.push(newPerson);
    newPerson.draw();
    console.log(people);
  }
});
