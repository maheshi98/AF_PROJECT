import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Keynotes from './Components/Keynotes/Keynotes';
import Conference from './Components/Conference/Conference';
import Committee from './Components/Committee/Committee';

//TODO: remove if no need
import ConferenceAdmin from './Components/Conference/ConferenceAdmin/ViewConference/ViewConference';
import CreateConference from './Components/Conference/ConferenceAdmin/CreateConference/CreateConference';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
 
    render() {
        return (
            <div>
                <NavBar />
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/keynotes' component={Keynotes} />
                        <Route exact path='/conference' component={Conference} />
                        <Route exact path='/conferenceAdmin' component={ConferenceAdmin} />
                        <Route exact path='/createConference' component={CreateConference} />
                        <Route exact path='/committee' component={Committee} />committee
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}