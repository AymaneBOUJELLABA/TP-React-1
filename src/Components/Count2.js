import React, { useContext } from 'react';
import { CountContext } from './Context';

function Count2()
{
    const {count,setCount} = useContext(CountContext);

    return (
        <div className="Count2">
            <button onClick={() => setCount(count+1)}>
                Push me
            </button> 
            <span>:{count}</span>
        </div>
    );

}


export default Count2;