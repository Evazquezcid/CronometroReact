import './App.scss';
import { Cronometro } from './components/Cronometro';
import CuentaAtras from './components/CuentaAtras';
import Reloj from './components/Reloj';

function App() {
  return (
    <div className="App">
      
      <Reloj/>
      <CuentaAtras/>
      <Cronometro/>
    </div>
  );
}

export default App;
