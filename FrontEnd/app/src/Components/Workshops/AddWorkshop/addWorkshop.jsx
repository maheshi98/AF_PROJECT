import React, { Component } from 'react';
import WorkshopDataService from '../../../Services/WorkshopService';
import { Row } from 'react-bootstrap';
import './addWorkshops.css';


const initialState = {
    _id: null,
     userId: null,
     workshopTitle: "",
     date: "",
     time: "",
     mobileNo: "",
     email: "",
     proposal: "",
     fileLink: "",
     status: "",
     submitted: false
}

export default class addWorkShop extends Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = initialState;
    }
       
        onChange(e) {
            this.setState({ [e.target.name]: e.target.value })
        }

        saveWorkshop() {
            var data = {
              workshopTitle: this.state.workshopTitle,
              date: this.state.date,
              time: this.state.time,
              mobileNo: this.state.mobileNo,
              email: this.state.email,
              date: this.state.date,

            };

        WorkshopDataService.create(data).then(response => {
        this.setState({
          id: response.data.id,
          workshopTitle: response.data.workshopTitle,
          date: response.data.date,
          time: response.data.time,
          mobileNo: response.data.mobileNo,
          email: response.data.email,
          approved: response.data.approved,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
    
    render() {
        return (
            <div className='container'>
              <div id='createWorkshop'>
              <div className='section-title text-center'>
              <h4>Add Your Workshop proposal</h4>
              </div>
              <Row className="landing">
                    <form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
                      <div className="input_field"> 
                        <input 
                        type="text" 
                        name="workshopTitle" 
                        placeholder="workshopTitle" required 
                        value ={this.state.workshopTitle}
                        onChange={this.onChange}/>
                      </div>
                      <div className="input_field"> 
                        <input 
                        type="text" 
                        name="date" 
                        placeholder="Date" required 
                        value ={this.state.date}
                        onChange={this.onChange} />
                      </div>
                      <div className="input_field"> 
                        <input 
                        type="text" 
                        name="time" 
                        placeholder="Time" required 
                        value ={this.state.time}
                        onChange={this.onChange}/>
                      </div>
                        <div className="input_field"> 
                         <input 
                         type="number" 
                         name="mobileNo" 
                         placeholder="MobileNumber" required 
                         value ={this.state.mobileNo}
                         onChange={this.onChange}/>
                          </div>
                      <div className="input_field">
                          <input 
                          type="text" 
                          name="email" 
                          placeholder="Email" required 
                          value ={this.state.email}
                          onChange={this.onChange} />
                          </div>  
                          <button onClick={this.saveWorkshop} className="btn btn-success">Submit </button>
                    </form>
                  </Row>
                </div>
              </div>
            )
        }
}