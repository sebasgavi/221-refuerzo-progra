import { getRandomNumber } from './getRandomNumber';

export abstract class Person {

  // variables globales de la clase
  protected name: string;
  protected age: number;
  protected element: HTMLDivElement;
  protected greetings: string;
  protected color: string;

  // constructor para declarar valores iniciales
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.greetings = `Hola, soy ${this.name}`;
    this.color = `rgb(${getRandomNumber(20, 255)} , ${getRandomNumber(20, 255)} , ${getRandomNumber(20, 255)})`;
    // bind para arreglar posibles problemas con el this
    this.sayHi = this.sayHi.bind(this);
    this.draw = this.draw.bind(this);
  }

  copyFromOtherPerson(basePerson: Person) {
    this.age = basePerson.age;
    this.name = basePerson.name;
    this.color = basePerson.color;
    this.greetings = basePerson.greetings;
  }

  sayHi() {
    this.element.innerText = this.greetings;
    setTimeout(() => {
      this.element.innerText = '';
    }, 2000);
  }

  draw() {
    // se crea el elemento que representa el objeto
    const element = document.createElement('div');
    document.body.appendChild(element);

    element.addEventListener('click', this.sayHi);

    element.style.height = '100px';
    element.style.width = '100px';
    element.style.border = `${this.age / 6}px solid ${this.color}`;
    element.style.margin = '10px';

    // se asigna su valor a la variable global de la clase
    this.element = element;
  }

  remove() {
    this.element.remove();
  }

}