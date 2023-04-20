import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos de Cooding-Bootcamp</h1>
        <Testimonio/> 
      </div>

    </div>
  );
}

export default App;
