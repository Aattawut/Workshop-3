import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  Reveal,
  Message,
  Segment,
  Divider,
} from "semantic-ui-react";
import { Helmet } from "react-helmet";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import { useHistory, Link } from "react-router-dom";
import "./style/home.css";
import { getCategories } from "../../actions/categoryActions";
import Productrecommend from "./productrecommend";

function Homepage() {
  const { category } = useSelector((state) => state.category);
  const [loading, setLoading] = useState(true);
  let history = useHistory();
  const dispatch = useDispatch();

  const TITLE = "Home";

  useEffect(() => {
    // dispatch(getCategories());
    // setLoading(false);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  function handleClick(category__in) {
    console.log(category__in);
    history.push(`/product/category/${category__in}`);
  }
  // if (!category.data) {
  //   return <p>Loading...</p>
  // }

  return (
    <div>
     
      {!category.data ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Helmet>
            <title>{TITLE}</title>
          </Helmet>

          <Container>
            <Segment basic textAlign="center">
              <Button
                className="shd-t"
                color="orange"
                size="huge"
                as={Link}
                to="/product"
              >
                Category All
                <Icon
                  color="blue"
                  name="arrow alternate circle right outline"
                ></Icon>
              </Button>
            </Segment>

            <Segment placeholder color="orange">
              <Grid verticalAlign="middle">
                <Grid.Row verticalAlign="middle" columns={4}>
                  {category.data.results.map((categories) => (
                    <Grid.Column>
                      <Reveal style={{ margin: "1%" }} animated="move">
                        <Reveal.Content visible>
                          {loading ? (
                            <Card centered>
                              <Placeholder style={{ height: 240, width: 250 }}>
                                <Placeholder.Image />
                              </Placeholder>
                            </Card>
                          ) : (
                            <Image
                              key={categories.id}
                              src={categories.image.medium_square_crop}
                            />
                          )}
                        </Reveal.Content>
                        <Reveal.Content hidden>
                          <Button
                            key={categories.id}
                            className="btn-center"
                            color="orange"
                            onClick={() => handleClick(categories.id)}
                          >
                            <div className="btn-center-t">
                              <h4>{categories.name}</h4>
                            </div>
                            <Icon
                              color="blue"
                              size="large"
                              name="arrow alternate circle right outline"
                            ></Icon>
                          </Button>
                        </Reveal.Content>
                      </Reveal>
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
            </Segment>
          </Container>
          {/* {!loading ? <Footer /> : <div></div>} */}
        </div>
      )}
      <Productrecommend/>
    </div>
  );
}

export default Homepage;
