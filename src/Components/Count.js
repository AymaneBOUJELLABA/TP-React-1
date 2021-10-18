import React, { useState } from 'react';

function Count()
{
    const [count,setCount] = useState(0);

    return (
        <div className="Count">
          <button onClick={() => setCount(count+1)}>Push me</button> <span>:{count}</span>
        </div>
    );

}


export default Count;