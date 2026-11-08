export class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    return this.items.length > 0 ? this.items.pop() : null;
  }
  peek() {
    return this.items.length > 0 ? this.items[this.items.length - 1] : null;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  // Añadimos este método auxiliar para React
  getItems() {
    return [...this.items].reverse(); // En una pila, el último en entrar es el primero en salir (se muestra arriba)
  }
}