import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increament } from '../features/counter/counterSlice';

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count)
    
    return (
        <div >
            <h1>Counter app</h1>
            <h3>{count}</h3>
            <div style={{display:'flex', justifyContent:'center',gap:'10px'}}>
                <button onClick={()=> dispatch(decrement(5))}>-</button>
                <button onClick={()=> dispatch(increament(5))}>+</button>
            </div>
            
            
        </div>
    );
};

export default Counter;