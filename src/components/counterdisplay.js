import React from 'react';
import { useSelector } from 'react-redux';

const DisplayCounter = () =>{

    const counter = useSelector((state)=>{
        return state.counter.count
    })

    return(
        <div>
            From second Viewer: {counter}
        </div>
    )
}

export default DisplayCounter;