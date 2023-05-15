import React from 'react'
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import * as Service from './HMSService';

class CostEstimator extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: 0,
      daysInHospital: 0,
      hasInsurance: false,
      isCritical :false,
      errors: ''
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
        case "firstName":
            if (!value) {
                return "First name is Required";
            } else if(!value.match(/^[a-zA-Z]+$/g)){
                return "Please enter valid first name";
            } else {
                return "";
            }
        case "lastName":
              if (!value) {
                  return "Last name is Required";
              } else if(!value.match(/^[a-zA-Z]+$/g)){
                  return "Please enter valid last name";
              } else {    
                return "";
              }
          }
        };

  submittedData = () => {
    let payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: parseInt(this.state.age),
      daysInHospital : parseInt(this.state.daysInHospital),
      hasInsurance : this.state.hasInsurance,
      isCritical: this.state.isCritical
    };
    Service.fetchCostEstimator(payload)
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
    .catch(() => toast('Error fetching cost details'));
  };

  render() {
    const {errors } = this.state;  
    return (
      <div>
        <b>Cost Estimator for Patient Diagnosis</b>
      <div>
        <br/>
        <Row sm={12}>
          <Col sm={6}>
            <FormGroup row>
              <Label for="fname" className="text-right">
                First Name
              </Label>
              <Col>
                <Input
                 onChange={event => this.handleUserInput(event)}
                  type="text"
                  name="firstName"
                  id="fname"
                  placeholder="Enter First Name"
                  value={this.state.firstName}
                  autoComplete="nope"
                />
                  <span style={{color : 'red'}}>{errors.firstName}</span>
              </Col>
            </FormGroup>
            <br />
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label for="fname" sm={2} className="text-right">
                Last Name
              </Label>
              <Col sm={4}>
                <Input
                 onChange={event => this.handleUserInput(event)}
                  type="text"
                  name="lastName"
                  id="lname"
                  placeholder="Enter Last Name"
                  value={this.state.lastName}
                  autoComplete="nope"
                />
                <span style={{color : 'red'}}>{errors.lastName}</span>
              </Col>
            </FormGroup>
            <br />
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label for="age" sm={2} className="text-right">
                Age
              </Label>
              <Col sm={4}>
                <Input
                 onChange={event => this.setState({age: event.target.value.replace(/\D/,'')})}
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Enter Age"
                  value={this.state.age}
                />
              </Col>
            </FormGroup>
            <br />
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label for="days" sm={2} className="text-right">
                Days in Hospital
              </Label>
              <Col sm={6}>
                <Input
                onChange={event => this.setState({daysInHospital: event.target.value.replace(/\D/,'')})}
                  type="number"
                  name="days"
                  id="days"
                  placeholder="Days in Hospital"
                  value={this.state.daysInHospital}
                  autoComplete="nope"
                />
              </Col>
            </FormGroup>
            <br />
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label for="insurance" sm={2} className="text-right">
                Has Insurance
              </Label>
              <Col sm={6}>
                <input type="radio"   
                 onChange={event => this.setState({hasInsurance: Boolean(event.target.value)})}          
                 value= "true" name="insurance" /> Yes
                <input type="radio"
                 checked={this.state.hasInsurance == false}
                onChange={event => this.setState({hasInsurance: Boolean(event.target.value)})} 
                 value = ""  name="insurance" /> No
              </Col>
            </FormGroup>
            <br />
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label for="critical" sm={2} className="text-right">
                Is Critical
              </Label>
              <Col sm={6}>
                <input type="radio" 
                
                  onChange={event => this.setState({isCritical: Boolean(event.target.value)})} 
                value= "true"  name="critical" /> Yes
                <input type="radio" 
               checked={this.state.isCritical == false}
                 onChange={event => this.setState({isCritical: Boolean(event.target.value)})} 
                value="" name="critical" /> No
              </Col>
            </FormGroup>
            <br />
          </Col>
        </Row>
        <Button disabled={errors.firstName != '' || errors.lastName != ''} type="submit" style={{backgroundColor: 'skyblue', width:'150px',  fontFamily : 'inherit', 
        borderRadius: 3}} onClick={this.submittedData}>
          <b>Estimate</b>
        </Button>
        <br />
        <hr />
        </div>
      </div>
    );
  }
}
export default CostEstimator
