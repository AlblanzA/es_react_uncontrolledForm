
import { use } from "react";
import { useEffect, useState } from "react"

export function Counter( {initialValue = 0} ){
   
// nel tutorial ha rimosso questi effetti per metterli in un altro componente chiamato Clock
// useEffect(()=>{
//     console.log("i have been mounted");
// },[])

     useEffect( ()=> {
     console.log("The value of the counter is ${counter}");
    return ()=> {
     console.log("the value of the counter was ${counter}")}
    }, [counter, initialValue] )


    function handleCounterIncrement() {
        // setCounter(counter + 1)
        //oppure posso scriverlo così
         setCounter((c)=> c+1)
    }
    handleCounterIncrement()
    
    function handleCounterDecrement(){
        setCounter((c)=> c-1)
    }
    handleCounterDecrement()


    function handleCounteReset(){
        setCounter(initialValue)
    }
   
    handleCounterReset()


    const [counter, setCounter] = useState(0)
    return (
        <div>
            <p>i have counted to {counter}</p>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
    )
} 
Counter()