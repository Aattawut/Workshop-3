import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  Icon,
  Image,
  Container,
  Placeholder,
  Button,
  Segment,
  Message,
  Input,
  Divider,
  Header,
  Item,
  Sticky,
  Breadcrumb,
} from "semantic-ui-react";
import "./style/invoiceitem.css";

import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { GET_INVOICE_REQ, SUBMIT_VOID_REQ } from "../../type";

function InvoiceDetail() {
  let history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { invoice_id } = useSelector((state) => state.get_invoice_item);

  const { get_item } = useSelector((state) => state.get_invoice_item);
// console.log(get_item.total+"dd")
  const TITLE = "Invoice Detail";

  function handleclickvoid(invoiceid) {
    dispatch({
      type: SUBMIT_VOID_REQ,
      invoice_id_void: invoiceid,
      token: user,
    })
    history.push('/invoice')
    alert("คุณได้ลบใบสั่งซื้อเเล้ว");

    // if (!invoice_id) {
    // }
  }

  //   const {token} = user

  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token.access}`,
  //     },
  //   };

  //    useEffect(() => {

  //     axios
  //       .get(`http://127.0.0.1:8000/invoice/${invoiceid}/`, config)
  //       .then((response) => {
  //         const res = response.data.data;

  //         setInvoiceDetail(res);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [invoiceid])

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
            <Breadcrumb.Section>
              <Link to="/invoice">Invoice</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section active>Invoice detail</Breadcrumb.Section>
          </Breadcrumb>
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
                    color="green"
                  >
                    <Item.Group textAlign="center">
                      <Item textAlign="center">
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header
                            style={{ paddingRight: "50px" }}
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
                            รหัสรายการใบแจ้งหนี้
                          </Item.Header>
                        </Item.Content>
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header
                            style={{ paddingRight: "10px" }}
                            className="hhd"
                          >
                            ชื่อสินค้า
                          </Item.Header>
                        </Item.Content>
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header
                            style={{ paddingLeft: "60px" }}
                            className="hhd"
                          >
                            ราคาชิ้นละ
                          </Item.Header>
                        </Item.Content>
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header
                            style={{ paddingLeft: "120px" }}
                            className="hhd"
                          >
                            ราคารวม
                          </Item.Header>
                        </Item.Content>
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header
                            style={{ paddingLeft: "80px" }}
                            className="hhd"
                          >
                            จำนวน
                          </Item.Header>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Segment>
                </Sticky>
              </Grid.Column>

              {/* {get_item.map((data) => (
          <Segment>
            {data.id}
            {data.iv_product.id}
            {data.iv_product.price}
          </Segment>
        ))} */}

              {get_item.map((data) => (
                <Grid.Column width={11}>
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
                          src={data.iv_product.image.medium_square_crop}
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
                            {data.product}
                          </Item.Header>
                        </Item.Content>
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header>
                            {/* <Label>
                              <h4>ราคาชิ้นละ</h4>
                            </Label>
                            <br /> <br /> */}
                            {data.iv_product.price} บาท
                          </Item.Header>
                        </Item.Content>
                        <Item.Content className="context-name-w margin-item-content">
                          <Item.Header>
                            {/* <Label>
                              <h4>ราคารวม</h4>
                            </Label>
                            <br />
                            <br /> */}
                            {/* {get_item.reduce((sum, data) => {
                        return sum * data.iv_product.price;
                      }, data.quantity)}
                      &nbsp;บาท */}
                            {data.quantity * data.iv_product.price} บาท
                          </Item.Header>
                        </Item.Content>

                        <Item.Content className="margin-item-content">
                          <Item.Header>{data.quantity}</Item.Header>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Segment>
                </Grid.Column>
              ))}
            </Grid.Column>

            <Grid.Column className="gr-d" width={5}>
              <Sticky className="sticky-edit">
                {/* <div className="posit"> */}
                <Segment className="segment-h" raised textAlign="center">
                  <div>
                    {/* <h1 className="header-ck">Summary</h1> */}
                    <h1 className="header-ckk">
                      รหัสใบแจ้งหนี้: &nbsp;&nbsp;{invoice_id}
                    </h1>
                  </div>

                  <Divider />

                  {get_item.map((data) => (
                    <div id="textbox">
                      <p class="alignleft2 text-line-h">
                        {data.iv_product.name}
                      </p>
                      <p class="alignright2 text-line-h">
                        {data.quantity * data.iv_product.price} บาท
                      </p>
                    </div>
                  ))}

                  <div id="textbox2">
                    <p class="alignleft">ราคาทั้งหมด</p>
                    {/* {get_item.map((data) => (
                      <p class="alignright">
                        {data.total}
                        &nbsp;บาท
                      </p>
                    ))} */}
                      <p class="alignright">
                    
                      {get_item[0].total}
                      &nbsp;บาท
                    </p>
                     {/* {get_item.reduce((sum, data) => {
                        return sum + data.total;
                      }, 0)}
                      <p class="alignright">
                        {data.total}
                        &nbsp;บาท
                      </p> */}
                  </div>

                  <div id="textbox3">
                    <Button
                      color="red"
                      size="huge"
                      className="btn-bt"
                      onClick={() =>
                       
                        handleclickvoid(invoice_id)
                      }
               
                    >
                      ยกเลิกคำสั่งซื้อ
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

export default InvoiceDetail;
