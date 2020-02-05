import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
class Navbar extends Component{
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('http://localhost:3000/api/Users/logout').then(response => {
            
            console.log(response.data); // Only for debugging
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null,
                    email: null,
                })
            }
        }).catch(error => {
            console.log('Error in Logging out');
        })
    }
render(){
    const loggedIn = this.props.loggedIn;

    return(
        
        <div>
            {loggedIn ? (
<nav className="blue darken-3">
<div className="nav-wrapper">

                            
                            

                          
                      
                            <section className="navbar-section">
                                
                            </section>
                       
                            <Link to="/Users"><i className="brand-logo">Kaleb Company</i></Link>

      <a data-target="main-menu" className="sidenav-trigger ">
          <i className="fa fa-bars"></i></a>

    <ul className="right hide-on-small-only">
    <li><Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">Logout</span>
                                </Link></li>
        <li><Link to="/Users"><i className="fa fa-users"></i>
        Users</Link></li>
      
      </ul>
      
<ul className="sidenav" id="main-menu">
<li><Link to="/Users"><i className="fa fa-users"></i>Users</Link></li>
<li><Link to="/users/add"><i className="fa fa-plus"></i>Add User</Link></li>
<li><Link to="/about"><i className="fa fa-question-circle"></i>About</Link></li>
  </ul>
    </div>
    
  </nav>

):(


                          <section>
                                
                            </section> 
)}
        </div>
    )
}

}
export default Navbar;