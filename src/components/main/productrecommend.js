import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Segment,
  Placeholder,
  Image,
  Card,
  Icon,
} from "semantic-ui-react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import "./style/prorec.css"


export default function Productrecommend() {
  const [ProducRecommend, setProducRecommend] = useState([]);
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  const TITLE = "Product Recommend";

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/product/", {
        params: {
          recommend: true,

          // search: searchnav,
        },
      })
      .then((response) => {
        const res = response.data.data.results;
        setProducRecommend(res);
        console.log(ProducRecommend);
      })

      .catch((error) => {
        console.log(error);
      });
    if (ProducRecommend) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, []);

  function handleClick(category__in) {
    console.log(category__in+"a");
    history.push(`/productdetail/${category__in}`);
  }

  return (
    <div>
      <Container style={{ marginTop: "2%" }}>
        <Segment color="blue" >
          <Grid >
            <Grid.Row columns={2}>
              <Grid.Column textAlign="left">
          <h3>สินค้าแนะนำ</h3>

              </Grid.Column>
              <Grid.Column 
              as={Link} to="/product"
              textAlign="right">
          <h4>ดูเพิ่มเติม

          <Icon name="chevron right"></Icon>
          </h4>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        {/* </Segment>
        <Segment> */}
          <Grid>
            <Grid.Row verticalAlign="middle" columns={4}>
              {ProducRecommend.map((data) => (
                <Grid.Column>
                  <Card className="zoom">

                  {loading ? (
                    <Placeholder>
                      <Placeholder.Image square />
                    </Placeholder>
                  ) : (
                    <Image 
                    as="a"
                    onClick={() => handleClick(data.id)}
                     src={data.image.medium_square_crop} />
                    )}
                    <Card.Content 
                    
                    textAlign="center">
                      {data.name}
                    </Card.Content>
                    </Card>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
}
