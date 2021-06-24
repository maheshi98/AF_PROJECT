import React, { Component } from 'react';
import './Committee.css';
import { Tabs, Tab, Fade } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import Keynotes from '../Keynotes/Keynotes';
import Not from '../NotFound/NotFound';

export default class Committee extends Component {

    render() {
        return (
            <div>
                <PageTitle title="COMMITTEE" />
                <div className="container">
                    <div id='conference'>
                        <div className='container'>
                            <div className='section-title text-center'>
                                <h2>Conference Details</h2>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                                    dapibus leonec. </p>
                            </div>
                            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" variant="tabs">
                                <Tab eventKey="home" title="Home">
                                    <Keynotes />
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    <Not />
                                </Tab>
                                <Tab eventKey="contact" title="Contact">
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}