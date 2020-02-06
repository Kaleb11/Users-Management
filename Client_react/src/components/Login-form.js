import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'; 

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
           
            username: '',
            email:'',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
       
       // this.updateUser = this.updateUser.bind(this)
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
       

        axios
            .post('http://localhost:3000/api/Users/login', {
                username: this.state.username,
                email:this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username,
                        email:response.data.email
                       
                    })
                    
                    this.setState({
                        redirectTo: '/Users'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        const mystyle={display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE;" };
        const nstyle={float: "right"};
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <main>
    <center>
      
      <div className="section"></div>

      <h5 className="indigo-text">Please, login into your account</h5>
      <div className="section"></div>

      <div className="container">
        <div className="z-depth-1 grey lighten-4 row" style= {mystyle}>

          <form className="col s12" method="post">
            <div className='row'>
              <div className='col s12'>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='text' name='username' id='username' value={this.state.username}
                                    onChange={this.handleChange}/>
                <label className="form-label" htmlFor="username">Enter your username</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='email' name='email' id='email' value={this.state.email}
                                    onChange={this.handleChange} />
                <label className="form-label" htmlFor="email">Enter your email</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='password' name='password' id='password' value={this.state.password}
                                    onChange={this.handleChange}/>
                <label className="form-label" htmlFor="password" >Enter your password</label>
              </div>
              <label style={nstyle}>
								<a className='pink-text' href='#!'><b>Forgot Password?</b></a>
							</label>
            </div>

            <br />
            <center>
                
              <div className='row'>
                <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo' onClick={this.handleSubmit}
                                type="submit" >Login</button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <Link to="/Signup" >Create account</Link>
    </center>

    <div className="section"></div>
    <div className="section"></div>
    
  </main>
  
            )
        }
    }
}

export default LoginForm
