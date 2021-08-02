import React, { useEffect } from "react";
import {
  Button,
  Form,
  Container,
  Grid,
  Segment,
  Divider,
  Checkbox,
  Message,
  Icon,
  Loader,
  Breadcrumb,
} from "semantic-ui-react";

import "./style/login.css";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect, Route } from "react-router";

import { fetchAuthAsync } from "../../actions/authActions";
import {GET_CART_REQ} from '../../type'

function Login() {
  const TITLE = "Login";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => state.auth);
  const  islogin  = useSelector((state) => state.auth);
  // const lo  = useSelector((state) => console.log(state.auth));

  const dispatch = useDispatch();
  let history = useHistory();

  const { loading, error } = useSelector((state) => state.status);
  

  useEffect(() => {
    console.log('login'+islogin.islogin)
    if (islogin.islogin) {
      history.push('/home')
      dispatch({ type: GET_CART_REQ, token: user });
   
    }else {
      history.push('/login')
    }
    
  }, [islogin]);

  const handleclick= ()=> {
    dispatch(fetchAuthAsync(username, password))
    
    
    //console.log('login3'+islogin.islogin)
   
  
  }
  

  return (
    <div>
       <div style={{ marginLeft: "1.3%", marginBottom:"2%" }}>
         
         <Breadcrumb size="large">
           <Breadcrumb.Section>
           <Link to="/home">Home</Link>  
           </Breadcrumb.Section>
           <Breadcrumb.Divider icon="right angle"/>
           <Breadcrumb.Section active >Login</Breadcrumb.Section>
           {/* <Breadcrumb.Divider icon="right angle" /> */}
           {/* <Breadcrumb.Section active>
             Search for: <a href="#">paper towels</a>
           </Breadcrumb.Section> */}
         </Breadcrumb>
       </div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Container className="bt-mg-b">
        <div>
          <Message attached header="Welcome to our site!" content="Sign In" />
          <Form size="huge" className="attached fluid segment">
            <Form.Field>
              <label >Username</label>
              <input
            
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label >Password</label>
              <input
              
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Field>
            <Grid centered>
              <Grid.Row>
                
                {error ?  <p style={{color:'red',fontSize:'20px',padding:'1%'}}> Username or Password is invalid </p>: <div></div> }
                <Button
                  size="large"
                  primary
                  type="submit"
                  
                  onClick={() => handleclick()}
                >
                  {loading ? <Loader inverted active inline='centered' /> : "Submit" } 
              
                </Button>
              </Grid.Row>
            </Grid>
          </Form>
          <Message attached="bottom" warning>
            <Icon name="help" />
            Don't have an account yet?&nbsp;<a href="/signup">Signup here</a>
            &nbsp;
          </Message>
        </div>
      </Container>
     
    </div>
  );
}
export default Login;
