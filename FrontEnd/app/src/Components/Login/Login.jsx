import React, { Component } from 'react'
import './Login.css';


export default class Login extends Component {
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

        // const pass_field = document.querySelector('.pass-key');
        // const showBtn = document.querySelector('.show');
        // showBtn.addEventListener('click', function(){
        //  if(pass_field.type === "password"){
        //    pass_field.type = "text";
        //    showBtn.textContent = "HIDE";
        //    showBtn.style.color = "#3498db";
        //  }else{
        //    pass_field.type = "password";
        //    showBtn.textContent = "SHOW";
        //    showBtn.style.color = "#222";
        //  }
        // });
        return (
            <div className="bg-img">
        <div className="content">
          <header>Login Form</header>
          <form action="#">
            <div className="field">
              <span className="fa fa-user" />
              <input type="text" required placeholder="Email or Phone" />
            </div>
            <div className="field space">
              <span className="fa fa-lock" />
              <input type="password" className="pass-key" required placeholder="Password" />
              <span className="show">SHOW</span>
            </div>
            <div className="pass">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="field">
              <input type="submit" defaultValue="LOGIN" />
            </div>
          </form>
          <div className="login">Or login with</div>
          <div className="links">
            <div className="facebook">
              <i className="fab fa-facebook-f"><span>Facebook</span></i>
            </div>
            <div className="instagram">
              <i className="fab fa-instagram"><span>Instagram</span></i>
            </div>
          </div>
          <div className="signup">Don't have account?
            <a href="#">Signup Now</a>
          </div>
        </div>
      </div>
        )
    }
}

