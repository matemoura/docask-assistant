import React from 'react';
import './App.css';

function App() {
  const documents = [
    { _id: '1', title: 'Manual de RH', version: 1, filePath: 'uploads/manual-rh.pdf' },
    { _id: '2', title: 'Política de Qualidade', version: 2, filePath: 'uploads/politica-qualidade.pdf' },
  ];

  return (
    <div className="app">
      <h1>Document Assistant</h1>
      <div className="document-list">
        {documents.length === 0 ? (
          <p>Nenhum documento encontrado.</p>
        ) : (
          documents.map((doc) => (
            <div key={doc._id} className="document-item">
              <h3>{doc.title}</h3>
              <p>Versão: {doc.version}</p>
              <a href={`http://localhost:5000/${doc.filePath}`} target="_blank" rel="noopener noreferrer">
                Visualizar PDF
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
