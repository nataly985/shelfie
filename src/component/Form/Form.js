import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();

        this.setState = {
            input = ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAddInput = this.handleAddInput.bind(this);
        this.handleCancelInput = this.handleCancelInput.bind(this);

    }
    handleChange(value) {
        this.setState({ input: value });
    }
    handleAddInput(value) {
        this.props.add(this.state.input);
        this.setState({ input: value})
    }
    handleCancelInput(value){
        this.props.cancel(this.state.input);
        this.setState( { input: value})
    }
    resetCancelButton = ()=>{
        this.state = this.baseState;
        this.setState(this.baseState)
    }

    // componentDidUpdate(){
    //     this.
    // }

    render() {
        return (
            <div>
                <Form />
                <div>
                    <input value={this.state.input}
                        onChange={(e) => this.handleChange(e.target.value)} type= 'text'/>
                    <input />
                    <button onClick={this.resetCancelButton}>Cancel</button>
                    <button onClick={this.handleAddInput}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;