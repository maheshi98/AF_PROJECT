import React, { Component } from 'react';
import WorkshopService from '../../../Services/WorkshopService';
import { Link } from "react-router-dom";
import './workshopList.css';

export default class workshopList extends Component {
    constructor(props) {
      super(props);
      this.retrieveWorkshops = this.retrieveWorkshops.bind(this);
      this.refreshList = this.refreshList.bind(this);
      this.setActiveWorkshop = this.setActiveWorkshop.bind(this);

      this.state = {
        workshops: [],
        currentWorkshop: null,
        currentIndex: -1
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

      refreshList() {
        this.retrieveWorkshops();
        this.setState({
          currentWorkshop: null,
          currentIndex: -1
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
                  {workshop.workshopTitle}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentWorkshop ? (
            <div>
              <h4>Workshop</h4>
              <div>
                <label>
                  <strong>WorkshopTitle:</strong>
                </label>{" "}
                {currentWorkshop.workshopTitle}
              </div>
              <div>
                <label>
                  <strong>MobileNo:</strong>
                </label>{" "}
                {currentWorkshop.mobileNo}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentWorkshop.email}
              </div>
              <div>
                <label>
                  <strong>Date:</strong>
                </label>{" "}
                {currentWorkshop.date}
              </div>
              <div>
                <label>
                  <strong>Time:</strong>
                </label>{" "}
                {currentWorkshop.time}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentWorkshop.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/workshop/" + currentWorkshop.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Workshop...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}