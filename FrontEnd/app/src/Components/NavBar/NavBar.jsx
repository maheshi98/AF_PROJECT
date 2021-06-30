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
            <Nav.Link key={index} href={item.link} style={{ paddingLeft: 20, fontSize: 18, color: 'white' }}>{item.text}</Nav.Link>
        )
    }

    // renderDropDownList = (index, item) => {
    //     console.log("renderDropDownList :: index,item", index, item);
    //     return (

    //         <NavDropdown key={index} title={item.text} id="basic-nav-dropdown" style={{ paddingLeft: 20, fontSize: 18, color: 'black' }}>
    //             {item.details.map((details, i) => {
    //                 return (
    //                     <div>
    //                         <NavDropdown.Item href={details.link}>{details.text}</NavDropdown.Item>
    //                         <NavDropdown.Divider />
    //                     </div>
    //                 )
    //             })
    //             }
    //         </NavDropdown>
    //         // <li key={index}><a href={item.link}>{item.text} <VscTriangleDown /></a>
    //         //     {item.details.length > 0 ?
    //         //         <ul className="submenu">
    //         //             {item.details.map((details, i) => {
    //         //                 //console.log("details.link", details.link);
    //         //                 return (
    //         //                     <li key={i}><a href={details.link}>{details.text}</a></li>
    //         //                 )
    //         //             })
    //         //             }
    //         //         </ul> : ""}
    //         // </li>
    //     )
    // }

    render() {

        const pages = [ //TODO: 
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
                link: "/add-workshop",
                text: "Workshop",
                details: []
            },
            {
                link: "/workshops",
                text: "Workshops",
                details: []
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
                link: "/contactUs",
                text: "Contact us",
                details: []
            },
            {
                link: "/research-paper",
                text: "Research Paper",
                details: []
            },
            {
                link: "/logout",
                text: "Log Out",
                details: []
            },
            {
                link: "/adminHome",
                text: "Admin",
                details: []
            }
        ];

        const nav_length = pages.length;

        return (
            <Navbar fixed="top" bg="dark" expand="lg" style={{ top: 0, position: 'sticky' }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{ paddingLeft: 150 }}>


                        {pages.map((item, index) => {
                            return (
                                this.renderNavBar(index, item)
                                // index == nav_length && isLogged
                            )
                        })}
                    </Nav>
                    <Nav id="navbar" className="me-auto" style={{ fontSize: "18px", paddingLeft: "25cm" }}>
                        <Navbar.Brand href="/userprofile">
                            <img
                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                alt="Admin" className="rounded-circle"
                                width={50} />
                        </Navbar.Brand>
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