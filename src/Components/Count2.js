import React, { useContext } from 'react';
import { CountContext } from './Context';

function Count2()
{
    const {count,setCount} = useContext(CountContext);

    return (
        <div className="Count2">
            <CountContext.Consumer>
                {({count, setCount}) =>(<>
                        <button onClick={() => setCount(count+1)}>
                            Push me
                        </button> 
                        <span>:{count}</span>
                    </>)}
            </CountContext.Consumer>
          
        </div>
    );

}


export default Count2;