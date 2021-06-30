import React, { Component } from 'react';
import WorkshopService from '../../../Services/WorkshopService';
import { Table, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './workshopList.css';

export default class workshopList extends Component {
  constructor(props) {
    super(props);
    this.retrieveWorkshops = this.retrieveWorkshops.bind(this);
    this.approval = this.approval.bind(this);
    this.decline = this.decline.bind(this);
    //this.refreshList = this.refreshList.bind(this);
    //this.setActiveWorkshop = this.setActiveWorkshop.bind(this);

    this.state = {
      workshops: [],
      //currentWorkshop: null,
      //currentIndex: -1
    }
  }

  componentDidMount() {
    this.retrieveWorkshops();
  }

  /*retrieve all workshops*/
  retrieveWorkshops() {
    WorkshopService.getAll()
      .then(response => {
        this.setState({
          workshops: response.data
        });
        //console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  /*  refreshList() {
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
    }*/

    approval(workshop){
      let updatedWorkshop = workshop;
      updatedWorkshop.status = "Approved";

      WorkshopService.update(updatedWorkshop)
      .then(res => this.retrieveWorkshops())
      .catch(err => console.log(err));
    }

    decline(workshop){
      let updatedWorkshop = workshop;
      updatedWorkshop.status = "Rejected";

      WorkshopService.update(updatedWorkshop)
     .then(res => this.retrieveWorkshops())
      .catch(err => console.log(err));
    }

  render() {
    const { workshops } = this.state;

    return (
      <div className="container">
        <Link to='/review'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Back</Button></Link>
        <br />
        <h1>Workshop Details</h1>
        <Table striped bordered hover>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>#</th>
              <th>Workshop Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>MobileNo</th>
              <th>Email</th>
              <th>Proposal URI</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              workshops.map((workshop) => (
                <tr key={workshop._id}>
                  <td>{workshop.userId}</td>
                  <td>{workshop.workshopTitle}</td>
                  <td>{workshop.date}</td>
                  <td>{workshop.time}</td>
                  <td>{workshop.mobileNo}</td>
                  <td>{workshop.email}</td>
                  <td>{workshop.fileLink}</td>
                  <td>{workshop.status}</td>
                  <td><Button type="Approve" onClick={()=>{this.approval(workshop)}}>Approve</Button>
                  {' '} <br/><br/> <Button type="Decline" variant="danger" onClick={()=>{this.decline(workshop)}}>Decline</Button>{' '}</td>
                  <td />
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
}