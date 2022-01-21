import { Person } from './Person';

export class RoundPerson extends Person {

  // constructor para declarar valores iniciales
  constructor(name: string, age: number) {
    super(name, age);
  }

  draw() {
    super.draw();
    this.element.style.borderRadius = '50%';
  }

}