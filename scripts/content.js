import * as React from 'react';

//pages
import { Socket } from './Socket';
import { Home } from './home';

//contains all pages rendered for scavenger hunt
export class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = { //essentially session vars, default values
        };
    }
    
    render(){
            return (
                <div>
                    <div id = 'home' style={{display:'none'}}>
                    </div>
                </div>
            );
    }
}