import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [calc, setCalc] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes( calc.slice(-1) ) )
    ){
      return;
    }
    
    setCalc(calc + value);
  }

  const crearDigitos = () => {
    const digitos = [];

    for (let i = 1; i < 10; i++) {
      digitos.push(<button className="col bg-dark" onClick={() => updateCalc(i.toString())} key={i}>{i}</button>);
    }

    return digitos;
  }

  const calcular = () => {
    // eslint-disable-next-line
    setCalc(eval(calc).toString());
  }

  const borrarUltimo = () => {
    if(calc === ''){
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  }

  const borrar = () => {
    setCalc('');
  }

  return (
    <div className="App">
      <div className="calculadora">
        <div className="d-grid bg-dark text-white pt-4">
          <div className="me-3 fs-1 text-end">{ calc || "0" }</div>
        </div>

        <div className="operadores bg-danger">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={borrarUltimo}>DEL</button>
          <button onClick={borrar}>AC</button>
        </div>

        <div className="row">
          <div className="numeros">
            { crearDigitos() }
            <button className="bg-dark" onClick={() => updateCalc('0')}>0</button>
            <button className="bg-dark" onClick={() => updateCalc('.')}>.</button>
            <button className="bg-dark" onClick={ calcular }>=</button>
          </div>
        </div>

      </div>  
    </div>
  );
}

export default App;
