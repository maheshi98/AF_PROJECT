import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { getApprovedConferenceFn } from '../../../BizLogic';

class Workshop extends Component {
    constructor(props) {
        super(props)
        this.getAllApprovedConference = this.getAllApprovedConference.bind(this);
        this.state = {
            approvedConferences: []
        }
    }

    componentDidMount() {
        this.getAllApprovedConference();
    }

    /**
    * @description This method retrieve all approved Conference
    * @memberof Workshop
    */
    getAllApprovedConference = () => {
        const callbackFn = (result) => {
            const { data, error } = result;
            console.log("data", data);
            if (data) {
                this.setState({ approvedConferences: data });
            }
            if (error) {
                console.log(error);
            }
        }
        {/** Calling function to retrieve data */ }
        getApprovedConferenceFn(callbackFn);
    }

    render() {
        console.log("workshops", this.state.approvedConferences)
        return (
            <div className='container'>
                {
                    this.state.approvedConferences.map(
                        conference =>
                            conference.researchPapers.map(
                                workshop =>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{workshop.label}</Card.Title>
                                            <Card.Title>Published By: {workshop.name}</Card.Title>
                                            <Card.Text>
                                                Download here: {''}
                                                <a href={workshop.link}>{workshop.link}</a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                            )
                    )
                }
            </div>
        );
    }
}

export default Workshop;