import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ViewConference.css';
import { Button, Table } from 'react-bootstrap';

export default class ViewConference extends Component {

    render() {
        return (
            <div className='container'>
                <div id='viewConference'>
                    <Link to='/createConference'> <Button style={{ marginBottom: 20 }} variant="secondary" >Create Conference</Button></Link>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}