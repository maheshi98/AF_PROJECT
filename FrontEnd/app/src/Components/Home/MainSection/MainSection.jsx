import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from 'url:~/src/Assets/backNew.jpg';
import { getImportantDateByIdFn } from '../../../BizLogic';
import { Card, Button } from 'react-bootstrap';
import './MainSectionStyles.css';

class MainSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: {
                date: "December 27 - 29, 2021",
                description: ""
            }
        }
    }

    componentDidMount() {
        getImportantDateByIdFn("60b266c2d0e5b10676a9efa7").then(response => {
            this.setState({
                date: response
            })
        })
            .catch(e => {
                consol.log(e);
            })
    }

    render() {

        const date = this.state.date.date;
        const [word, digits] = date.split(/(?<=\D)(?=\d)/);
        const dates = date.match(/\d+/g);
        const conf_date = [dates[0], dates[1]].join(' - ');

        return (
            <div>
                <Card className="bg-dark text-white">
                    <Card.Img src={logo} alt="Card image" className="logo" style={{ height: 700 }} />
                    <Card.ImgOverlay>
                        <Card.Text style={{ fontSize: 40, paddingTop: 60, paddingLeft: 50, textAlign: 'left', textTransform: 'uppercase' }}>{this.state.date.description}</Card.Text>
                        <Card.Title style={{ fontSize: 70, fontWeight: 'bolder', textAlign: 'left', paddingTop: 20, paddingLeft: 50 }}>CONFERENCE</Card.Title>
                        <Card.Text style={{ fontSize: 70, textAlign: 'right', paddingRight: 50 }}>{word}</Card.Text>
                        <Card.Title style={{ fontSize: 70, fontWeight: 'bolder', textAlign: 'right', paddingRight: 50 }}>{conf_date}</Card.Title>
                        <Card.Text style={{ fontSize: 33, paddingTop: 20, textAlign: 'right' }}> Sri Lanka Institute of Information Technology, Sri Lanka</Card.Text>
                        <Card.Text style={{ paddingLeft: 100, fontSize: 25, textAlign: 'left' }}>
                            <Link to='/login'> <Button style={{ fontSize: 20, width: 150, paddingRight: 10, borderRadius: 20 }} variant="warning">Log In</Button>{' '}</Link>
                            <Link to='/register'><Button style={{ fontSize: 20, width: 150, borderRadius: 20 }} variant="warning">Sign Up</Button></Link>{' '}
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                {/* <Card.Text style={{ fontSize: 35, textAlign: 'right' }}><MdPlace size={35} /> Sri Lanka Institute of Information Technology, Sri Lanka</Card.Text> */}
                {/* <hr style={{ borderWidth: 5, borderColor: 'white'}}/> */}
                {/* <Card.Text style={{ paddingTop: 70, fontSize: 70, textAlign: 'center' }}><FaCalendarAlt size={35} /> 28-12 December</Card.Text> */}
            </div>
        );
    }
}

export default MainSection;