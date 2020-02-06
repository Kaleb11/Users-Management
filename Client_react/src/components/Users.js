import React, {Component} from 'react';
import axios from 'axios';

import UserItems from './UserItems'
class Users extends Component{
    constructor(props){
super(props);
this.state={
    users:[]
}

    }
    componentWillMount(){
        this.getUsers();
    }
    getUsers(){
        axios.get(`http://localhost:3000/api/usermgts`)
        .then(response=>{
           this.setState({users:response.data}, () =>{
            //console.log(this.state);   
           })
        })
        .catch(err => console.log(err));
    }
render(){
    const loggedIn = this.props.loggedIn;
    const userItems=this.state.users.map((user, i)=>{
return(
    
<UserItems key={user.id} item={user}/>
)

    })
    return(
        
        <div>
             
            
            <h1>User's List</h1>
            <ul className="collection">
{userItems}

            </ul>
          
            
        </div>
    )
}
 
}
export default Users;