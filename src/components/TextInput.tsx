

import React, { useState } from 'react'

//Criando um formulário e tipando

const TextInput = () => {

    const [text, setText] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        console.log('Formulário enviado!!!');
        
    };


  return (
    <div>

       <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}
                placeholder='Digite seu nome'
                onChange={handleChange}
                />
                <p>{text}</p>
                <button type='submit'>Enviar</button>
       </form>
      
    </div>
  )
}

export default TextInput
