import React, { Component } from 'react'
import './Userprofile.css';

export default class Userprofile extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
    <div class="row gutters-sm">
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
              <div className="mt-3">
                <h4>John Doe</h4>
                <p className="text-secondary mb-1">Full Stack Developer</p>
                <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                <button className="btn btn-primary">Log Out</button>
                <button className="btn btn-outline-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
    }
}
