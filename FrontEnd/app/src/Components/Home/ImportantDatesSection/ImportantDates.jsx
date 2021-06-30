import React, { Component } from 'react';
import './ImportantDates.css';
import { getAllImportantDateFn } from '../../../BizLogic';
import Error from '../../NotFound/NotFound';

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

    /**
     * @description This method retrieve all Important Dates
     * @memberof ImportantDates
     */
    getAllImportantDates() {
        const callbackFn = (result) => {
            const { data, error } = result;
            if (data) {
                this.setState({ dates: data });
            }
            if (error) {
                console.log(error);
            }
        }
        {/** Calling function to retrieve data */ }
        getAllImportantDateFn(callbackFn);
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
                            this.state.dates.length > 0 ? this.state.dates.map((item, index) => (
                                <div className='col-md-4'>
                                    <div className='date'>
                                        <div className='date-content'>
                                            <h3>{item.description}</h3>
                                            <p>Hellow world submit document here.</p>
                                            <div className='date-meta'>{item.date}</div>
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
        )
    }
}

export default ImportantDates;

