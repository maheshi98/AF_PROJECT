import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from 'url:~/src/Assets/new.png';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { VscTriangleDown } from "react-icons/vsc";
import './NavBarStyles.css';

export default class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    renderNavBar = (index, item) => {
        console.log("renderNavBar :: index, item", index, item);
        return (
            <Nav.Link key={index} href={item.link} style={{ paddingLeft: 20, fontSize: 18, color: 'black' }}>{item.text}</Nav.Link>
        )
    }

    renderDropDownList = (index, item) => {
        console.log("renderDropDownList :: index,item", index, item);
        return (

            <NavDropdown key={index} title={item.text} id="basic-nav-dropdown" style={{ paddingLeft: 20, fontSize: 18, color: 'black' }}>
                {item.details.map((details, i) => {
                    return (
                        <div key={index} >
                            <NavDropdown.Item href={details.link}>{details.text}</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </div>
                    )
                })
                }
            </NavDropdown>
        )
    }

    render() {

        const li = [
            {
                link: "/",
                text: "Home",
                details: []
            },
            {
                link: "/keynotes",
                text: "Keynotes",
                details: []
            },
            {
                link: "/authors/",
                text: "For Authors",
                details: [
                    {
                        link: "/callForPapers",
                        text: "Call For Papers"
                    },
                    {
                        link: "/importantDates",
                        text: "Important Dates"
                    },
                    {
                        link: "/authorInstructions",
                        text: "Author Instructions"
                    },
                    {
                        link: "/presenterInformation",
                        text: "Presenter Information"
                    }
                ]
            },
            {
                link: "/forAttendees",
                text: "For Attendees",
                details: [
                    {
                        link: "/program",
                        text: "Program"
                    },
                    {
                        link: "/registration",
                        text: "Registration"
                    }
                ]
            },
            {
                link: "/conference",
                text: "Conference",
                details: []
            },
            {
                link: "/conference-admin", //TODO: remove this //FIXME:
                text: "Conference Admin",
                details: []
            },
            {
                link: "/past-proceedings",
                text: "Past Proceedings",
                details: []
            },
            {
                link: "/committee",
                text: "Committee",
                details: []
            },
            {
                link: "/contactUs",
                text: "Contact us",
                details: []
            },
            {
                link: "/research-paper",
                text: "Research Paper",
                details: []
            }
        ];

        return (
            <Navbar fixed="top" bg="light" expand="lg" style={{ top: 0, position: 'sticky' }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{ paddingLeft: 150 }}>
                        {li.map((item, index) => {
                            return (
                                item.details.length > 0 ? this.renderDropDownList(index, item) : this.renderNavBar(index, item)
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
                {/* <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="70"
                        height="70"
                        className="d-inline-block align-top" />
                </Navbar.Brand> */}
            </Navbar>
        );
    }
}

