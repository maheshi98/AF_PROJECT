import React, { Component } from 'react';
import MainSection from './MainSection/MainSection';
import AboutSection from './AboutSection/AboutSection';
import ImportantDatesSection from './ImportantDates/ImportantDates';
import KeyNoteSpeakerSection from './KeyNoteSpeaker/KeyNoteSpeaker';
import PaperTopicsSection from './PaperTopicsSection/PaperTopics';
import MapSection from './MapSection/Map';
import './HomeStyles.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <MainSection />
                <AboutSection />
                <ImportantDatesSection />
                <KeyNoteSpeakerSection />
                <PaperTopicsSection />
                <MapSection />
            </div>
        )
    }
}