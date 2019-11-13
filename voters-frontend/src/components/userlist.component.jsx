import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const User = props => (
    <tr>
        <td>{props.data.user.name.firstName}</td>
        <td>{props.data.user.name.lastName}</td>
        <td>{props.data.user.email}</td>
        <td>
            <Link to={"edit/" + props.data._id}>edit</Link>|
            <a href="#" onClick={() => { props.deleteUser(props.data._id) }}>delete</a>
        </td>
    </tr>
)

export default class UserList extends Component {
    constructor(props) {
        super(props)
        this.deleteUsers = this.deleteUser.bind(this)
        this.state = { users: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5353/users')
            .then(res => {
                this.setState({ users: res.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteUser(id) {
        axios.delete('http://localhost:5353/users/' + id)
            .then(res => {
                console.log(res.data)
                this.setState({ users: this.state.users })
            })
        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }

    usersList() {
        return this.state.users.map(currentUsers => {
            return <User data={currentUsers} deleteUser={this.deleteUser} key={currentUsers._id} />
        })
    }

    render(){
        return(
            <div className="container">
                <h3>Users List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>first name</th>
                            <th>last name</th>
                            <th>email</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.usersList()}
                    </tbody>
                </table>
            </div>
        )
    }
}