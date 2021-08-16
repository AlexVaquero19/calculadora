import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes( calc.slice(-1) ) )
    ){
      return;
    }
    
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const crearDigitos = () => {
    const digitos = [];

    for (let i = 1; i < 10; i++) {
      digitos.push(<button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>);
    }

    return digitos;
  }

  const calcular = () => {
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
        <div className="display">
          { calc || "0" }
        </div>

        <div className="operadores">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={borrarUltimo}>DEL</button>
          <button onClick={borrar}>AC</button>
        </div>

        <div className="digitos">
          { crearDigitos() }
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={ calcular }>=</button>

        </div>
      </div>  
    </div>
  );
}

export default App;
