import React, { Component } from "react";
import Axios from "axios";

export default class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        disabled: false,
        emailSent: null,
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        }) 
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            disabled: true
        })

        Axios.post("http://localhost:4000/api/email", this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }

    render() {
        return (
        <div className="contact-page-container">
            <h1 className="contact-title">Let's be in touch.</h1>
            <form className="contact-form" onSubmit={this.handleSubmit}>
                    <label className="form-label" for="full-name">Full Name:</label>
                    <input id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                    <br></br>
                    <label className="form-label" for="email">Email:</label>
                    <input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                    <br></br>
                    <label className="form-label" for="message">Message:</label>
                    <textarea id="message" name="message" value={this.state.message} onChange={this.handleChange}/>
                <button className="form-button" type="submit" disabled={this.state.disabled}>Send</button>
            {this.state.emailSent === true && <p className="d-inline-success-msg">Email Sent</p>}
            {this.state.emailSent === false && <p className="d-inline-err-msg">Email Not Sent</p>}
            </form>
        </div>
        )
    }
}
