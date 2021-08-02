import React, { useEffect, useState, createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  Grid,
  Icon,
  Image,
  Item,
  Label,
  Input,
  Segment,
  Divider,
  Sticky,
  Confirm,
  Breadcrumb,
} from "semantic-ui-react";
import _ from "lodash";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import "./style/cart.css";
import { useHistory } from "react-router-dom";
// import { deleteCart } from "../../actions/cartActions";
// import { getCart } from "../../actions/cartapiActions";
import {
  GET_CART_REQ,
  DELETE_CART_REQ,
  EDIT_CART_REQ,
  CHECKOUT_REQ,
} from "../../type";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Cart() {
  const paragraph = (
    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  );

  let history = useHistory();
  

  const TITLE = "Cart";
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { get_cart } = useSelector((state) => state.get_cart);
  const { user } = useSelector((state) => state.auth);
  const [context, setContext] = useState("");
  const [value, setValue] = useState();

  const [Open, setOpen] = useState(false);
  const [Result, setResult] = useState("show the modal to capture a result");
  // state = { open: false, result: 'show the modal to capture a result' }

  // show = () => this.setState({ open: true })
  // const { open, result } = this.state

  // handleConfirm = () => this.setState({ result: 'confirmed', open: false })
  // handleCancel = () => this.setState({ result: 'cancelled', open: false })

  useEffect(() => {
    dispatch({ type: GET_CART_REQ, token: user });
  }, [user, value]);

  function show(id) {
    setOpen(true);
    setValue(id)
  }
  // console.log(value)
  function handleConfirm(e) {
    setResult("confirmed");
    dispatch({ type: DELETE_CART_REQ, cart_item: e, token: user });

    setOpen(false);
    // console.log("confirm")
    // console.log({Open})
  }
  function handleCancel() {
    setResult("cancelled");
    setOpen(false);
    // console.log("cancel")
    // console.log({Open})
  }


  function handledeletecart(value) {
    dispatch({ type: DELETE_CART_REQ, cart_item: value, token: user });
  }

  function handlecheckout() {
    console.log(user);
    if (get_cart.length === 0) {
      alert("กรุณาเพิ่มสินค้าก่อนทำการสั่งซื้อ");
    }
    if (get_cart.length !== 0) {
      history.push("/invoice");
      dispatch({ type: CHECKOUT_REQ, token: user });
      alert("คุณได้สร้างใบสั่งซื้อเเล้ว");
    }
  }

  function increment(id, valuu) {
    dispatch({
      type: EDIT_CART_REQ,
      cart_id: id,
      quantity: valuu + 1,
      token: user,
    });
  }

  function decrement(id, valuu) {
    if (valuu !== 0) {
      dispatch({
        type: EDIT_CART_REQ,
        cart_id: id,
        quantity: valuu - 1,
        token: user,
      });
    } else {
      alert("คุณยืนยันที่ตะลบสินค้าหรือไม่");
    }
  }

  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <Container fluid>
        <div style={{ marginLeft: "1%" }}>
          <Breadcrumb size="large">
            <Breadcrumb.Section>
              <Link to="/home">Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section active>Cart</Breadcrumb.Section>
            {/* <Breadcrumb.Divider icon="right angle" /> */}
            {/* <Breadcrumb.Section active>
              Search for: <a href="#">paper towels</a>
            </Breadcrumb.Section> */}
          </Breadcrumb>
          {/* <Divider/> */}
        </div>
        <Grid celled="internally ">
          <Grid.Row>
            <Grid.Column width={11}>
              <Grid.Column className="pboat" width={11}>
                <Sticky className="sticky-edit">
                  <Segment
                    textAlign="center"
                    className="segment-p"
                    inverted
                    color="blue"
                  >
                    <Item.Group textAlign="center">
                      <Item textAlign="center">
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header
                            style={{ paddingRight: "30px" }}
                            className="hhd"
                          >
                            รูปสินค้า
                          </Item.Header>
                        </Item.Content>

                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header
                            style={{ paddingRight: "30px" }}
                            className="hhd"
                          >
                            รหัสตระกร้าสินค้า
                          </Item.Header>
                        </Item.Content>
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header
                            style={{ paddingRight: "0px" }}
                            className="hhd"
                          >
                            ชื่อสินค้า
                          </Item.Header>
                        </Item.Content>
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header
                            style={{ paddingLeft: "40px" }}
                            className="hhd"
                          >
                            ราคาชิ้นละ
                          </Item.Header>
                        </Item.Content>
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header
                            style={{ paddingLeft: "80px" }}
                            className="hhd"
                          >
                            ราคารวม
                          </Item.Header>
                        </Item.Content>
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header
                            style={{ paddingLeft: "120px" }}
                            className="hhd"
                          >
                            จำนวน
                          </Item.Header>
                        </Item.Content>
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header
                            style={{ paddingLeft: "60px" }}
                            className="hhd"
                          >
                            ลบสินค้า
                          </Item.Header>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Segment>
                </Sticky>
              </Grid.Column>

              {get_cart.length === 0 ? (
                <p style={{ marginTop: "7%" }}> Cart is Empty </p>
              ) : (
                get_cart.map((data) => (
                  <Grid.Column width={11}>
                    <div>
                      {get_cart.length === 0 ? (
                        <p>Cart is Empty</p>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <Segment
                      className="segment-item "
                      style={{ marginTop: ".1%" }}
                      raised
                      textAlign="center"
                    >
                      <Item.Group divided>
                        <Item>
                          <Item.Image
                            size="small"
                            src={
                              "http://127.0.0.1:8000" +
                              data.cart_product.image.medium_square_crop
                            }
                          />
                          <Item.Content className="context-name-w margin-item-content">
                            <Item.Header>
                              {/* <Label>
                              <h4>รหัสตระกร้าสินค้า</h4>
                            </Label>
                            <br /> <br /> */}
                              {data.id}
                            </Item.Header>
                          </Item.Content>
                          <Item.Content className="context-name-w margin-item-content">
                            <Item.Header>
                              {/* <Label>
                              <h4>ชื่อสินค้า</h4>
                            </Label>
                            <br /> <br /> */}
                              {data.cart_product.name}
                            </Item.Header>
                          </Item.Content>
                          <Item.Content className="context-name-w margin-item-content">
                            <Item.Header>
                              {/* <Label>
                              <h4>ราคาชิ้นละ</h4>
                            </Label>
                            <br /> <br /> */}
                              {data.cart_product.price} บาท
                            </Item.Header>
                          </Item.Content>
                          <Item.Content className="context-name-w margin-item-content">
                            <Item.Header>
                              {/* <Label>
                              <h4>ราคารวม</h4>
                            </Label>
                            <br />
                            <br /> */}
                              {data.total} บาท
                            </Item.Header>
                          </Item.Content>

                          <Item.Content className="margin-item-content">
                            <Grid textAlign="center">
                              <Grid.Column>
                                {/* <Label>
                                <h4>จำนวนสินค้า</h4>
                              </Label>
                              <br /> <br /> */}
                                <Grid.Row>
                                  <div id="button-add">
                                    <Button
                                      color="blue"
                                      textAlign="center"
                                      style={{ width: "48px" }}
                                      className="btnn"
                                      size="small"
                                      onClick={() =>
                                        decrement(data.id, data.quantity)
                                      }
                                    >
                                      <Icon className="ico" name="minus"></Icon>
                                    </Button>
                                    <Input
                                      textAlign="center"
                                      // className="centerr"
                                      style={{ width: "60px" }}
                                      type="value"
                                      value={data.quantity}
                                      // onChange={(e) => setValue(e.target.value)}
                                      // {e = 0 ? alert("ลบ")}
                                      onChange={(e) =>
                                        dispatch({
                                          type: EDIT_CART_REQ,
                                          cart_id: data.id,
                                          quantity: e.target.value,
                                          token: user,
                                        })
                                      }
                                    ></Input>

                                    <Button
                                      color="blue"
                                      textAlign="center"
                                      style={{ width: "52px" }}
                                      onClick={() =>
                                        increment(data.id, data.quantity)
                                      }
                                      className="btnn"
                                    >
                                      <Icon name="plus"></Icon>
                                    </Button>
                                  </div>
                                </Grid.Row>
                                {/* <Input placeholder={data.id.length} /> */}
                              </Grid.Column>
                            </Grid>
                          </Item.Content>
                          <Item.Content className="margin-item-content">
                            <Grid>
                              <Grid.Column>
                                {/* <p>
                                  Result: <em>{Result}</em>
                                </p> */}
                                <div>
                                  <Button
                                    color="red"
                                    size="mini"
                                    // onClick={() => handledeletecart(data.id)}
                                    onClick={() => show(data.id)}
                                  >
                                    <Icon className="icon-pd" name="x" />
                                  </Button>
                                </div>
                              </Grid.Column>
                            </Grid>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Segment>
                  </Grid.Column>
                ))
              )}
            </Grid.Column>
             {/* Modal confirm  */}
            <Confirm
              open={Open}
              onCancel={() => handleCancel()}
              onConfirm={() => handleConfirm(value)}
            />
            <Grid.Column className="gr-d" width={5}>
              <Sticky className="sticky-edit">
                {/* <div className="posit"> */}
                <Segment textAlign="center">
                  <div>
                    <h1 className="header-ck">Summary</h1>
                  </div>
                  <Divider />

                  {get_cart.map((data) => (
                    <div id="textbox">
                   

                      <p class="alignleft2 text-line-h">
                        {data.cart_product.name}
                      </p>
                      <p class="alignright2 text-line-h pp">{data.total} บาท </p>
                   
                     </div> 
                  ))}

                  <div id="textbox2">
                    <p class="alignleft">ราคาทั้งหมด</p>
                    <p class="alignright">
                      {/* {get_cart.reduce((sum, data) => sum + data.total, 0)} */}
                      {/* {numeral(summ).format('0,0')} */}
                      {get_cart.reduce((sum, data) => {
                        return sum + data.total;
                      }, 0)}
                      &nbsp;บาท
                    </p>
                  </div>

                  <div id="textbox3">
                    <Button
                      color="red"
                      size="huge"
                      className="btn-bt"
                      onClick={() => handlecheckout()}
                      // onClick={()=> dispatch({ type: CHECKOUT_REQ, token:user })}
                    >
                      Checkout
                    </Button>

                    <Button
                      as={Link}
                      to="/invoice"
                      color="blue"
                      size="huge"
                      className="btn-bt2"
                    >
                      View Invoices
                    </Button>
                  </div>
                </Segment>
                {/* </div> */}
              </Sticky>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
