import React from 'react';
import { Button } from 'react-bootstrap';

const SubmitButton = (props) => {
    return (
        <div className="container col-md-8 text-center">
            <br />
            <Button bsStyle="success" onClick={props.handleSubmit}>Submit</Button>
        </div>
    )
}
export { SubmitButton };