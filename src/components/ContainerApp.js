import React, { Component } from 'react';

class ContainerApp extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <main>
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </main>
        );
    }
}

export default ContainerApp;