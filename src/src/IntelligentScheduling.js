import React from 'react'
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
} from  "reactstrap"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import * as Service from './HMSService';

class IntelligentScheduling extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      medicalCondition: '',
      errors : ''
    };
  }

  handleUserInput = e => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value)
      },
      [e.target.name] : e.target.value
    })
  };

  validate = (name, value) => {
    switch (name) {
        case "name":
            if (!value) {
                return "Name is Required";
            } else if(!value.match(/^[a-zA-Z]+$/g)){
                return "Please enter valid  name";
            } else {
                return "";
            }
        case "medicalCondition":
              if (!value) {
                  return "Medical Condition is Required";
              } else if(!value.match(/^[a-zA-Z]+$/g)){
                  return "Please enter valid medical condition";
              } else {    
                return "";
              }
          }
        };

  submittedData = () => {
    let payload = {
      name: this.state.name,
      medicalCondition: this.state.medicalCondition
    };
    Service.requestAppointment(payload)
    .then(response => {
      if(response.statusCode === 200)
      {
        toast.success(response.message,
          {position: toast.POSITION.BOTTOM_CENTER, autoClose : false})
        }
        else{
          toast.error(response.message,
            {position: toast.POSITION.BOTTOM_CENTER, autoClose : true})
        }
    })
    .catch(() => toast('Error while scheduling appointment'),
    {position: toast.POSITION.BOTTOM_CENTER, autoClose : false});
  };

  render() {
    const {errors } = this.state;  
    return (
      <div>
          <b>Schedule Appointment</b>
      <div>
          <br/>
        <Row sm={12}>
          <Col sm={6}>
            <FormGroup row>
              <Label for="name" className="text-right">
                Patient Name
              </Label>
              <Col>
                <Input
                  onChange={event => this.handleUserInput(event)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Patient Name"
                  value={this.state.name}
                  autoComplete="nope"
                />
                <span style={{color : 'red'}}>{errors.name}</span>
              </Col>
            </FormGroup>
            <br />
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label for="condition" sm={2} className="text-right">
                Medical Condition
              </Label>
              <Col sm={4}>
                <Input
                onChange={event => this.handleUserInput(event)}
                  type="text"
                  name="medicalCondition"
                  id="condition"
                  placeholder="Enter Medical Condition"
                  value={this.state.medicalCondition}
                  autoComplete="nope"
                />
                 <span style={{color : 'red'}}>{errors.medicalCondition}</span>
              </Col>
            </FormGroup>
            <br />
          </Col>
        </Row>
        <Button disabled={errors.name != '' || errors.medicalCondition != ''}
        type="submit" style={{backgroundColor: 'skyblue', width:'150px',  fontFamily : 'inherit', 
        borderRadius: 3}}
         onClick={this.submittedData}>
          Submit
        </Button>
        <br />
        <hr />
        </div>
      </div>
    );
  }
}
export default IntelligentScheduling
