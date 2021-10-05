import React from 'react';
import Multiply from './secondcounter'
import { useSelector } from 'react-redux';

const DisplayCounter = () =>{

    const counter = useSelector((state)=>{
        return state.counter.count
    })

    return(
        <div>
            From second Viewer: {counter}
            <Multiply />
        </div>
    )
}

export default DisplayCounter;