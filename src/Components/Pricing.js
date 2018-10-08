import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Pricing = (props) => {
    return (
        <div>
            <div className="container col-md-8 text-center">
                <h2> Pricing</h2>
                <form >
                    <FormGroup className="col-md-6" >
                        <ControlLabel>Experience</ControlLabel>
                        <FormControl
                            type="number"
                            placeholder="Enter number of Years"
                            name="experience"
                            onChange={props.handleInputChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup className="col-md-6" >
                        <ControlLabel>Expectation</ControlLabel>
                        <FormControl
                            type="number"
                            placeholder="In PKR"
                            name="expectation"
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </form>
            </div>
        </div>
    );
}
export { Pricing };
