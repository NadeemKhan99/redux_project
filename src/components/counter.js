import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByValue } from '../store/counterslice';
import DisplayCounter from './counterdisplay'


const Counter = () => {
    
    // const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
    const counter = useSelector((state)=>{
        return state.counter.count
    })
    
    return(
        <div>
            Count value: {counter}
            <br/>
            <input type="button" value="Increment" onClick = {()=>dispatch(increment())}/><br/><br/>
            <input type="button" value="Decrement" onClick = {()=>{dispatch(decrement())}}/><br/><br/>
            <input type = "text" onChange = {(e)=>{
                setValue(Number(e.target.value))
            }}/> <br/>
            <input type = "button" value="Increment by value" onClick = {()=>{
                dispatch(incrementByValue(Number(value)))
            }}/>

            <DisplayCounter/>

        </div>
    )
}

export default Counter;