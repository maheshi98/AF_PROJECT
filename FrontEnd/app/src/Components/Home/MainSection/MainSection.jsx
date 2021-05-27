import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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
            <div className="main">
                {/* <div className="circle"></div>
                <p className="blend-me">Blend Me</p> */}
                {/* <div>
                    <span>CSS is Awesome</span>
                </div> */}
                <div>
                    <div className="article__label style_1">" International Conference on Application Frameworks 2021"</div>
                    {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/182774/thumb.png" alt="" /> */}
                </div>
                <div>
                    <div className="title style_1">Virtual Conference...</div>
                </div>
                    <div>
                    <div class="date style_2">19th - 11th December 2021</div>
                    </div>
                <div>
                    <div class="venue style_3">Sri Lanka Institute of Information Technology, Sri Lanka</div>
                </div>
                <div class="button style">
                <Link to='/register'> <button class="register"  href="login" >Register Now</button></Link>
                <Link to='/login'>   <button class="login" >Log In</button></Link>
                </div>
                
            </div>
        );
    }
}