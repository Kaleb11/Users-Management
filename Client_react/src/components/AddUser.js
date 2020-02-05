import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'; 


class AddUser extends Component{
    addUser(newUser){
        axios.request({
            method: 'post',
            url:'http://localhost:3000/api/Usermgts?access_token=nm',
            data:newUser}).then(response =>{
                this.props.history.push('/');

            }).catch(err=> console.log(err));
        }
    
    onSubmit(e){
       const newUser={
           name: this.refs.name.value,
           city: this.refs.city.value,
           address:this.refs.address.value
       }
       this.addUser(newUser); 
        e.preventDefault();
    }

render(){
return (
<div> 
<br />
    <Link className="btn grey" to="/Users">Back</Link>
    <h1>Add User</h1>
    <form onSubmit={this.onSubmit.bind(this)}>
        <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label> 
        </div>
        <div className="input-field">
            <input type="text" name="city" ref="city" />
            <label htmlFor="city">City</label> 
        </div>
        <div className="input-field">
            <input type="text" name="address" ref="address" />
            <label htmlFor="address">Address</label> 
        </div>
        <input type="submit" value="Save" className="btn"/>
    </form>
</div>
)

}
}
export default AddUser;