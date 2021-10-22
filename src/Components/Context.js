import Count2 from "./Count2";
import React, { Component } from 'react';

export const CountContext = React.createContext({
    count : 0,
    setCount : () => {}
});

class Context extends Component
{
    setCount = count => {
        this.setState({ count });
      };
    constructor(props)
    {
        super(props);
        this.state = {
            count : 0,
            setCount : this.setCount
        }
    }
    render() { 
        return (  
            <div className="Context">
                <CountContext.Provider value={this.state}>
                    <Count2 />
                    <Count2 />
                </CountContext.Provider>
            </div>
        );
    }
}
 
export default Context;