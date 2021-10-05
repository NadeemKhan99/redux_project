import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { multiply, divide } from '../store/counterslice';
// import DisplayCounter from './counterdisplay'


const Multiply = () => {
    
    const dispatch = useDispatch()
    const multi = useSelector((state)=>{
        return state.multiplyer.multiByFive
    })
    
    return(
        <div>
            <hr/>
            Multiplying by 5 and Dividing by 5: {multi}
            <br/>
            <input type="button" value="Multiply by 5" onClick = {()=>dispatch(multiply())}/><br/><br/>
            <input type="button" value="Divide by 5" onClick = {()=>{dispatch(divide())}}/><br/><br/>
            
           

        </div>
    )
}

export default Multiply;