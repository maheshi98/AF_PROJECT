import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardDeck, Card, Button, CardColumns, Row, Col, Image } from 'react-bootstrap';
import conf from 'url:~/src/Assets/conf.png';
import './ConferenceDetails.css';
import PageTitle from '../../PageTitle/PageTitle';
import { getConferenceByIdFn } from '../../../BizLogic';

const initialState = {
    conferenceDetails: {
        confId: '',
        confTopic: '',
        confDate: '',
        confDescription: '',
        researchPapers: [],
        workshops: []
    }
}
export default class ConferenceDetails extends Component {
    constructor(props) {
        super(props);
        // this.getAllApprovedConference = this.getAllApprovedConference.bind(this);
        this.getConference = this.getConference.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        this.getConference(this.props.match.params.id);
    }

    /**
    * @description This method retrieve Conference details
    * @memberof ConferenceDetails
    */
    getConference = (id) => {
        getConferenceByIdFn(id).then(response => {
            this.setState({
                conferenceDetails: response
            })
        })
            .catch(e => {
                consol.log(e);
            })

        console.log("id of conference", this.state.conferenceDetails);
    }


    getAllWorkshops = () => {
        axios.get('http://localhost:8080/workshop/')
            .then(response => {
                this.setState({ categories: response.data.data }, () => {
                    let data = [];
                    this.state.categories.map((item, index) => {
                        let category = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(category)
                    });
                    this.setState({ category_options: data });
                })
            })
    }

    /**
    * @description This method retrieve all approved Conference
    * @memberof ConferenceDetails
    */
    // getAllApprovedConference() {
    //     const callbackFn = (result) => {
    //         const { data, error } = result;
    //         console.log("data", data);
    //         if (data) {
    //             this.setState({ approvedConferences: data });
    //         }
    //         if (error) {
    //             console.log(error);
    //         }
    //     }
    //     {/** Calling function to retrieve data */ }
    //     getApprovedConferenceFn(callbackFn);
    // }

    render() {
        console.log("conference details", this.state.conferenceDetails);
        return (
            <div>
                <PageTitle title="CONFERENCE DETAILS" />
                <div className="">
                    <div id='conference'>
                        <Row>
                            <Col>
                                <div style={{ marginLeft: 150, marginTop: 30 }}>
                                    <h4>{this.state.conferenceDetails.confTopic}</h4>
                                    <h5>{this.state.conferenceDetails.confDate}</h5>
                                    <p style={{ fontSize: 18, fontFamily: "revert" }}>{this.state.conferenceDetails.confDescription}</p>
                                    <div class="text-center">
                                        <Link to='/register'> <Button style={{ marginBottom: 0 }} variant="primary" >Register Now</Button></Link>
                                    </div>
                                    <h5></h5>
                                </div>
                            </Col>
                            <Col >
                                <Image src={conf} thumbnail style={{ border: "none", width: 500, height: 500, marginLeft: 70, marginTop: -80 }} />
                            </Col>
                        </Row>
                        <hr />
                        <div className="container">
                            <div className='section-title text-center'>
                                <h3>Publications</h3>
                            </div>
                            <hr />
                            <div className='section-title text-center'>
                                <h3>Workshops</h3>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </div>
        );
    }
}