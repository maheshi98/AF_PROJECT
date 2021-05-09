import React, { Component } from 'react';
import './AboutSectionStyles.css';

export default class MainSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false,
        }
    }

    componentDidMount() {
        this.setState({ isSelected: true })
    }

    render() {
        return (
            <div className="mainContainer">
                <h1>About ICAF 2021</h1>
                <p>The 3rd International conference on advancements in computing -2021 (ICAC2021)
                is organized by the Faculty of Computing of the Sri Lanka Institute of Information
                Technology (SLIIT) as an open forum for academics along with industry professionals
                to present the latest findings and research output and practical deployments in the
                Computer Science and Information Technology domains. Primary objective of the ICAC
                is to uplift the research culture and the quality of research done by Sri Lankan
                researchers. This conference will create a platform for national and international
                researchers to showcase their research output, networking opportunities to discuss
                innovative ideas, and initiate collaborative work. ICAC 2019 and ICAC 2020 were
                successfully conducted with a technical co-sponsorship by IEEE Sri Lanka Section
                and all publications are available in IEEE Xplore digital library</p>

                <h2>Venue</h2>
                <h2>Date</h2>
            </div>
        );
    }
}