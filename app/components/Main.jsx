import React from 'react';
import Nav from 'Nav';

class Main extends React.Component{
    render(){
        return(
            <div>
                <Nav></Nav>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-xs-offset-3">
                            <div>{this.props.children}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;