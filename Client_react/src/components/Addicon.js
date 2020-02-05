import React, {Component} from 'react';

import {Link} from 'react-router-dom'; 


class Addicon extends Component{
    constructor(props) {
        super(props);
       
    }
    render(){
        const loggedIn = this.props.loggedIn;

        return (
            
<div className="fixed-action-btn">
{loggedIn ? (
  <Link to="/users/add" className="btn-floating btn-small red"><i className="fa fa-plus" ></i></Link>
):(
    <section></section>
)}
  </div>


        )
    }

}
export default Addicon;