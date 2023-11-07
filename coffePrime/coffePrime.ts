//Materia: Programacion Orienta a Objetos 
//Autor : Anthony Alejandro Cheme Canencia 
//Fecha de elaboracion: Lunes 06 de Noviembre del 2023


// Interfaz que define la funcionalidad base del componente
export interface coffePrime {
    getCost(): number; // Método para obtener el costo del café
    getDescription(): string; // Método para obtener la descripción del café
  }
  
  // Clase base que implementa la interfaz Coffee
  export class SimpleCoffee implements coffePrime {
    getCost(): number {
      return 2; // Costo base del café
    }
  
    getDescription(): string {
      return 'Café sin azucar'; // Descripción del café base
    }
  }
  