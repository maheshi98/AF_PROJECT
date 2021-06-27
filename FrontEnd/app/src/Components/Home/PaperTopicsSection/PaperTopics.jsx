import React, { Component } from 'react';
import './PaperTopicsStyles.css';
import Error from '../../NotFound/NotFound';

export default class MainSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div id='topics'>
                <div className='container'>
                    <div className='section-title text-center'>
                        <h2>Submission Topics</h2>
                        <p>Papers can be submitted to the conference under the following regular tracks</p>
                    </div>
                    <div className='row'>
                        {
                            this.state.dates ? this.state.dates.map((item, index) => (
                                <div className='col-md-4'>
                                    <div className='topic'>
                                        <div className='topic-content'>
                                            <h3>{item.description}</h3>
                                            <p>Hellow world submit document here.</p>
                                            <div className='topic-meta'>{item.date}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                            ) :
                                <div>
                                    <Error />
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}