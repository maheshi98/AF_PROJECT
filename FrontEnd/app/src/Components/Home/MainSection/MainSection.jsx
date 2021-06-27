import React, { Component } from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import logo from 'url:~/src/Assets/back.jpg';
import { Link } from 'react-router-dom'
import './MainSectionStyles.css';

export default class MainSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false,
        }
    }

    componentDidMount() {
        this.setState({ isSelected: true })
    }

    render() {
        return (
            <div>
                <Card className="bg-dark text-white">
                    <Card.Img src={logo} alt="Card image" style={{ height: 700, borderWidth: 0 }} />
                    <Card.ImgOverlay>
                        <Card.Text style={{ fontSize: 40, paddingTop: 80, textAlign: 'center' }}>TECHNOLOGY</Card.Text>
                        <Card.Title style={{ fontSize: 70, fontWeight: 'bolder', textAlign: 'center', fontFamily: 'serif' }}>CONFERENCE</Card.Title>
                        <Card.Text style={{ paddingTop: 70, fontSize: 25, textAlign: 'center' }}><FaCalendarAlt size={35} /> 28-12 December</Card.Text>
                        <Card.Text style={{ paddingTop: 10, fontSize: 25, textAlign: 'center' }}><MdPlace size={35} /> Sri Lanka Institute of Information Technology</Card.Text>
                        <Card.Text style={{ paddingTop: 30, fontSize: 25, textAlign: 'center' }}>
                            <Link to='/login'> <Button style={{ fontSize: 20, width: 150, paddingRight: 10 }} variant="secondary">Log In</Button>{' '}</Link>
                            <Link to='/register'><Button style={{ fontSize: 20, width: 150 }} variant="secondary">Sign Up</Button></Link>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                {/* <div className="main"> */}
                {/* <div className="circle"></div>
                <p className="blend-me">Blend Me</p> */}
                {/* <div>
                    <span>CSS is Awesome</span>
                </div> */}
                {/* <div> */}
                {/* <div className="article__label style_1">" International Conference on Application Frameworks 2021"</div> */}
                {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/182774/thumb.png" alt="" /> */}
                {/* </div> */}
                {/* <div> */}
                {/* <div className="title style_1">Virtual Conference...</div> */}
                {/* </div> */}
                {/* <div> */}
                {/* <div class="date style_2">19th - 11th December 2021</div> */}
                {/* </div> */}
                {/* <div> */}
                {/* <div class="venue style_3">Sri Lanka Institute of Information Technology, Sri Lanka</div> */}
                {/* </div> */}
                {/* <div class="button style"> */}
                {/* <button class="register">Register Now</button> */}
                {/* <button class="login">Log In</button> */}
                {/* </div> */}
                {/* </div> */}
            </div>
        );
    }
}