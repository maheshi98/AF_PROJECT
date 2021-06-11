import React, { Component } from 'react';
import './Keynotes.css';
import KeyNoteSpeakers from '../Home/KeyNoteSpeaker/KeyNoteSpeaker';
import PageTitle from '../PageTitle/PageTitle';

export default class Conference extends Component {

    render() {
        return (
            <div>
                <PageTitle title="KEY NOTE SPEAKERS" />
                <div className="container">
                    <KeyNoteSpeakers />
                </div>
            </div>
        );
    }
}