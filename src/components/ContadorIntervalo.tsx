
import React, { useState } from 'react'
import useInterval from './hooks/useInterval'

const ContadorIntervalo = () => {

    const [contador, setContador] = useState<number>(0);

    useInterval(() => {
        setContador(contador + 1);
    }, 2000);

  return (
    <div>

        <h1>{contador}</h1>

      
    </div>
  )
}

export default ContadorIntervalo
