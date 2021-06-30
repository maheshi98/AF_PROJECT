import React, { Component } from 'react';
import WorkshopDataService from '../../../Services/WorkshopService';
import { Table, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class workshops extends Component {
    constructor(props) {
      super(props);
      //this.onChangeWorkshopTitle = this.onChangeWorkshopTitle.bind(this);
      //this.onChangeDate = this.onChangeDate.bind(this);
      //this.onChangeTime = this.onChangeTime.bind(this);
      this.getWorkshop = this.getWorkshop.bind(this);
      this.updateWorkshop = this.updateWorkshop.bind(this);
      this.deleteWorkshop = this.deleteWorkshop.bind(this);

      this.state = {
        workshops: [],
        
      };
    }

    componentDidMount() {
      this.getWorkshop();
      }

      getWorkshop(workshop) {
        WorkshopDataService.findByUserId(workshop.userId)
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


    /*  onChangeWorkshopTitle(e) {
        const workshopTitle = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentWorkshop: {
              ...prevState.currentWorkshop,
              workshopTitle: workshopTitle
            }
          };
        });
      }

      onChangeDate(e) {
        const date = e.target.value;
        
        this.setState(prevState => ({
          currentWorkshop: {
            ...prevState.currentWorkshop,
            date: date
          }
        }));
      }

      onChangeTime(e) {
        const time = e.target.value;
        
        this.setState(prevState => ({
          currentWorkshop: {
            ...prevState.currentWorkshop,
            time: time
          }
        }));
      }

    getWorkshop(id) {
        WorkshopDataService.get(id)
          .then(response => {
            this.setState({
              currentWorkshop: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }*/

      updateWorkshop() {
        WorkshopDataService.update(
          this.state.currentWorkshop.id,
          this.state.currentWorkshop
        )
          .then(response => {
            console.log(response.data);
            this.setState({
              message: "The Workshop was updated successfully!"
            });
          })
          .catch(e => {
            console.log(e);
          });
      }

     deleteWorkshop() {    
     WorkshopDataService.delete(this.state.currentWorkshop.id)
         .then(response => {
         console.log(response.data);
           this.props.history.push('/workshop')
          })
         .catch(e => {
          console.log(e);
        });
     }
     render() {
      const { workshops } = this.state;
    
        return (
            <div className="container">
              <Link to='/add-workshop'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Back</Button></Link>
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
                                    <td>{workshop.id}</td>
                                      <td>{workshop.workshopTitle}</td>
                                      <td>{workshop.date}</td>
                                      <td>{workshop.time}</td>
                                      <td>{workshop.mobileNo}</td>
                                      <td>{workshop.email}</td>
                                      <td>{workshop.fileLink}</td>
                                      <td>{workshop.status}</td>
                                      <td><Button type="Delete">Delete</Button></td>
                                      <td/>
                                  </tr>
                              ))
                          }
                      </tbody>
                  </Table>
               </div>  
          );
                        }
    }
    
