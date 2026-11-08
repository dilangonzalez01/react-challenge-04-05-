import { useState } from 'react';
import BookStack from './BookStack';
import AtmQueue from './AtmQueue';

function App() {
  const [activeTab, setActiveTab] = useState('stack');

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Challenges 04 & 05</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('stack')}>📚 Pilas (Challenge 04)</button>
        <button onClick={() => setActiveTab('queue')}>🏧 Colas (Challenge 05)</button>
      </div>

      {activeTab === 'stack' ? <BookStack /> : <AtmQueue />}
    </div>
  );
}

export default App;