import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image, Alert,Card } from 'react-bootstrap';
import add from 'url:~/src/Assets/add.png';

export default class Contact extends Component {

    render() {
        return (

            <div className='container'>
                <div id='createConference'>
                    <div className='section-title text-center'>
                        <h3>Contact Us</h3>
                    </div>

            
  <Row className="landing">
     <Col >
                        
        <Card>
          <Card.Header as="h5">General Contacts</Card.Header>
            <Card.Body>
                    <Card.Text>
                        <Row> ICAF</Row>
                        <Row> ABC PLC,</Row>
                        <Row> Colombo 01,</Row>
                        <Row> Sri Lanka.</Row>
                        <Row> Telephone: +94 111 222 2222</Row>
                        <Row> Email: ABC@gmail.com</Row>
            
                    </Card.Text>
                   
            </Card.Body>
        </Card>


        <Row>
        <Card>
          <Card.Header as="h5">Customer Support(24X7)</Card.Header>
            <Card.Body>
                    <Card.Text>
                        <Row> Telephone: 1234</Row>
                        <Row> Email: ABC@gmail.com</Row>
            
                    </Card.Text>
                   
            </Card.Body>
        </Card>
        </Row>
    </Col>


    <Col >
                            <Image src={add} thumbnail style={{ border: "none" }} />
    </Col>
</Row>



</div>
</div>


        );
    }
}