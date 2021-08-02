import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Button,
  Card,
  Input,
  Message,
  Form,
  Divider,
  Segment,
 
} from "semantic-ui-react";
import "./style/counter.css";
import Navbar from "./layouts/navbar.js";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [km, setKm] = useState(0);
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    // alert("Number of clicks: " + counter);
    counter;

    return () => {
      // cleanup
    };
  }, []);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter !== 0) {
      setCounter(counter - 1);
    } else if (counter === 0) {
      alert("please add value more than 0");
    }
  }

  function handleChange(e) {
    setKm(e.target.value);
  }
  function convert(km) {
    return (km / 1.609).toFixed(2);
  }
  function handleChange2(e) {
    setNum(e.target.value);
    e.preventDefault();
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }
 
  return (
    <div>
      <Navbar />
      <Container style={{marginTop:"10%"}} content className="margin-t-counter">
     
      <Segment basic textAlign="center">
          <Divider horizontal>+ and -</Divider>
        </Segment>
        <Grid centered>
          <Card.Content>
            <Card.Header>
              <p>{counter}</p>
            </Card.Header>
            <Grid.Column>
              <Button primary onClick={increment}>
                Increment
              </Button>
              <Button onClick={decrement}>Decrement</Button>
            </Grid.Column>
          </Card.Content>
        </Grid >
        <Segment basic textAlign="center">
          <Divider horizontal>Km to Miles</Divider>
        </Segment>
        <Grid  centered className="margin-t-message">
          <Message  >
            <Input type="text" value={km} onChange={handleChange} />
            <Message.Content>{" "} {km} km is {convert(km)} miles{" "}</Message.Content> 
          </Message>
        </Grid>
        <Segment basic >
          <Divider horizontal>Form handlesubmit</Divider>
        </Segment>
         <Grid centered className="margin-t-message">
           <Grid centered >
         <Form onSubmit={handleSubmit}>
           <Message>
            <Input type="number" value={num} onChange={handleChange2} />
            <Input type="submit" value="Add" />
            <Message.Content>Sum = {sum} 

            </Message.Content>
           </Message>
          </Form>
           </Grid>
         </Grid>
       
      </Container>
    </div>
  );
}

// const el = <Counter />;
// ReactDOM.render(el, document.getElementById("root"));

export default Counter;
