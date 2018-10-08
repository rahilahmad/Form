import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Education = (props) => {
    return (
        <div>
            <div className="container col-md-8 text-center">
                <h2> Education</h2>
                <form >
                    <FormGroup className="col-md-6" >
                        <ControlLabel>Degree</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Degree"
                            name="degree"
                            onChange={props.handleInputChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup className="col-md-6" >
                        <ControlLabel>Year Of Completion</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Year Of Completion"
                            name="year_of_completion"
                            onChange={props.handleInputChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup className="col-md-6" >
                        <ControlLabel>Institution</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Institute "
                            name="institution"
                            onChange={props.handleInputChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup className="col-md-6" >
                        <ControlLabel>Majors</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Major"
                            name="majors"
                            onChange={props.handleInputChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                </form>
            </div>
        </div>
    );
}
export { Education };
