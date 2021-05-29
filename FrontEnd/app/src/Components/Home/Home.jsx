import React, { Component } from 'react';
import MainSection from './MainSection/MainSection';
import AboutSection from './AboutSection/AboutSection';
import PaperTopicsSection from './PaperTopicsSection/PaperTopics';
import MapSection from './MapSection/Map';
import './HomeStyles.css';

export default class Home extends Component {
    render() {
        //let btn_class = "textColor";
        return (
            <div>
                <MainSection />
                <AboutSection />
                <PaperTopicsSection />
                <MapSection />
            </div>
        )
    }
}