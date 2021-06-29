import React, { Component } from 'react'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image, Alert , InputGroup} from 'react-bootstrap';
import add from 'url:~/src/Assets/add.png';
import './Payment.css';


export default class Payment extends Component {
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
            <div className='container'>
                <div id='createConference'>
                    <div className='section-title text-center'>
                        <h3>Payment</h3>
                    </div>
                    <Row className="landing">
                        <Col >
                        <Form.Group >
                                    <Form.Label>Payment Method</Form.Label>
                                    <Form.Control
                                        type="radio"
                                        id="confTopic"
                                        name="confTopic"
                                        placeholder="Conference Topic"
                                        value={this.state.confTopic}
                                        onChange={this.onChange} />
                                </Form.Group>

                            <Form onSubmit={this.onSubmit} style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
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
                                
                                <br />
                                <Form.Group>
                                    <Button type="submit" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Submit</Button> {''}
                                    <Link to='/conference-admin'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Go Back</Button></Link>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col >
                            <Image src={add} thumbnail style={{ border: "none" }} />
                        </Col>
                    </Row>
                </div >
            </div >
        )
    }
}
