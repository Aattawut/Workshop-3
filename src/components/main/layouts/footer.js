import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import '../layouts/footer.css'

const Footer = () => (
  <div className="footer-a" style={{marginTop:"10%"}}>


    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' ,bottom:'0'}}>
      <Container textAlign='center'>
        {/* <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid> */}

        {/* <Divider inverted section /> */}
        {/* <Image centered size='mini' src='/logo.png' /> */}
        <List horizontal inverted divided link size='small'>
          
          <List.Item as='a' href='#'>
            <h1>Copyright © 2021 Intelligent Bytes Co., Ltd. All Rights Reserved.</h1>
          </List.Item>
         
        </List>
      </Container>
    </Segment>
    {/* <Footer wait={1000} /> */}
  </div>
)

export default Footer;