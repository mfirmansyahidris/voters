import React, { Component } from 'react'
import { Alert } from 'reactstrap'
import Axios from 'axios'

export default class CreateUser extends Component {
    constructor(props) {
        super(props)

        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeRepassword = this.onChangeRepassword.bind(this)
        this.checkPassword = this.checkPassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.passwordAlert = this.onChangeRepassword.bind(this)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            re_password: '',
            passwordAlert: false
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeRepassword(e) {    
        this.setState({
            re_password: e.target.value
        })
    }

    checkPassword(e){
        this.setState({
            passwordAlert: this.state.password !== this.state.re_password ? true : false
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const user = {
            user: {
                name: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName
                },
                email: this.state.email,
                password: this.state.password
            }
        }
        
        console.log(user)

        Axios.post('http://localhost:5353/users/create',user)
            .then(res => console.log(res))
        window.location = '/'
    }

    render() {
        return (
            <div className="container">
                <h3>Create New User</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <lable>First Name</lable>
                        <input type="text" required className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName} />
                    </div>
                    <div className="form-group">
                        <form onSubmit="">
                            <lable>Last Name</lable>
                            <input type="text" required className="form-control" value={this.state.lastName} onChange={this.onChangeLastName} />
                        </form>
                    </div>
                    <div className="form-group">
                        <form onSubmit="">
                            <lable>Email</lable>
                            <input type="text" required className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                        </form>
                    </div>
                    <div className="form-group">
                        <form onSubmit="">
                            <lable>Password</lable>
                            <input type="text" required className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                        </form>
                    </div>
                    <div className="form-group">
                        <form onSubmit="">
                            <lable>Re-type Password</lable>
                            <input type="text" required className="form-control" value={this.state.re_password} onKeyUp={this.checkPassword} onChange={this.onChangeRepassword} />
                        </form>
                    </div>
                    <Alert color="danger" isOpen={this.state.passwordAlert} >
                        The Password is not same
                    </Alert>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}