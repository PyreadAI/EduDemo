import * as React from "react";
// import axios from 'axios';
import * as ReactDOM from "react-dom";
export class MainContainer extends React.Component<{compiler:string}, any> {
    constructor(props:{compiler:string}) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (<div>this container</div>)
    }
}


