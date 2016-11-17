import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

class Countdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.countdownStatus !== prevState.countdownStatus){
            switch(this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;

            }
        }
    }
    startTimer(){
        this.timer = setInterval(()=>{
            var newCount = this.state.count - 1;
            this.setState({
               count: newCount
            });
            if(newCount===0){
                clearInterval(this.timer);
                this.setState({
                   countdownStatus: 'stopped'
                });
            }
        }, 1000);
    }
    handleSetCountdown(seconds){

        var component = this;

        component.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    }
    render(){
        return(
            <div>
                <Clock totalSeconds={this.state.count}></Clock>
                <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)}></CountdownForm>
            </div>
        );
    }
}

export default Countdown;