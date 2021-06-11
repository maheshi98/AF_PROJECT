import React, { Component } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import avatar1 from 'url:~/src/Assets/avatar1.jpg';
import avatar5 from 'url:~/src/Assets/avatar5.jpg';
import avatar3 from 'url:~/src/Assets/avatar3.jpg';
import avatar4 from 'url:~/src/Assets/avatar4.jpg';
import './KeyNoteSpeaker.css';


class KeyNoteSpeakers extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div id='speakers'>
                <div className='container'>
                    <div className='section-title text-center'>
                        <h2>Key Note Speakers</h2>
                        <p>Introducing the names speaking at Technology Conference 2021:</p>
                    </div>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" style={{ height: 300 }} src={avatar1} />
                            <Card.Body>
                                <Card.Title>Card Name</Card.Title>
                                <Card.Text>job </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" style={{ height: 300 }} src={avatar5} />
                            <Card.Body>
                                <Card.Title>Card Name</Card.Title>
                                <Card.Text>job </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" style={{ height: 300 }} src={avatar3} />
                            <Card.Body>
                                <Card.Title>Card Name</Card.Title>
                                <Card.Text>job </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" style={{ height: 300 }} src={avatar4} />
                            <Card.Body>
                                <Card.Title>Card Name</Card.Title>
                                <Card.Text>job </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        )
    }
}

export default KeyNoteSpeakers;

