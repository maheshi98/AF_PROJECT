import React, { Component } from 'react';
import './Gallery.css';
import avatar4 from 'url:~/src/Assets/staff.jpg';

class Gallery extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='portfolio' className='text-center'>
                <div className='container'>
                    <div className='section-title'>
                        <h2>Gallery</h2>
                        <p>Check out gallery from recent events</p>
                    </div>
                    <div className='portfolio-items'>
                        <div className='row'>

                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img
                                            src={avatar4}
                                            className='img-responsive'
                                            alt='Project Title'
                                            style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img
                                            src={avatar4}
                                            className='img-responsive'
                                            alt='Project Title'
                                            style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img
                                            src={avatar4}
                                            className='img-responsive'
                                            alt='Project Title'
                                            style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img
                                            src={avatar4}
                                            className='img-responsive'
                                            alt='Project Title'
                                            style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img
                                            src={avatar4}
                                            className='img-responsive'
                                            alt='Project Title'
                                            style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img
                                            src={avatar4}
                                            className='img-responsive'
                                            alt='Project Title'
                                            style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img
                                            src={avatar4}
                                            className='img-responsive'
                                            alt='Project Title'
                                            style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img
                                            src={avatar4}
                                            className='img-responsive'
                                            alt='Project Title'
                                            style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img
                                            src={avatar4}
                                            className='img-responsive'
                                            alt='Project Title'
                                            style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;

