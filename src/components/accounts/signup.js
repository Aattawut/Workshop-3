import React,{ useState, useDispatch } from "react";
import {
  Button,
  Form,
  Container,
  Grid,
  Segment,
  Divider,
  Message,
  Icon,
  Breadcrumb,
} from "semantic-ui-react";
import "./style/login.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


function Signup() {
  const TITLE = "Signup";

  return (

    <div>
      <div style={{ marginLeft: "1.3%", marginBottom:"2%" }}>
         
         <Breadcrumb size="large">
           <Breadcrumb.Section>
           <Link to="/home">Home</Link>  
           </Breadcrumb.Section>
           <Breadcrumb.Divider icon="right angle"/>
           <Breadcrumb.Section active >Signup</Breadcrumb.Section>
           {/* <Breadcrumb.Divider icon="right angle" /> */}
           {/* <Breadcrumb.Section active>
             Search for: <a href="#">paper towels</a>
           </Breadcrumb.Section> */}
         </Breadcrumb>
       </div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Container>
        {/* <Segment className="margin-t" basic textAlign="center">
          <Divider horizontal>
            <h1>Sign Up</h1>
          </Divider>
        </Segment> */}
        <div>
          <Message
            attached
            header="Welcome to our site!"
            content="Sign Up"
          />
          <Form size="huge" className="attached fluid segment">
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First Name"
          
                type="text"
              />
              <Form.Input
                fluid
                label="Last Name"
              
                type="text"
              />
            </Form.Group>
            <Form.Input label="Username" type="text" />
            <Form.Input label="Password" type="password" />
            <Grid centered>
              <Grid.Row>
                <Button size="large" primary type="submit">
                  Submit
                </Button>
              </Grid.Row>
            </Grid>
          </Form>
          <Message attached="bottom" warning>
            <Icon name="help" />
            Already signed up?&nbsp;<a href="/login">Login here</a>&nbsp;instead.
          </Message>
        </div>
      </Container>
 
    </div>
  )
}
export default Signup;
