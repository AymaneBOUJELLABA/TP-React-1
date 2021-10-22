import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, selectValue } from './counterSlice';

function Counter()
{
    const count = useSelector(selectValue);
    const dispatch = useDispatch();
    
    return (
        <div className="CounterRedux">
            <button onClick={() => dispatch(incrementCounter())}>Click Me IM REDUX</button>
            <span>: {count}</span>
        </div>
    );
}

export function Reduxpage(){
    return (
        <div className="Redux">
            <Counter/>
            <Counter/>
        </div>
    );
}

export default Counter;