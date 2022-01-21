import { CanStretch } from './CanStretch';
import { Person } from './Person';

export class SquarePerson extends Person implements CanStretch {

  // constructor para declarar valores iniciales
  constructor(name: string, age: number) {
    super(name, age);
    this.greetings = `Hola, soy ${this.name} y soy cuadrado`;
  }

  stretch() {

  }

}