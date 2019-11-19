import React, {Component} from 'react'
import { Form, Label, Button } from 'semantic-ui-react'

class Register extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }


  handleChange = (e) => {
      e.preventDefault();
      this.setState ({
          [e.currentTarget.name]: e.currentTarget.value
      })
  }


  handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Email & Password:', this.state)
    const registrationUrl = 'process.env.REACT_APP_API_URL + /api/v1/dogs/';
    const registerResponse = await fetch(registrationUrl, {
        method: 'POST',
        body: JSON.stringify(this.state),
        credentials: 'include', // Send a session cookie along wit our request
        headers: {
            'Content-Type': 'application/json'
        }
        
    })

    const parsedResponse = await registerResponseResponse.json();

    if (parsedResponse.status.code == 201) {
        console.log('Sign up successful');
        this.props.history.push('/cars')
    }
}

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Register;