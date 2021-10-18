import React from 'react'

class Apitest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            quote : '',
            error : ''
        }
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_QUOTES_API_URL)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        quote: result
                    });
                },
                (error) => {
                    this.setState({error});
                }
            )
        console.error(this.state.error);
    }

    render() {


        return (
            <div className="Apitest">
                <q>
                    {this.state.quote.content}
                    <i> ~ {this.state.quote.author}</i>
                </q>
            </div>
        );
    }

}


export default Apitest;