import React, { Component } from 'react';
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
            <li key={index}><a href={item.link}>{item.text}</a></li>
        )
    }

    renderDropDownList = (index, item) => {
        console.log("renderDropDownList :: index,item", index, item);
        return (
            <li key={index}><a href={item.link}>{item.text} <VscTriangleDown /></a>
                {item.details.length > 0 ?
                    <ul className="submenu">
                        {item.details.map((details, i) => {
                            //console.log("details.link", details.link);
                            return (
                                <li key={i}><a href={details.link}>{details.text}</a></li>
                            )
                        })
                        }
                    </ul> : ""}
            </li>
        )
    }

    render() {

        const li = [ //TODO: 
            {
                link: "/",
                text: "Home",
                details: []
            },
            {
                link: "/keynotes/",
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
                link: "/workshops/",
                text: "Workshops",
                details: []
            },
            {
                link: "/pastProceedings",
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
                link: "/contactUs",
                text: "Dashboard",
                details: []
            }
        ];


        return (
            <div className="header">
               
                <ul className="menu">
                    {li.map((item, index) => {
                        //console.log("Navbar index, item", index, item);
                        //console.log("Navbar index, item.link", item.link);
                        return (
                            item.details.length > 0 ? this.renderDropDownList(index, item) : this.renderNavBar(index, item)
                        )
                    })
                    }
                    <div className="logo">ICAF</div>
                </ul>
                {/* <div className="logo">ICAF</div> */}
            </div>
        );
    }
}