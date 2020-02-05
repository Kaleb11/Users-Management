import React from 'react';
import {Switch, Route} from 
'react-router-dom'; 
import Users from './Users';
import About from './About';
import UserDetails from './UserDetails';
import AddUser from './AddUser';
import EditUser from './EditUser';
import Loginform from './Login-form';
import Signup from './Signup'

const Main =()=>(
    <main>
        <Switch>
            <Route exact path='/' component={Loginform} />
            <Route exact path='/Users' component={Users} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/Users' component={Signup} />
            <Route exact path='/about' component={About} />
            <Route exact path='/users/add' component={AddUser} />
            <Route exact path='/users/:id' component={UserDetails} />
            <Route exact path='/users/edit/:id' component={EditUser} />
        </Switch>
    </main>
)
export default Main;