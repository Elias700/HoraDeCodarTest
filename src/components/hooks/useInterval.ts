
import { useEffect, useRef } from "react";

export default 

function useInterval (callbakc: ()=> void, delay: number){ //Está tipando os argumentos

    const savedCallback = useRef<()=> void>();

   useEffect(()=> {
        savedCallback.current = callbakc;
   }, [callbakc])

   useEffect(()=> {
    function tick (){
        savedCallback.current!();
    }

    if(delay !== null){
        let id = setInterval(tick, delay);

        return () => clearInterval(id);
    }
   }, [delay]);

};