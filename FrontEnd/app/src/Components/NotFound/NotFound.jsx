import React, { Component } from 'react';
import error from 'url:~/src/Assets/error.png';

export default class NotFound extends Component {

    render() {
        return (
            <div className="container" style={{}}>
                <img
                    className="center"
                    src={error}
                    alt="NotFound"
                    style={{ width: 400, height: 400, top: 0, bottom: 0, right: 0, left: 0 }}
                />
            </div>
        );
    }
}