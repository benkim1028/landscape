import React, {Component} from 'react';
import {MuiThemeProvider} from "material-ui";
import MyAwesomeReactComponent from "./MyAwesomeReactComponent";

export default class test extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <MyAwesomeReactComponent />
            </MuiThemeProvider>
        )
    }
}