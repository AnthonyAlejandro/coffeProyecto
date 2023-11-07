import { coffePrime, SimpleCoffee } from "./coffePrime";
import { sugarDecorator } from "./decorator";

// Uso del patrón de diseño Decorator
const myCoffee: coffePrime = new SimpleCoffee(); // Se crea una instancia del café sin azucar
console.log(myCoffee.getDescription()); // Imprime la descripción del café sin azucar
console.log(myCoffee.getCost()); // Imprime el costo del café sin azucar

const decoratedCoffee: coffePrime = new sugarDecorator(myCoffee); // Se agrega azucar al café sin azucar
console.log(decoratedCoffee.getDescription()); // Imprime la descripción del café con azucar
console.log(decoratedCoffee.getCost()); // Imprime el costo del café con azucar