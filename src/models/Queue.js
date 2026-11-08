export class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.length > 0 ? this.items.shift() : null;
  }
  peek() {
    return this.items.length > 0 ? this.items[0] : null;
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  // Añadimos este método auxiliar para React
  getItems() {
    return [...this.items]; // En una cola, se respeta el orden de llegada
  }
}