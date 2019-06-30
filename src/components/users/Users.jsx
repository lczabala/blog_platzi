import React, {Component} from 'react'
import axios from 'axios'

class Users extends Component{
    constructor(){
        super()
        this.state={
          users: []
        }
      }
    
      async componentDidMount(){    
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
       
        this.setState({
          users: data.data
        })        
      }
    
      ponerFilas = () => (
        this.state.users.map((user) => (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.street}, {user.address.city}</td>
          </tr>
        ))
      )
    
      render()
      {return (
        <div className="container">
          <div className="row">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                {this.ponerFilas()}
              </tbody>
            </table>
          </div>
        </div>
      );}
}

export default Users