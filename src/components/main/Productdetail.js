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
  Breadcrumb,
} from "semantic-ui-react";
import "./style/Products.css";
// import Category from "./Category";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART_REQ } from "../../type";
import Comments from './comment'


function Productdetail() {
  let { productid } = useParams();
  console.log("detail" + productid);
  const [ProducDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState("ture");
  let history2 = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [value, setValue] = useState(1);

  const TITLE = 'Product Detail'

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/product/${productid}/`)
      .then((response) => {
        const res = response.data.data;
        setProductDetail(res);
        console.log("f");
      })

      .catch((error) => {
        console.log(error);
      });
    if (Productdetail) {
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }
  }, [productid]);

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dotsClass: "slick-dots  ",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    easing: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function handleAddToCart(item, num) {
    if (!user) {
      history2.push("/login");
    } else {
      dispatch({ type: ADD_TO_CART_REQ, item_id: item, quantity: num, token: user });
      alert("เพิ่มสินค้าสำเร็จ")
     
    }
  }
  function increment() {
    setValue(value + 1);
  }

  function decrement() {
    if (value !== 0) {
      setValue(value - 1);
    } 
  }


  if (!ProducDetail.image) {
    return <div />;
  }

  return (
    <div>
      {/* <Navbar /> */}
     
      <Helmet>
          <title>{ TITLE }</title>
        </Helmet>

        <div style={{ marginLeft: "1%", marginBottom:"1%" }}>
          <Breadcrumb size="large">
            <Breadcrumb.Section>
              <Link to="/home">Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section>
              <Link to="/product">Product</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section active>
              Product Detail
            </Breadcrumb.Section>
            {/* <Breadcrumb.Divider icon="right angle" /> */}
            {/* <Breadcrumb.Section active>Invoice detail</Breadcrumb.Section> */}
          </Breadcrumb>
        </div>

      <Container content>
        <Segment  raised textAlign="center">
          <Grid centered inverted>
            <Grid.Column style={{ marginRight:"2%"}} verticalAlign="middle" width={6}>
              <Slider style={{ paddingTop: "5%",marginLeft:"2%"  }} {...settings}>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Image square />
                  </Placeholder>
                ) : (
                  <Image
                  
                    rounded={true}
                    key={ProducDetail.id}
                    src={ProducDetail.image.medium_square_crop}
                  />
                )}

                {ProducDetail.image_product.map((data) => (
                  <Image key={data.id} src={data.image.medium_square_crop} />
                ))}
              </Slider>
            </Grid.Column>

            <Grid.Column width={9} textAlign={"center"}>
              <Grid.Row style={{ paddingTop: "5%" }}>
                <div>
                  <Message color="grey">
                    <p style={{color:"black"}}><strong>{ProducDetail.name}</strong></p>
                    <p style={{color:"red"}}> <strong>ราคา:  {ProducDetail.price}  บาท</strong></p>
                  </Message>
                </div>
              </Grid.Row>
              <br/>

              <Grid.Row>
                <div id="button-add">
                <Button 
                color="blue"
                textAlign="center"
                style={{width:"48px"}} 
                className="btnn"
                size="small"
                onClick={()=>decrement()}
                >
                    <Icon className="ico" name="minus"></Icon>
                </Button>
                <Input 
                style={{width:"70px"}} 
                type="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}></Input>
                
                <Button
                color="blue"
                textAlign="center"
                style={{width:"52px"}} 
                onClick={()=>increment()}
                className="btnn"
                >
                    <Icon name="plus"></Icon>
                </Button>
                </div>
              </Grid.Row>

              <Grid.Row

              style={{ marginTop: "33%", marginBottom: "3%" }}
              className="btn-row"
              >
                <Grid.Column
                className="btn-row"
                verticalAlign="bottom"
                > 
                  <Button 
                  className="btn-atc"
                  color="orange" size="huge"
                  onClick={() => handleAddToCart(productid , value)}
                  >
                    <Icon name="add to cart"></Icon>Add to Cart
                 
                  </Button>
                   

                  <Button color="red" size="huge"
                  className="btn-atc"
                  as={Link} to="/cart"
                  >
                    <Icon name="shopping basket"></Icon>View Cart
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Segment>
        <Container>

        <Comments />
      </Container>
      </Container>
      
    </div>
  );
}

export default Productdetail;
