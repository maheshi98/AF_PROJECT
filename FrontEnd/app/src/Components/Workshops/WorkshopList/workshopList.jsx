import React, { Component } from 'react';
import WorkshopService from '../../../Services/WorkshopService';
import { Link } from "react-router-dom";

export default class workshopList extends Component {
    constructor(props) {
      super(props);
      this.retrieveWorkshops = this.retrieveWorkshops.bind(this);
      this.setActiveWorkshop = this.setActiveWorkshop.bind(this);

      this.state = {
        workshops: [],
        currentWorkshop: null,
        currentIndex: -1,
        searchTitle: ""
      }
    }

    componentDidMount() {
        this.retrieveWorkshops();
      }

      retrieveWorkshops() {
        WorkshopService.getAll()
          .then(response => {
            this.setState({
              workshops: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

      setActiveWorkshop(workshop, index) {
        this.setState({
          currentWorkshop: workshop,
          currentIndex: index
        });
      }
      
  render() {
    const { workshops, currentWorkshop, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3"></div></div>
        <div className="col-md-6">
          <h4>Workshops List</h4>
        <ul className="list-group">
            {workshops &&
              workshops.map((workshop, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveWorkshop(workshop, index)}
                  key={index}
                >
                  {workshop.title}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Workshop</h4>
              <div>
                <label>
                  <strong>WorkshopTitle:</strong>
                </label>{" "}
                {currentWorkshop.title}
              </div>
              <div>
                <label>
                  <strong>MobileNo:</strong>
                </label>{" "}
                {currentWorkshop.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentWorkshop.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/tutorials/" + currentTutorial.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}