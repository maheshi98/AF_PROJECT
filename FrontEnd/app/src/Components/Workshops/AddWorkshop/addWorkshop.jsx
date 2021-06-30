import React, { Component } from 'react';
import WorkshopDataService from '../../../Services/WorkshopService';
import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import './addWorkshops.css';
import imgworkshop from 'url:~/src/Assets/workshop1.png';
import imgworkshop1 from 'url:~/src/Assets/workshop2.png';


const initialState = {
  _id: null,
  userId: "",
  workshopTitle: "",
  date: "",
  time: "",
  mobileNo: 0,
  email: "",
  proposal: "",
  fileLink: "",
  status: "Pending",
  fileName: "",
  fileDownloadUri: "",
  fileType: "",
  size: "",
  selectedFiles: undefined,
  currentFile: undefined,
  progress: 0,
  message: "",

  fileInfos: [],
  submitted: false
}

export default class addWorkShop extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = initialState;
    this.saveWorkshop = this.saveWorkshop.bind(this);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
  }

 /* componentDidMount() {
    WorkshopDataService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  }*/
  
  componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  saveWorkshop() {
    var data = {
      userId: window.sessionStorage.getItem("UserId"),
      workshopTitle: this.state.workshopTitle,
      date: this.state.date,
      time: this.state.time,
      mobileNo: this.state.mobileNo,
      email: this.state.email,
      fileLink: this.state.fileDownloadUri,
      status: this.state.status

    };

    WorkshopDataService.create(data).then(response => {
      this.setState({
         userId: response.data.userId,
         id: response.data.id,
         workshopTitle: response.data.workshopTitle,
         date: response.data.date,
         time: response.data.time,
         mobileNo: response.data.mobileNo,
         email: response.data.email,
         //approved: response.data.approved,

         //submitted: true
      });
      console.log("response"+response.data);
    })
      .catch(e => {
        console.log(e);
      });
    }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });
    WorkshopDataService.upload(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          fileDownloadUri: response.data.fileDownloadUri,
          progress: 0,
          currentFile: undefined,
        });
        //return WorkshopDataService.getFiles();
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  }

  render() {
    const { selectedFiles, currentFile, progress, message, fileInfos } = this.state;
    return (
      <div className='container'>
        <div id='createWorkshop'>
          <div className='section-title text-center'>
            <h4>Add Your Workshop proposal here</h4>
          </div>
          <Row className="landing">
            <Col>
              <Form onSubmit={this.saveWorkshop} style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
                <Form.Group >
                  <Form.Label>Workshop Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="workshopTitle"
                    placeholder="workshopTitle" required
                    value={this.state.workshopTitle}
                    onChange={this.onChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="text"
                    name="date"
                    placeholder="Date" required
                    value={this.state.date}
                    onChange={this.onChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="text"
                    name="time"
                    placeholder="Time" required
                    value={this.state.time}
                    onChange={this.onChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="mobileNo"
                    placeholder="MobileNumber" required
                    value={this.state.mobileNo}
                    onChange={this.onChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Email" required
                    value={this.state.email}
                    onChange={this.onChange} />
                </Form.Group>
                <Form.Group>
                  {currentFile && (
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-info progress-bar-striped"
                        role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{ width: progress + "%" }} >
                        {progress}%
                      </div>
                    </div>
                  )}
                  <Form.Label>Proposal</Form.Label>
                  <Form.Control
                    type="file"
                    //value={this.state.fileDownloadUri}
                    onChange={this.selectFile} /><br />
                  <button className="btn btn-success" disabled={!selectedFiles} onClick={this.upload} >Upload</button>
                  <div className="alert alert-light" role="alert">{message}</div>
                </Form.Group>
                <Button type="submit" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Submit</Button> {''}
              </Form>
            </Col>
            <Col ><Row>
               <Image src={imgworkshop} thumbnail style={{ border: "none" }} /></Row>
               <Row><Image src={imgworkshop1} thumbnail style={{ border: "none" }} /></Row>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}