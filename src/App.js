import './App.css';
// import { Logo } from './components/logo';
// import appLogo from './img/freecodecamp-logo.png';
import { Lista } from './components/listaTareas'

function App() {
  return (
    <div className="aplicacion-tareas">
      {/* <Logo imagen={appLogo} nombre='App Logo' /> */}
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Lista />
      </div>
    </div>
  );
}

export default App;
