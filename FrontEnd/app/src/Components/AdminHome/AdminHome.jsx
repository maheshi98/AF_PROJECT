import React, { Component } from 'react'
import ViewConference from '../Editor/ViewConference/ViewConference'
import workshopList from '../Workshops/WorkshopList/workshopList'
import ConferenceDetails from '../Conference/ConferenceDetails/ConferenceDetails'

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
            <div>
                <ViewConference/>
                <workshopList></workshopList>
              
            </div>
        )
    }
}
