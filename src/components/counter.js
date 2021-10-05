import React, { useState } from 'react';


const Counter = () => {
    
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)
    
    return(
        <div>
            Count value: {count}
            <br/>
            <input type="button" value="Increment" onClick = {()=> setCount(count + 1)}/><br/>
            <input type="button" value="Decrement" onClick = {()=> setCount(count - 1)}/><br/>
            <input type = "text" onChange = {(e)=>{
                setValue(Number(e.target.value))
            }}/> <br/>
            <input type = "button" value="Increment by value" onClick = {()=>{
                setCount(value + count)
            }}/>

        </div>
    )
}

export default Counter;