// == Import npm
import React from 'react';
import Client from 'src/components/Client';
import ClientForm from 'src/components/ClientForm';

// == Import
import './styles.css';

// == Composant
class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: 'Dimitri Basseguy' },
      { id: 2, nom: 'Bob Market' },
      { id: 3, nom: 'Kharn Pcp' },
    ],
  }

  handleDelete = (id) => {
    const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  }

  handleAdd = (client) => {
    console.log(client);
    const clients = [...this.state.clients];
    console.log(clients);
    clients.push(client);
    this.setState({ clients });
  }

  render() {
    return (
      <div>
        <h1>Liste de clients</h1>
        <ul>
          {this.state.clients.map((client) => (
            <Client
              key={client.id}
              details={client}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

// == Export
export default App;
