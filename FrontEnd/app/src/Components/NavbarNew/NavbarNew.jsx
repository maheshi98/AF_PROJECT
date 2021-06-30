import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from 'url:~/src/Assets/new.png';

export default class Navbarnew extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            
            <Navbar bg="light" variant="light-gray">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand  href="/">
                <img
                src={logo}
                width="70"
                height="70"
                className="d-inline-block align-top" />
                </Navbar.Brand>
                <Nav id = "navbar" className="me-auto" style= {{fontSize:"18px"}}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Keynotes</Nav.Link>
                <Nav.Link href="#pricing">Committee</Nav.Link>
                <Nav.Link href="#pricing">Contact us</Nav.Link>
                </Nav>

                <Nav id = "navbar" className="me-auto" style= {{fontSize:"18px" , paddingLeft: "25cm"}}>
                <Navbar.Brand href="/userprofile">
                <img 
                src="https://bootdey.com/img/Content/avatar/avatar7.png" 
                alt="Admin" className="rounded-circle" 
                width={50} />
                </Navbar.Brand>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
