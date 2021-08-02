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
  Dimmer,
  Loader,
  Menu,
  Label,
  Input,
  Segment,
  Divider,
  Dropdown,
  Breadcrumb,
  Pagination,
} from "semantic-ui-react";
import "./style/Products.css";
import Category from "./Category";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART_REQ } from "../../type";

// import { addToCart } from "../../actions/cartActions";

function Product() {
  let { category__in } = useParams();
  // let { SearchNav } = useParams();
  let history = useHistory();
  let history2 = useHistory();

  // console.log(category__in)

  const [ProductList, setProductList] = useState([]);

  const [ActivePage, setActivePage] = useState();
  console.log(ActivePage+"fiw")
  const [loading, setLoading] = useState(true);
  const TITLE = "Product";
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  // const { add_cart } = useSelector((state) => state.add_cart);

  const [activeItem, setActiveitem] = useState("");
  const [Header, setHeader] = useState("All Products");
  const [Sort, setSort] = useState("");
  const [Search, setSearch] = useState("");
  const [Count, setCount] = useState(6);

  // console.log({Count}+"testttttt")

  const { category_name } = useSelector((state) => state.categ_name);
  const { searchnav } = useSelector((state) => state.search_text);

  useEffect(() => {
    setHeader(category_name);
    setLoading(true);
    setSearch(searchnav);

    if (ProductList) {
      getData();

      setTimeout(() => {
        setLoading(false);
      }, 400);
    }
  }, [category__in, Sort, Search, searchnav, ActivePage]);

  const getData = async () => {
    // setLoading(true)
    const response = await axios.get("http://127.0.0.1:8000/product/", {
      params: {
        page : ActivePage,
        page_size : 6,
        category__in: category__in,
        is_enabled: true,
        sort: Sort,
        search: Search,
        // search: searchnav,
      },
    });

    const res = await response.data.data.results;
    const count = await response.data.data;
    setCount(count.count)
    // console.log(count.count+"sdsdsdsd");
    setProductList(res);
    // setLoading(false)
  };
  function handleClick(productid) {
    console.log("list" + productid);
    history.push(`/productdetail/${productid}`);
  }

  function handleAddToCart(item, num) {
    if (!user) {
      history2.push("/login");
    } else {
      dispatch({
        type: ADD_TO_CART_REQ,
        item_id: item,
        quantity: num,
        token: user,
      });
    }
  }
  function handlePaginationChange(e, d) {
    console.log(e+"fiwwwww")
    setActivePage(d.activePage)

  }
  // if (loading){
  //   return  <div></div>
  // //   <Dimmer inverted active>
  // //   <Loader />
  // // </Dimmer>
  // }else {

  return (
    <React.Fragment>
      <div style={{ marginLeft: "1%" }}>
        <Breadcrumb size="large">
          <Breadcrumb.Section>
            <Link to="/home">Home</Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section>
            <Link to="/product">Product</Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>Category</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>{Header}</Breadcrumb.Section>
          {/* <Breadcrumb.Divider icon="right angle" /> */}
          {/* <Breadcrumb.Section active>
             Search for: <a href="#">paper towels</a>
           </Breadcrumb.Section> */}
        </Breadcrumb>
      </div>

      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {/* <Container fluid textAlign="center"> */}
          {/* <Grid centered>
            <Grid.Row> */}
      <Segment className="mg-t" basic textAlign="center">
        <h2>หมวดหมู่:&nbsp;&nbsp;{Header}</h2>
      </Segment>

            {/* </Grid.Row>
          </Grid> */}
      {/* </Container> */}

      <Grid celled="internally">
        <Grid.Row>
          {/* <Grid.Column width={2}>
            <div></div>
          </Grid.Column> */}

          <Grid.Column  width={3}>
           
                <Category />
              
          </Grid.Column>

          <Grid.Column width={10}>
            <Grid centered>
              {ProductList.map((Product) => (
                <Grid.Column width={5}>
                  <Card centered className="bg-sh">
                    {loading ? (
                      <Placeholder>
                        <Placeholder.Image square />
                      </Placeholder>
                    ) : (
                      <Image
                        key={Product.id}
                        src={Product.image.medium_square_crop}
                      />
                    )}
                    {loading ? (
                      <Placeholder>
                        <Placeholder.Header>
                          <Placeholder.Line length="very short" />
                          <Placeholder.Line length="medium" />
                          <Placeholder.Line length="short" />
                        </Placeholder.Header>
                      </Placeholder>
                    ) : (
                      <Card.Content>
                        <Card.Header>{Product.name} </Card.Header>
                        <Card.Description>
                          <strong>{Product.price} </strong>บาท
                        </Card.Description>

                        <Card.Description>{Product.detail}</Card.Description>
                      </Card.Content>
                    )}
                    <Card.Content>
                      <div className="ui two buttons">
                        <Button basic color="orange" animated="vertical">
                          <Button.Content
                            hidden
                            onClick={() => handleAddToCart(Product.id, 1)}
                          >
                            Add to Cart
                          </Button.Content>
                          <Button.Content visible>
                            <Icon size="large" name="add to cart" />
                          </Button.Content>
                        </Button>
                        <Button
                          basic
                          color="green"
                          animated="vertical"
                          onClick={() => handleClick(Product.id)}
                        >
                          <Button.Content hidden>View Detail</Button.Content>
                          <Button.Content visible>
                            <Icon size="large" name="eye" />
                          </Button.Content>
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))}
            </Grid>
            {ProductList.length!==0 ? (
            <Grid centered>
              <Grid.Row centered>
                {/* <Grid.Column centered> */}
                  <Pagination
                    centered
                    boundaryRange={0}
                    activePage={ActivePage}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={ Count%6 }
                    onPageChange={(e, d)=> handlePaginationChange(e, d)}
                  />
                {/* </Grid.Column> */}
              </Grid.Row>
            </Grid>
            ) : <div></div>}
          </Grid.Column>
          <Grid.Column width={3}>
            <Menu centered vertical>
              <Menu.Item
                color="blue"
                name="asc"
                active={Sort === "asc"}
                onClick={() => setSort("asc")}
              >
                {/* <Label color="teal">1</Label> */}
                <Icon name="sort amount up" />
                ราคาจากน้อยไปมาก
              </Menu.Item>

              <Menu.Item
                color="blue"
                name="desc"
                active={Sort === "desc"}
                onClick={() => setSort("desc")}
              >
                {/* <Label>51</Label> */}
                <Icon name="sort amount down" />
                ราคาจากมากไปน้อย
              </Menu.Item>

              {/* <Menu.Item>
                <Input
                  icon="search"
                  placeholder="Search by Name"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Menu.Item> */}
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* <Footer /> */}

      {/* {Product !== 0 ? <Footer /> : <div></div>} */}
      {/* {!loading ? <Footer /> : <div></div>} */}
    </React.Fragment>
  );
}

export default Product;
