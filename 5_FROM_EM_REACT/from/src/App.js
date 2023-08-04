import './App.css';

import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ 
        name: "Rafael", 
        email: "rafaeloliver789@gmail.com", 
        bio: "Sou um advogado", 
        role: "Admin"
        }}
      />
    </div>
  );
};

export default App;
