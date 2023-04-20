import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos de Cooding-Bootcamp</h1>
        <Testimonio
        nombre='Shawn Wang'
        pais='Singapur'
        imagen='shawn'
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio='"Da miedo cambiar de carrera. Solo gane la confianza de que podia programar trabajando a traves de los cientos de horas de lecciones gratuitas en Codding-Bootcamp. Dentro de un anio tuve un trabajo de seis cifras como ingeniero de software. Codding-Bootcamp me cambio la vida."'/> 
      
      <Testimonio
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='sarah'
        cargo='Ingeniera de Software'
        empresa='ChatDesk'
        testimonio='"Cooding-Bootcamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevo mis conocimientos de programacion de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increible."'/>
      
      <Testimonio
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='emma'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedo. Estudiar JavaScript, asi como estructuras de datos y algoritmos en FreeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis suenios como ingeniero de software en Spotify."'/>
      </div>
    </div>
  );
}

export default App;
