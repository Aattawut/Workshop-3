import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Icon,
  Segment,
  Step,
  Sticky,
  Label,
  Image,
  Divider,
  Button,
  Item,
  Dimmer,
  Loader,
  Breadcrumb,
  
} from "semantic-ui-react";
import "./style/invoice.css";

import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { GET_INVOICE_REQ, SUBMIT_VOID_REQ } from "../../type";
import { GET_INVOICE_ITEM_REQ } from "../../type";

function Invoice() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { get_invoice } = useSelector((state) => state.get_invoice);

  let history = useHistory();
  const TITLE = "Invoice";

  const paragraph = (
    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  );
  const [Color, setColoritem] = useState("red");
  const [Status, setStatus] = useState("");

  console.log("invoice" + get_invoice);
  useEffect(() => {
    dispatch({ type: GET_INVOICE_REQ, token: user });
  }, [user]);

  function handleclickinvioce(invoiceid) {
    history.push(`/invoicedetail/${invoiceid}`);
    dispatch({
      type: GET_INVOICE_ITEM_REQ,
      invoice_id: invoiceid,
      token: user,
    });
  }

  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div style={{ marginLeft: "1%" }}>
         
         <Breadcrumb size="large">
           <Breadcrumb.Section>
           <Link to="/home">Home</Link>  
           </Breadcrumb.Section>
           <Breadcrumb.Divider icon="right angle"/>
           <Breadcrumb.Section active >Invoice</Breadcrumb.Section>
           {/* <Breadcrumb.Divider icon="right angle" /> */}
           {/* <Breadcrumb.Section active>
             Search for: <a href="#">paper towels</a>
           </Breadcrumb.Section> */}
         </Breadcrumb>
       </div>

      {!get_invoice.data ? (
        // <p>Loading...</p>
        <Dimmer inverted active>
          <Loader />
        </Dimmer>
      ) : (
        <Segment basic textAlign="center">
          {/* <Sticky> */}
          {/* <Step.Group size="big">
            <Step active href="http://google.com">
              <Icon name="truck" />
              <Step.Content>
                <Step.Title>Shipped</Step.Title>
                <Step.Description>
                  The product has been delivered.
                </Step.Description>
              </Step.Content>
            </Step>
            <Step href="http://google.com">
              <Icon name="cancel" />
              <Step.Content>
                <Step.Title>Cancel</Step.Title>
                <Step.Description>
                  You have canceled your order.
                </Step.Description>
              </Step.Content>
            </Step>
            <Step href="http://google.com">
              <Icon name="wait" />
              <Step.Content>
                <Step.Title>Waiting for Delivery</Step.Title>
                <Step.Description>In the process of shipping</Step.Description>
              </Step.Content>
            </Step>
          </Step.Group> */}
          {/* </Sticky> */}
          {/* <br />
          <br />
          <br /> */}

          <Container textAlign="left" content>
            {get_invoice.data.results.map((data) => (
              // {data.status==="Cancel" ? (setColoritem("orange")) : <div></div>}

              <Segment raised>
                <Grid.Row>
                  <Grid.Column>
                    {data.status === "Cancel" && (
                      <Label as="a" color="yellow" ribbon>
                        {data.status}
                      </Label>
                    )}
                    {data.status === "Waiting for Delivery" && (
                      <Label as="a" color="blue" ribbon>
                        {data.status}
                      </Label>
                    )}
                    {data.status === "Shipped" && (
                      <Label as="a" color="green" ribbon>
                        {data.status}
                      </Label>
                    )}

                    <Item.Group divided>
                      <Item>
                        {/* <Item.Image
                          size="small"
                          src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
                        /> */}

                        <Item.Content>
                          <Item.Header as="a">
                            <h3> ผู้ใช้งาน: &nbsp;{data.user}</h3>
                          </Item.Header>

                          <Item.Description>
                            <h3>เลขที่ใบสั่งซื้อ: &nbsp;{data.id}</h3>
                          </Item.Description>
                          <Item.Description>
                            <h3>
                              ราคาทั้งสิ้นรวม: &nbsp;{data.total}&nbsp;บาท
                            </h3>
                          </Item.Description>
                          <Item.Description>
                            <h3>
                              วันที่ทำการสั่งซื้อ: &nbsp;{data.created_datetime}
                            </h3>
                          </Item.Description>
                          <Item.Description>
                            <h3>
                              วันที่อัพเดทคำสั่งซื้อ: &nbsp;
                              {data.updated_datetime}
                            </h3>
                          </Item.Description>
                          <Item.Extra>
                            <Button
                              color="red"
                              floated="right"
                              onClick={() =>
                                dispatch({
                                  type: SUBMIT_VOID_REQ,
                                  invoice_id_void: data.id,
                                  token: user,
                                })
                              }
                            >
                              ยกเลิกคำสั่งซื้อ
                              <Icon name="right chevron" />
                            </Button>
                            <Button
                              // as={Link} to="/invoicedetail/"
                              onClick={() => handleclickinvioce(data.id)}
                              // onClick={()=>dispatch({ type: GET_INVOICE_ITEM_REQ, invoice_id: data.id, token: user })}
                              primary
                              floated="right"
                            >
                              ดูรายละเอียด
                              <Icon name="right chevron" />
                            </Button>
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Grid.Column>
                </Grid.Row>
              </Segment>
            ))}
          </Container>
        </Segment>
      )}
    </div>
  );
}

export default Invoice;
