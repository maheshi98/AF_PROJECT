import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Badge } from 'react-bootstrap';
import { RiDeleteBin5Line } from "react-icons/ri"; 
import { FiEdit } from "react-icons/fi";
import Select from 'react-select';
import { getAllConferenceFn } from '../../../BizLogic';
import './ViewConference.css';

const initialState = {
    // confTopic: '',
    // confDate: '',
    // confDescription: '',
    // approveStatus: false,
    // researchPapers: [],
    // researchPapersOptions: [],
    // selectedResearchPapers: [],
    // workshops: [],
    // workshopOptions: [],
    conferences: []
}
export default class ViewConference extends Component {
    constructor(props) {
        super(props);
        this.getAllConference = this.getAllConference.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        this.getAllConference();
    }

    /**
    * @description This method retrieve all Conference
    * @memberof ViewConference
    */
    getAllConference = () => {
        const callbackFn = (result) => {
            const { data, error } = result;
            console.log("data", data);
            if (data) {
                this.setState({ conferences: data });
            }
            if (error) {
                console.log(error);
            }
        }
        {/** Calling function to retrieve data */ }
        getAllConferenceFn(callbackFn);
    }

    // viewRequest(id) {
    //     this.props.history.push("/RequestView/" + id);
    // }

    // deleteVehicle(id) {
    //     VehicleDataService.delete(id)
    //         .then(response => {
    //             this.setState({
    //                 vehicles: this.state.vehicles.filter(vehicle => vehicle.id !== id),
    //                 message: "Successfully Deleted."
    //             });
    //             console.log(response.data);
    //             alert("Do you really want to delete?")
    //         })
    //         .catch(e => {
    //             console.log(e)
    //             this.setState({
    //                 message: "Can't delete."
    //             });
    //         })
    // }

    render() {
        const actions = [
            { value: 'Approved', label: 'Approved' },
            { value: 'Not Approved', label: 'Not Approved' },
            { value: 'Pending', label: 'Pending' }
        ]

        return (
            <div className=''>
                <div id='viewConference'>
                    <div class="text-right">
                        <Link to='/create-conference'> <Button style={{ marginBottom: 20 }} variant="secondary" >Create Conference</Button></Link>
                    </div>
                    <br />
                    <Table striped bordered hover>
                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th>Conference Topic</th>
                                <th>Conference Date</th>
                                <th>Conference Description</th>
                                <th width={'15%'} >Research Papers</th>
                                <th width={'15%'} >Workshops</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th width={'20%'} >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.conferences.map(
                                conference =>
                                    <tr key={conference.id}>
                                        <td>{conference.confTopic}</td>
                                        <td>{conference.confDate}</td>
                                        <td>{conference.confDescription}</td>
                                        <td>
                                            <ul>
                                                {conference.researchPapers.map((item) => (
                                                    <li>{item.label}</li>
                                                ))
                                                }
                                            </ul>
                                        </td>
                                        <td>Workshops</td>
                                        <td>
                                            <Badge pill variant={
                                                conference.approveStatus === "Approved" ? "success" :
                                                    conference.approveStatus === "Declined" ? "danger" : "warning"}>
                                                {conference.approveStatus}
                                            </Badge>
                                        </td>
                                        <td><FiEdit size={30} style={{ textAlign: "center", color: "blue" }} /></td>
                                        <td><RiDeleteBin5Line size={30} style={{ textAlign: "center", color: "red"}}/></td>
                                        <td>
                                            <Select
                                                options={actions}
                                                // onChange={this.onResearchPapersSelect}
                                                className="basic-multi-select"
                                            />
                                        </td>
                                    </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}