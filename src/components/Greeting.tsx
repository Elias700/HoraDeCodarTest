

type GreetingProps = { //Está criando um type apenas para tipar os parametros
    name: string,
    age: number,
};

import React from 'react'

const Greeting = ({name, age}: GreetingProps) => {
  return (
    <div>

        <h1>ola {name} tenho {age} idade!</h1>
      
    </div>
  )
}

export default Greeting
