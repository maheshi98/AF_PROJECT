import React, { Component } from 'react';
import Select from 'react-select';
import './CreateConference.css';
import { Row, Col, Button, Form, Image } from 'react-bootstrap';
import add from 'url:~/src/Assets/add.png';
import { getAllImportantDateFn } from '../../../../BizLogic';

const initialState = {
    confTopic: '',
    confDate: '',
    confDescription: '',
    researchPapers: [],
    researchPapersOptions: [],
    selectedResearchPapers: [],
    workshops: [],
    workshopOptions: [],
    selectedWorkshops: []
}

export default class ViewConference extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.getAllImportantDates = this.getAllImportantDates.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        this.getAllImportantDates();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    /**
     * @description This method retrieve all Important Dates
     * @memberof ImportantDates
     */
    getAllImportantDates() {
        const callbackFn = (result) => {
            const { data, error } = result;
            if (data) {
                this.setState({ dates: data }, () => {
                    let info = [];
                    this.state.researchPapers.map((item, index) => {
                        let researchPapers = {
                            value: item._id,
                            label: item.date
                        }
                        info.push(researchPapers)
                    });
                    this.setState({ researchPapersOptions: info });
                });
            }
            if (error) {
                console.log(error);
            }
        }
        getAllImportantDateFn(callbackFn);
    }

    // private String confId;
    // private String confTopic;
    // private String confDate;
    // private String confDescription;
    // private ConferenceSession conferenceSession;
    // private Boolean approveStatus;

    render() {
        return (
            <div className='container'>
                <div id='createConference'>
                    <div className='section-title text-center'>
                        <h3>Create Conference</h3>
                    </div>
                    <Row className="landing">
                        <Col >
                            <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
                                <Form.Group >
                                    <Form.Label>Conference Topic</Form.Label>
                                    <Form.Control type="text" placeholder="Conference Topic" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Conference Date</Form.Label>
                                    <Form.Control type="text" placeholder="Conference Date" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Conference Description</Form.Label>
                                    <Form.Control type="text" placeholder="Conference Description" />
                                </Form.Group>
                                <Form.Group>
                                    <Select
                                        options={this.state.researchPapersOptions}
                                        onChange={this.onCategorySelect}
                                        className="basic-multi-select"
                                        isMulti
                                    />
                                </Form.Group>
                                {/* <Form.Group>
                                    <Select
                                        options={this.state.category_options}
                                        onChange={this.onCategorySelect}
                                        className="basic-multi-select"
                                        isMulti
                                    />
                                </Form.Group> */}
                                <Form.Group>
                                    <Button type="submit" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Submit</Button> {''}
                                    <Button type="submit" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Cancel</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col >
                            <Image src={add} thumbnail style={{ border: "none" }} />
                        </Col>
                    </Row>
                </div >
            </div >
        );
    }
}