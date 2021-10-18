import React from 'react';

class Formulaire extends React.Component
{
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.inputRef2 = React.createRef();
        
        this.state = {
            msg1: '',
            msg2: ''
        } 
    }


    handleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({
            msg1: this.inputRef.current.value,
            msg2: this.inputRef2.current.value
        });
    }
    render () {
        return (
            <div className="Formulaire">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="inputRef" ref={this.inputRef}/>
                    <input type="text" name="inputRef" ref={this.inputRef2} />
    
                    <input type="submit" value="Submit" />
                </form>

                <div>
                    {this.state.msg1} , {this.state.msg2}
                </div>
            </div>
    
        );
    }
    
}

export default Formulaire;