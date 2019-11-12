import React, { Component } from 'react'
import UserProfile from '../components/UserProfile'
import AdoptionContainer from './AdoptionContainer'

class UserContainer  extends Component {

state = {
  user: {}
}

fetchUser = ()=>{
    const id = localStorage.loggedInUserId
    const token = localStorage.token
    fetch(`http://localhost:3000/users/${id}`, {
      headers: {
        "Authorization": token
      }
    })
    .then(res=>res.json())
    .then(userData => {
      this.setState({
        user: userData
      })
    })
}

componentDidMount(){
  this.fetchUser()
}

 render() {

  return(
   <div className='user-container'>
       <UserProfile user={this.state.user}
                    token={this.props.token}
                    handleOnClick={this.props.handleOnClick}
                    logOut={this.props.logOut}
                    fetchUser={this.fetchUser}/>
       <AdoptionContainer token={this.props.token}
                          adoptions={this.state.user.adoptions}
                          />
   </div>
    )
   }
 }


export default UserContainer