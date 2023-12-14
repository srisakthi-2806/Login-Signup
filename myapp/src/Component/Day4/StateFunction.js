import React, { useState } from "react"
export default function StateFunction()
{
    const[carName,setCarName]=useState("BMW");
    const changeCarName=()=>setCarName("Lamborghini")

    const[count,setCount]=useState(0);
    const inccount=()=>setCount(count + 5)
    const deccount=()=>setCount(count - 1)

    return(
        <div>
            <h1>My car name is {carName}</h1>
            <button onClick={changeCarName}>Click Me</button>
            <h1>Count {count}</h1>
            <button onClick={inccount}>Increment</button>
            <button onClick={deccount}>Decrement</button>

        </div>
    )
}