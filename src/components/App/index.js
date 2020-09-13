// == Import npm
import React, { useState } from 'react';
import Client from 'src/components/Client';
import ClientForm from 'src/components/ClientForm';

// == Import
import './styles.css';

// == Composant
const App = () => {
  const [clients, setClients] = useState([
    { id: 1, nom: 'Dimitri Basseguy' },
    { id: 2, nom: 'Bob Market' },
    { id: 3, nom: 'Kharn Pcp' },
  ]);

  const handleDelete = (id) => {
    const updatedClients = [...clients];
    const index = updatedClients.findIndex((client) => client.id === id);
    updatedClients.splice(index, 1);
    setClients({ updatedClients });
  };

  const handleAdd = (client) => {
    const updatedClients = [...clients];
    updatedClients.push(client);
    setClients({ updatedClients });
  };

  return (
    <div>
      <h1>Liste de clients</h1>
      <ul>
        {clients.map((client) => (
          <Client
            key={client.id}
            details={client}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <ClientForm onClientAdd={handleAdd} />
    </div>
  );
};

// == Export
export default App;
