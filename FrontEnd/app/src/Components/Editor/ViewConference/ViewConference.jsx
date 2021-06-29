import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Badge } from 'react-bootstrap';
import { RiDeleteBin5Line } from "react-icons/ri";
// import { FiEdit } from "react-icons/fi";
import Select from 'react-select';
import { getAllConferenceFn, changeStatusFn, deleteConferenceFn } from '../../../BizLogic';
import './ViewConference.css';

const initialState = {
    conferences: []
}
export default class ViewConference extends Component {
    constructor(props) {
        super(props);
        this.getAllConference = this.getAllConference.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
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

    /**
    * @description Change status of conference
    * @memberof ViewConference
    */
    changeStatus = (e, id) => {
        console.log("change status", e.label, id);
        changeStatusFn(id, e.label);
    }

    /**
    * @description Change status of conference
    * @memberof ViewConference
    */
    deleteConference(id) {
        console.log("change status", id);
        deleteConferenceFn(id);
    }

    render() {
        const actions = [
            { value: 'Approved', label: 'Approved' },
            { value: 'Declined', label: 'Declined' },
            { value: 'Pending', label: 'Pending' }
        ]

        return (
            <div className='container'>
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
                                {/* <th>Edit</th> */}
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
                                        {/* TODO: add workshops*/}
                                        <td>Workshops</td>
                                        <td>
                                            <Badge pill variant={
                                                conference.approveStatus === "Approved" ? "success" :
                                                    conference.approveStatus === "Declined" ? "danger" : "warning"}>
                                                {conference.approveStatus}
                                            </Badge>
                                        </td>
                                        {/* <td>
                                            <FiEdit
                                                size={30}
                                                style={{ textAlign: "center", color: "blue" }} />
                                        </td> */}
                                        <td>
                                            <button style={{ border: "none" }} >
                                                <RiDeleteBin5Line
                                                    onClick={() => this.deleteConference(conference.confId)}
                                                    size={30}
                                                    style={{ textAlign: "center", color: "red" }} />
                                            </button></td>
                                        <td>
                                            <Select
                                                options={actions}
                                                onChange={e => this.changeStatus(e, conference.confId)}
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