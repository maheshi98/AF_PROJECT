import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Keynotes from './Components/Keynotes/Keynotes';
import Conference from './Components/Conference/Conference';
import ConferenceDetails from './Components/Conference/ConferenceDetails/ConferenceDetails';
import Committee from './Components/Committee/Committee';
import PastProceedings from './Components/PastProceedings/PastProceedings';
import addWorkshop from './Components/Workshops/AddWorkshop/addWorkshop';
import workshopList from './Components/Workshops/WorkshopList/workshopList';
//TODO: remove if no need
import ConferenceAdmin from './Components/Editor/ViewConference/ViewConference';
import CreateConference from './Components/Editor/CreateConference/CreateConference';
import UploadResearch from './Components/ResearchPaper/UploadResearch';
import Contact from './Components/ContactUs/Contact';
import Payment from './Components/Payment/Payment';
import ReviewerDashboard from './Components/Reviewer/ReviewerDashboard';
import ReviewTable from './Components/Reviewer/ReviewTable';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
 
    render() {
        return (
            <div className= "body">
                <NavBar />
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/keynotes' component={Keynotes} />
                        <Route exact path='/conference' component={Conference} />
                        <Route exact path='/conference-details/:id' component={ConferenceDetails} />
                        <Route exact path='/conference-admin' component={ConferenceAdmin} />
                        <Route exact path='/create-conference' component={CreateConference} />
                        <Route exact path='/committee' component={Committee} />
                        <Route exact path='/past-proceedings' component={PastProceedings} />
                        <Route exact path='/add-workshop' component={addWorkshop} />
                        <Route exact path='/add-research' component={ReviewTable} />
                        <Route exact path='/workshops' component={workshopList} />
                        <Route exact path='/research-paper' component={UploadResearch} />
                        <Route exact path='/contactUs' component={Contact} />
                        <Route exact path='/payment' component={Payment} />
                        <Route exact path='/review' component={ReviewerDashboard} />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}