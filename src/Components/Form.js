import React, { Component } from 'react';
import axios from 'axios';
import { Education } from './Education';
import { PersonalInfo } from './PersonalInfo';
import { Pricing } from './Pricing';
import { SubmitButton } from './SubmitButton';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stoken: 'pfjkTmfSDsXR7St6yYsy',
            tutor_id: '12',
            name: '',
          //  email: '',
            phoneNumber: 0,
            address: '',
            degree: '',
            year_of_completion: '',
            institution: '',
            majors: '',
            experience: 0,
            expectation: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: (e.target.value)
        })
    }
    handleSubmit(e) {
        const userObj = {
            name: this.state.name,
           // email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            degree: this.state.degree,
            year_of_completion: this.state.year_of_completion,
            institution: this.state.institution,
            majors: this.state.majors,
            experience: this.state.experience,
            expectation: this.state.expectation
        }
        const user = {
            stoken: this.state.stoken,
            tutor_id: this.state.tutor_id,
            userObj
        }
        //   const json = JSON.stringify(user)
        // console.log(json);
        //   axios.put(`https://aqueous-woodland-57943.herokuapp.com/users/profile_update`,{user})
        axios.put(`https://aqueous-woodland-57943.herokuapp.com/users/profile_update?stoken=pfjkTmfSDsXR7St6yYsy&tutor_id=12`, { user })
            .then(response => {
                console.log(response);
                console.log(response.data)
            })
    }
    render() {
        return (
            <div>
                <PersonalInfo handleInputChange={this.handleInputChange} />
                <Education handleInputChange={this.handleInputChange} />
                <Pricing handleInputChange={this.handleInputChange} />
                <SubmitButton handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
export { Form };
