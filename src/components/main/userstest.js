import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid } from "semantic-ui-react";
import { getUsers } from "../../actions/userActions";
import Navbar from "./layouts/navbar";

class users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props.users;
    console.log(users);

    return (
      <div className="App">
          <Navbar/>
        <Container >
          <Grid centered>
            <Grid.Column>
              {users.map((u) => (
                <React.Fragment key={u.id}>
                  <h1>{u.name}</h1>
                </React.Fragment>
              ))}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { getUsers })(users);
