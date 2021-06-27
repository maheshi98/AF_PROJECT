import React, { Component } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import './PastProceedings.css';
import logo from 'url:~/src/Assets/new.png';

class PastProceedings extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        const details = [
            {
                link: "/",
                text: "Home",
                details: []
            },
            {
                link: "/keynotes",
                text: "Keynotes",
                details: []
            }
        ]

        return (
            <div>
                <PageTitle title="PAST PROCEEDINGS" />
                <div className='container'>
                    <div id='past'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            {/* <Sonnet /> */}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            {/* <Sonnet /> */}
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default PastProceedings;