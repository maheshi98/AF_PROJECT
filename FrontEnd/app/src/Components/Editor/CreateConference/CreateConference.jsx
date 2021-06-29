import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Row, Col, Button, Form, Image, Alert } from 'react-bootstrap';
import add from 'url:~/src/Assets/add_new.png';
import './CreateConference.css';
import { createConferenceFn, getAllImportantDateFn } from '../../../BizLogic'; //TODO: get papers & workshops

import axios from 'axios';

const initialState = {
    confTopic: '',
    confDate: '',
    confDescription: '',
    approveStatus: "Pending",
    researchPapers: [],
    researchPapersOptions: [],
    selectedResearchPapers: [],
    workshops: [],
    workshopOptions: [],
    selectedWorkshops: []
}

export default class CreateConference extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getAllResearchPapers = this.getAllResearchPapers.bind(this);
        this.getAllWorkshops = this.getAllWorkshops.bind(this);
        this.onResearchPapersSelect = this.onResearchPapersSelect.bind(this);
        this.onWorkshopsSelect = this.onWorkshopsSelect.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        this.getAllResearchPapers();
        this.getAllWorkshops();
    }

    /**
     * @description Retrieve all Research Papers to select
     * @memberof CreateConference
     */
    getAllResearchPapers = () => {
        // const callbackFn = (result) => {
        //     const { data, error } = result;
        //     if (data) {
        //         this.setState({ researchPapers: data }, () => {
        //             let paperTitle = [];
        //             this.state.researchPapers.map((item, index) => {
        //                 let researchPapersTitle = {
        //                     value: item._id,
        //                     label: item.date
        //                 }
        //                 paperTitle.push(researchPapersTitle)
        //             });
        //             this.setState({ researchPapersOptions: paperTitle });
        //         });
        //     }
        //     if (error) {
        //         console.log(error);
        //     }
        // }
        // getAllImportantDateFn(callbackFn); //FIXME:

        axios.get('http://localhost:8080/researchers/showResearch')
            .then(response => {
                this.setState({ researchPapers: response.data }, () => {
                    let data = [];
                    this.state.researchPapers.map((item, index) => {
                        let researchPaper = {
                            value: item.id,
                            label: item.title,
                            name: item.name,
                            status: item.status
                        }
                        data.push(researchPaper)
                    });
                    this.setState({ researchPapersOptions: data });
                })
            })
    }

    /**
    * @description Retrieve all Workshops to select
    * @memberof CreateConference
    */
    getAllWorkshops = () => {
        const callbackFn = (result) => {
            const { data, error } = result;
            if (data) {
                this.setState({ workshops: data }, () => {
                    let workshopTitle = [];
                    this.state.workshops.map((item, index) => {
                        let workshopsTitle = {
                            value: item.name,
                            label: item.date
                        }
                        workshopTitle.push(workshopsTitle)
                    });
                    this.setState({ workshopOptions: workshopTitle });
                });
            }
            if (error) {
                console.log(error);
            }
        }
        getAllImportantDateFn(callbackFn); //FIXME:

        // axios.get('http://localhost:8080/workshop/')
        //     .then(response => {
        //         this.setState({ workshops: response.data }, () => {
        //             let data = [];
        //             this.state.categories.map((item, index) => {
        //                 let category = {
        //                     value: item._id,
        //                     label: item.name
        //                 }
        //                 data.push(category)
        //             });
        //             this.setState({ category_options: data });
        //         })
        //     })
    }

    /**
    * @description Change state to input values
    * @memberof CreateConference
    */
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    /**
    * @description Add selected Research papers
    * @memberof CreateConference
    */
    onResearchPapersSelect = (e) => {
        this.setState({ selectedResearchPapers: e ? e.map(item => item) : [] });
    }

    /**
    * @description Add selected Workshops
    * @memberof CreateConference
    */
    onWorkshopsSelect = (e) => {
        this.setState({ selectedWorkshops: e ? e.map(item => item.value) : [] });
    }

    /**
     * @description Add new conference details
     * @memberof CreateConference
     */
    onSubmit = (e) => {
        e.preventDefault();
        let conference = {
            confTopic: this.state.confTopic,
            confDate: this.state.confDate,
            confDescription: this.state.confDescription,
            researchPapers: this.state.selectedResearchPapers,
            approveStatus: this.state.approveStatus
        };
        console.log("CONFERENCE REQUEST TO CREATE: ", conference);
        createConferenceFn(conference);
    }

    render() {

        console.log("research papers", this.state.researchPapersOptions)
        return (
            <div className=''>
                <div id='createConference'>
                    <div className='section-title text-center'>
                        <h3>Create Conference</h3>
                    </div>
                    <Row className="landing">
                        <Col >
                            <Image src={add} thumbnail style={{ border: "none", width: 550, height: 550, marginLeft: 150, marginTop: 0 }} />
                        </Col>
                        <Col >
                            <Form onSubmit={this.onSubmit} style={{ width: "80%" }}>
                                <Form.Group >
                                    <Form.Label>Conference Topic</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="confTopic"
                                        name="confTopic"
                                        placeholder="Conference Topic"
                                        value={this.state.confTopic}
                                        onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Conference Date</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="confDate"
                                        name="confDate"
                                        placeholder="Conference Date"
                                        value={this.state.confDate}
                                        onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Conference Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="confDescription"
                                        name="confDescription"
                                        placeholder="Conference Description"
                                        value={this.state.confDescription}
                                        onChange={this.onChange}
                                        as="textarea"
                                        rows={3}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    Select Research Papers<br />
                                    <Select
                                        options={this.state.researchPapersOptions}
                                        onChange={this.onResearchPapersSelect}
                                        className="basic-multi-select"
                                        isMulti
                                    />
                                </Form.Group>
                                <Form.Group>
                                    Select Workshops<br />
                                    <Select
                                        options={this.state.workshopOptions}
                                        onChange={this.onWorkshopsSelect}
                                        className="basic-multi-select"
                                        isMulti
                                    />
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Button type="submit" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Submit</Button> {''}
                                    <Link to='/conference-admin'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Go Back</Button></Link>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </div >
            </div >
        );
    }
}