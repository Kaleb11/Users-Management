import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'; 
class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
            password: '',
            email:'',
			confirmPassword: '',
			redirectTo: null

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('http://localhost:3000/api/Users?access_token=nm', {
            username: this.state.username,
            email:this.state.email,
            password: this.state.password,
            
			confirmPassword: this.state.confirmPassword
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg && (this.state.password == this.state.confirmPassword)) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

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

      <h5 className="indigo-text">Please, Create your account</h5>
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

              
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='email'   type="password"
									name="confirmPassword"
									value={this.state.confirmPassword}
									onChange={this.handleChange} />
                <label className="form-label" htmlFor="email">Confirm password</label>
              </div>
              <label style={nstyle}>
								<a className='pink-text' href='#!'><b>Forgot Password?</b></a>
							</label>
            </div>

            <br />
            <center>
              <div className='row'>
                <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo' onClick={this.handleSubmit}
                                type="submit" >Signup</button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <Link to="/login">Already have an account?</Link>
    </center>

    <div className="section"></div>
    <div className="section"></div>
  </main>

			)
		}
	}
}

export default Signup