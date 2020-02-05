
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Main from './components/Main';
import LoginForm from './components/Login-form';
import Navbar from './components/Navbar';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Addicon from './components/Addicon'
class App extends Component {
    constructor() {
        super()
        this.state = {
          loggedIn: false,
          username: null
         
        }
    
        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
      }
    
      componentDidMount() {
        this.getUser()
      }
    
      updateUser (userObject) {
        this.setState(userObject)
      }

    getUser() {
      
        axios.get('http://localhost:3000/api/users').then(response => {
          console.log('Get user response: ')
          console.log(response.data)
          if (response.data.user) {
            console.log('Get User: There is a user saved in the server session: ')

            this.setState({
              loggedIn: true,
              username: response.data.user.username
            })
          } else {
            console.log('Get user: no user');
            this.setState({
              loggedIn: false,
              username: null
            })
          }
        })
      }
render() {
  const loggedIn = this.props.loggedIn;

        return (
          
<div>

<Route    
path="/login"
        render={() =>
            <LoginForm
            updateUser={this.updateUser}
            />}
            />
        
  <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
  <div className="container">
  <Main />
  </div>
  
  <Addicon updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
   
  
  </div>

        )
      }
    }


export default App;
