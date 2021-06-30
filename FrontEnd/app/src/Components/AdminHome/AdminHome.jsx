import React, { Component } from 'react'
import ViewConference from '../Editor/ViewConference/ViewConference'
import ConferenceDetails from '../Conference/ConferenceDetails/ConferenceDetails'
import { Card } from 'react-bootstrap'
import workshopList from '../Workshops/WorkshopList/workshopList'
import './AdminHome.css';


export default class Adminhome extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <div className='section-title text-center'>
                <h4> Admion Dashborad
                </h4>
                <div className="container">
                
                <Card className="center-col">
                <ViewConference/>
                </Card>
            
            </div>
            </div>
            
        )
    }
}
