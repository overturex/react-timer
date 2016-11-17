import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Home from 'Home';
import Timer from 'Timer';
import Countdown from 'Countdown';

import 'style!css!bootstrap/dist/css/bootstrap.min.css';
import 'style!css!font-awesome/css/font-awesome.min.css';
import 'style!css!sass!AppStyles';

class App extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="timer" component={Timer}></Route>
                    <Route path="countdown" component={Countdown}></Route>
                </Route>
            </Router>
        );
    }
}

ReactDOM.render(<App></App>, document.querySelector('#app'));