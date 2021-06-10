import React, { Component } from 'react';
import './ImportantDates.css';
import ImportantDateService from '../../../Services/ImportantDate';


class ImportantDates extends Component {
    constructor(props) {
        super(props)
        this.getAllImportantDates = this.getAllImportantDates.bind(this);

        this.state = {
            dates: []
        }
    }

    componentDidMount() {
        this.getAllImportantDates();
    }

    getAllImportantDates() {
        ImportantDateService.getAll().then(response => {
            this.setState({
                dates: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div id='dates'>
                <div className='container'>
                    <div className='section-title text-center'>
                        <h2>Important Dates</h2>
                    </div>
                    <div className='row'>
                        {
                            this.state.dates ? this.state.dates.map((item, index) => (
                                <div className='col-md-4'>
                                    <div className='date'>
                                        <div className='date-content'>
                                            <p>{item.description}</p>
                                            <div className='date-meta'>{item.date}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                            ) :
                                <div>
                                    Dates not found
                             </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ImportantDates;

