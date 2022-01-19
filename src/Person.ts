import { getRandomNumber } from './getRandomNumber';

export class Person {

  // variables globales de la clase
  name: string;
  age: number;
  element: HTMLDivElement;

  // constructor para declarar valores iniciales
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    // bind para arreglar posibles problemas con el this
    this.sayHi = this.sayHi.bind(this);
    this.draw = this.draw.bind(this);
  }

  sayHi() {
    this.element.innerText = `Hola, soy ${this.name}`;
  }

  draw() {
    // se crea el elemento que representa el objeto
    const element = document.createElement('div');
    document.body.appendChild(element);

    element.addEventListener('click', this.sayHi);

    element.style.height = '100px';
    element.style.width = '100px';
    element.style.border = `${this.age / 6}px solid rgb(${getRandomNumber(20, 255)} , ${getRandomNumber(20, 255)} , ${getRandomNumber(20, 255)})`;
    element.style.margin = '10px';

    // se asigna su valor a la variable global de la clase
    this.element = element;
  }

}