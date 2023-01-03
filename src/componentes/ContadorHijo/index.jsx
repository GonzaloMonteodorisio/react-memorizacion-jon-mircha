import React, { memo, useMemo } from 'react';

const ContadorHijo = ({ contador, sumar, restar }) => {
  // let superNumero = 0;

  // for (let i = 0; i < 1000000000; i++) {
  //   superNumero++;
  // }

  const superNumero = useMemo(() => {
    let numero = 0;

    for (let i = 0; i < 1000000000; i++) {
      numero++;   
    } 

    return numero;
  }, []);

  console.info('Contador Hijo se renderiza');
  return (
    <div style={{ border: 'thin solid #000', margin: '1rem', padding: '1rem' }}>
      <h2>Contador Hijo</h2> 
      <nav>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
      </nav>
      <h3>Contador: {contador}</h3>  
      <h3>Super Número: {superNumero}</h3>  
    </div>
  )
}

export default memo(ContadorHijo);