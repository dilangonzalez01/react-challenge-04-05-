import { useState, useRef } from 'react';
import { Queue } from './models/Queue';

export default function AtmQueue() {
  const [atmQueue] = useState(new Queue());
  const [people, setPeople] = useState([]); 

  const nameRef = useRef();
  const amountRef = useRef();

  const handleAddPerson = (e) => {
    e.preventDefault();
    const newPerson = {
      name: nameRef.current.value,
      amount: amountRef.current.value,
      arrivalDate: new Date().toLocaleTimeString() // Fecha/Hora aleatoria asignada por el sistema
    };
    atmQueue.enqueue(newPerson);
    setPeople(atmQueue.getItems()); 
    e.target.reset();
  };

  const handleAttendPerson = () => {
    atmQueue.dequeue();
    setPeople(atmQueue.getItems());
  };

  return (
    <div style={{ padding: '20px', border: '2px solid #10b981', borderRadius: '10px', marginTop: '20px' }}>
      <h2>🏧 Cola del Cajero Automático (FIFO)</h2>
      <form onSubmit={handleAddPerson} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <input ref={nameRef} placeholder="Nombre de la persona" required />
        <input ref={amountRef} type="number" placeholder="Monto a retirar ($)" required />
        <button type="submit">Hacer fila (Enqueue)</button>
      </form>

      <button onClick={handleAttendPerson} disabled={people.length === 0} style={{ backgroundColor: '#ef4444', color: 'white' }}>
        Atender Persona (Dequeue)
      </button>

      <h3>Cola actual (Orden de llegada):</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {people.map((person, index) => (
          <li key={index} style={{ border: '1px solid #ccc', margin: '5px 0', padding: '10px', backgroundColor: index === 0 ? '#dcfce3' : 'transparent' }}>
            <strong>{person.name}</strong> - Retira: ${person.amount} (Llegada: {person.arrivalDate})
            {index === 0 && ' ⬅️ Siguiente en ser atendido (Front)'}
          </li>
        ))}
      </ul>
    </div>
  );
}