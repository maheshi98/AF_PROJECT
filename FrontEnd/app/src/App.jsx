import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

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
            <div className= "body">
                <NavBar />
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/register' component={Register}/>
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}