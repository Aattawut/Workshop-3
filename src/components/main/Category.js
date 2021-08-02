import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  Icon,
  Image,
  Container,
  Button,
  Divider,
  Segment,
  Menu,
  Label,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import "./style/Category.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryName } from "../../actions/categorynameActions";



function Category() {
  let history = useHistory();
  const [CategoryList, setCategoryList] = useState([]);
  const  {category}  = useSelector((state) => state.category);
  

  const [activeItem, setActiveitem] = useState("");
  const dispatch = useDispatch();


  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/category/")
  //     .then((response) => {
  //       const res = response.data.data.results;
  //       setCategoryList(res);
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
 
  // useEffect(() => {
    
    
  // }, [dispatch ,activeItem ]);


  function handleClick(category__in, category_name) {
    setActiveitem(category__in)
    console.log(category_name)
    dispatch(getCategoryName(category_name));
    history.push(`/product/category/${category__in}`);
    // history.push(`/product/category/${category_name}`);

  }
  function handleonclick() {
    dispatch(getCategoryName("ทั้งหมด"));
    setActiveitem("all")

  }

  return (
    <div>
    {!category.data ?  
      <Dimmer inverted active>
          <Loader />
        </Dimmer>: 
      <div>
      <Menu floated="right" pointing vertical>
        <Menu.Item   
        color="orange"
        name="all"
        active={activeItem === "all"}
        // onClick={()=>setActiveitem("all")}
        onClick={()=>handleonclick()}
        as={Link} to="/product"
        >
          <strong>ทุกหมวดหมู่</strong>
          <Label color="teal">{category.data.count}</Label>
        </Menu.Item>
       
        {category.data.results.map((data) => (
          <Menu.Item
            key={data.id}
            color="orange"
            name={data.name}
            active={activeItem === data.id}
            
            onClick={() => handleClick(data.id, data.name)}
          >
            {data.name}
       
          </Menu.Item>
        ))}
      </Menu>
      </div>
   } 
  </div>
  );
}

export default Category;
