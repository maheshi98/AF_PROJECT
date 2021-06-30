import React, { Component } from 'react';
import { Tab, Tabs, Row, Col, Nav } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import ResearchPaper from './ResearchPapers/ResearchPaper';
import Workshop from './Workshops/Workshop';
import logo from 'url:~/src/Assets/new.png';

class PastProceedings extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <PageTitle title="PAST PROCEEDINGS" />
                <div className='container'>
                    <div className="container">
                        <h5 style={{textAlign:"center"}}>Here, you can download the past conference Research Papers and Workshop submissions.</h5>
                        <div id='conference'>
                            <div className='container'>
                                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" variant="tabs">
                                    <Tab eventKey="home" title="Research Papers">
                                        <ResearchPaper />
                                    </Tab>
                                    <Tab eventKey="profile" title="Workshops">
                                        <Workshop />
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PastProceedings;