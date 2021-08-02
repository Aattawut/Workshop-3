import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Input,
  Menu,
  Segment,
  Button,
  Icon,
  Label,
  Dropdown,
  Dimmer,
  Image,
  Loader,
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../../actions/categoryActions";
import { useHistory } from "react-router-dom";
import "../style/navbar.css";
import { setAuth } from "../../../actions/authActions";
import { getCategoryName } from "../../../actions/categorynameActions";
import { getSearchName } from "../../../actions/searchActions";

function Navbar() {
  const [ActiveItem, setActiveItem] = useState("");
  const [SearchNav, setSearchNav] = useState("ทุกหมวดหมู่");
  const { get_cart } = useSelector((state) => state.get_cart);
  const { user } = useSelector((state) => state.auth);
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  let history = useHistory();

  const pathNow = window.location.pathname
  console.log(pathNow)

  
  useEffect(() => {
    dispatch(getCategories());
    if (pathNow!==ActiveItem) {
      console.log("12345")
      setActiveItem("")
    }
  
  }, [dispatch]);

  function handleClick(productid, category_name) {
    dispatch(getCategoryName(category_name));
    history.push(`/product/category/${productid}`);
  }
  function handlelocationClick() {
    console.log("alert");
    dispatch(setAuth(null));
    window.location.href = "/home";
    localStorage.clear();
  }

  function handleClickSearch(SearchNav) {
    console.log(SearchNav)
    dispatch(getSearchName(SearchNav));
    
    // history.push(`/product/category/search/${SearchNav}`);
    // history.push(`/product/category/${category_name}`);

  }
  if (!category.data) {
    return (
      <div>
        <Dimmer inverted active>
          <Loader />
        </Dimmer>
      </div>
    );
  }

  return (
    <div className="marg-bt">
      <Menu fixed="top" pointing size="huge">
        <Menu.Item className="text-header" name="My Plant"
        as={Link}
        to={"/home"}
        >

          {/* <img src="/public/logo192.png" /> */}
          
        </Menu.Item>
        {/* {pathNow ==="/home" ? ( */}
        <Menu.Item
          name="Home"
          as={Link}
          to={"/home"}
          active={ActiveItem === "Home"}
          onClick={() => setActiveItem("Home")}
        >
        </Menu.Item>
      

        {/* <Menu.Item
          name="Products"
          as={Link}
          to={"/product"}
          active={ActiveItem === "Products"}
          onClick={() => setActiveItem("Products")}
        ></Menu.Item> */}
        {/* <Menu.Item
          name="Users"
          as={Link}
          to={"/user"}
          active={ActiveItem === "Users"}
          onClick={() => setActiveItem("Users")}
        /> */}
        {/* <Menu vertical> */}

        <Dropdown text="Categories" pointing className="link item">
          <Dropdown.Menu>
            <Dropdown.Item
            name="Categories"
            as={Link} to={"/product"}
            active={ActiveItem === "Categories"}
            >
              &nbsp;&nbsp;ทุกหมวดหมู่
            </Dropdown.Item>
            {category.data.results.map((c) => (
              <Dropdown.Item
                key={c.id}
                onClick={() => handleClick(c.id, c.name)}
              >
                <Icon name="tree"> {c.name}</Icon>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        {/* </Menu> */}


        {/* {user && (
          <Menu.Item
            name="Carts"
            as={Link}
            to="/cart"
            active={ActiveItem === "Carts"}
            onClick={() => setActiveItem("Carts")}
          >
            
            <Button basic>
              <Button.Content>
                <Label pointing="right" color="grey" size="Large">
                  {get_cart.length}
                </Label>
                <Icon color="orange" size="large" name="shop" />
              </Button.Content>
            </Button>
          </Menu.Item>
          
        )} */}
        {user ? (
          <Menu.Item
            name="Invoice"
            as={Link}
            to={"/invoice"}
            active={ActiveItem === "Invoice"}
            onClick={() => setActiveItem("Invoice")}
          >
            <Icon name="file alternate outline"></Icon>
            Invoice
          </Menu.Item>
        ) : (
          <div></div>
        )}

        <Menu.Menu position="left">
          <Menu.Item>
            {/* <Input icon="search" placeholder="Search..." 
                type="text"
                value={value}
                onChange={(e) => setSearchnav(e.target.value)}>
            </Input> */}
            <Input
                  icon="search"
                  placeholder="Search by Name"
                  type="text"
                  onChange={(e) => handleClickSearch(e.target.value)}
                />
          </Menu.Item>
        </Menu.Menu>

        {user ? (
          <Menu.Menu position="right">
            <Menu.Item
              as="a"
              name="Carts"
              as={Link}
              to="/cart"
              active={ActiveItem === "Carts"}
              onClick={() => setActiveItem("Carts")}
            >
              <Label pointing="right" color="grey" size="Large">
                {get_cart.length}
              </Label>
              <Icon color="orange" size="large" name="shop" />
            </Menu.Item>
            <Menu.Item as="a" >
              {/* <div>
                Welcome
                <br /> {user.user}
              </div> */}
              <div>
                {/* <Label basic size="large"> */}
                  <Image verticalAlign="middle"
                  
                    avatar
                    spaced="right"
                    src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                  ></Image>
                  
                    {user.user}
                   
                {/* </Label> */}
              
              </div>
            </Menu.Item>
            <Menu.Item
            // as={Link} to="/signup"
            >
              <Button primary onClick={() => handlelocationClick()}>
                Sign out
              </Button>
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item as={Link} to="/signup">
              <Button primary>Sign up</Button>
            </Menu.Item>

            <Menu.Item as={Link} to="/login">
              <Button>Sign in</Button>
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
      {/* <Segment style={{marginTop:"10%"}}>
          <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment> */}
    </div>
  );
}

export default Navbar;
