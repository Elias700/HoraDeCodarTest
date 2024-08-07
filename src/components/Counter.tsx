import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState<number>(0); //tipando useState

    useEffect(() => {
        console.log(`Está com o valor de ${count}`);
    }, [count]);

  return (
    <div>

        <p>{count}</p>
        <button onClick={()=> setCount((prevCount)=> prevCount + 1)}>Incrementar</button>
      
    </div>
  )
}

export default Counter
