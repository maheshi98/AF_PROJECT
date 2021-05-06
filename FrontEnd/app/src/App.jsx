import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/Home';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() { }
    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }
    componentWillUnmount() { }
    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() { }
    // Class Properties (Stage 3 Proposal)
    // handler = () => { this.setState() }
    render() {
        return (
            <div>
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={HomePage} />
                        </Switch>
                    </BrowserRouter>
                </div>
                <br />
                <div>
                    <footer> <hr /> <h1>@Copyright© 2020</h1> </footer>
                </div>
            </div>
        )
    }
}