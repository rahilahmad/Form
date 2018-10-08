import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const PersonalInfo = (props) => {
    return (
        <div>

            <div className="container col-md-8 text-center">
                <h2> Personal Information</h2>
                <form >
                    <FormGroup className="col-md-6" >
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            onChange={props.handleInputChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup className="col-md-6" >
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            onChange={props.handleInputChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup className="col-md-6" >
                        <ControlLabel>Phone no:</ControlLabel>
                        <FormControl
                            type="number"
                            placeholder="Enter Phone Number"
                            name="phoneNumber"
                            onChange={props.handleInputChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup className="col-md-6" >
                        <ControlLabel>Address</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Address"
                            name="address"
                            onChange={props.handleInputChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                </form>
            </div>
        </div>
    );
}
export { PersonalInfo };
