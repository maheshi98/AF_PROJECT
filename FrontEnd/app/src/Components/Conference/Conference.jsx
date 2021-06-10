import React, { Component } from 'react';
import './Conference.css';
import { CardDeck, Card } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';

export default class Conference extends Component {

    render() {
        return (
            <div>
                <PageTitle title="CONFERENCE" />
                <div className="container">
                    <div id='conference'>
                        <div className='container'>
                            <div className='section-title text-center'>
                                <h2>Conference Details</h2>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                            dapibus leonec. </p>
                            </div>
                            <CardDeck>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Card Name</Card.Title>
                                        <Card.Text>job </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Card Name</Card.Title>
                                        <Card.Text>job </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Card Name</Card.Title>
                                        <Card.Text>job </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Card Name</Card.Title>
                                        <Card.Text>job </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}