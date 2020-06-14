import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
            <Form className="contact-form" onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="full-name">Full Name</Form.Label>
                    <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                </Form.Group>  
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="email">Email</Form.Label>
                    <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="message">Message</Form.Label>
                    <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}/>
                </Form.Group>
                <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>Send</Button>
            {this.state.emailSent === true && <p className="d-inline-success-msg">Email Sent</p>}
            {this.state.emailSent === false && <p className="d-inline-err-msg">Email Not Sent</p>}
            </Form>
        </div>
        )
    }
}
