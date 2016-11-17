import React from 'react';

class CountdownForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            seconds: ''
        }
    }
    onSubmit(e){
        e.preventDefault();
        if(this.state.seconds.match(/^[0-9]+$/)){
            this.props.onSetCountdown(parseInt(this.state.seconds));
            this.setState({seconds: ''});
        }
    }
    onChange(e){
        this.setState({seconds: e.target.value});
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className="countdown-form">
                    <input type="text" className="form-control" onChange={this.onChange.bind(this)} value={this.state.seconds} placeholder="Enter time in seconds" />
                    <button type="submit" className="btn btn-primary btn-block">start</button>
                </form>
            </div>
        );
    }
}

export default CountdownForm;