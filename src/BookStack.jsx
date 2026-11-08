import { useState, useRef } from 'react';
import { Stack } from './models/Stack';

export default function BookStack() {
  const [bookStack] = useState(new Stack());
  const [books, setBooks] = useState([]); // Estado para refrescar la UI

  const nameRef = useRef();
  const isbnRef = useRef();
  const authorRef = useRef();
  const editorialRef = useRef();

  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      name: nameRef.current.value,
      isbn: isbnRef.current.value,
      author: authorRef.current.value,
      editorial: editorialRef.current.value
    };
    bookStack.push(newBook);
    setBooks(bookStack.getItems()); // Actualizamos UI
    e.target.reset(); // Limpiamos formulario
  };

  const handlePopBook = () => {
    bookStack.pop();
    setBooks(bookStack.getItems());
  };

  return (
    <div style={{ padding: '20px', border: '2px solid #8b5cf6', borderRadius: '10px' }}>
      <h2>📚 Pila de Libros (LIFO)</h2>
      <form onSubmit={handleAddBook} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <input ref={nameRef} placeholder="Nombre del libro" required />
        <input ref={isbnRef} placeholder="ISBN" required />
        <input ref={authorRef} placeholder="Autor" required />
        <input ref={editorialRef} placeholder="Editorial" required />
        <button type="submit">Apilar Libro (Push)</button>
      </form>

      <button onClick={handlePopBook} disabled={books.length === 0} style={{ backgroundColor: '#ef4444', color: 'white' }}>
        Sacar Libro (Pop)
      </button>

      <h3>Pila actual:</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {books.map((book, index) => (
          <li key={index} style={{ border: '1px solid #ccc', margin: '5px 0', padding: '10px', backgroundColor: index === 0 ? '#e0f2fe' : 'transparent' }}>
            <strong>{book.name}</strong> - {book.author} (ISBN: {book.isbn} | Ed: {book.editorial})
            {index === 0 && ' ⬅️ Cima de la pila (Top)'}
          </li>
        ))}
      </ul>
    </div>
  );
}