import { coffePrime } from "./coffePrime";

// Decorador concreto que agrega azucar al café
export class sugarDecorator implements coffePrime {
  private coffee: coffePrime;

  constructor(coffee: coffePrime) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 1; // Agrega el costo de la azucar al costo del café sin azucar
  }

  getDescription(): string {
    return this.coffee.getDescription() + ', + azucar'; // Agrega 'azucar' a la descripción del café
  }
}