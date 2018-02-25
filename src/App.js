import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  BrowserRouter,
  NavLink
} from 'react-router-dom';
import './App.css';

const Home = () => {
  return <h1> Hello I am the home component </h1>;
};

const Contact = () => {
  return <h1> Contact page </h1>;
};

const NotFound = () => {
  return <h1> You broke the internet </h1>;
};

const hello = () => {
  return <h1> This is abstracted </h1>;
};

const Posts = ({ match }) => (
  <div>
    <h1>Blog</h1>
    <Route
      path={`${match.url}/:name`}
      render={({ match }) => <h2>{match.params.name}</h2>}
    />
  </div>
);

const Header = ({ history, props }) => {
  console.log(props);
  return <button onClick={() => history.push('/')}>Go Home</button>;
};

const NavBar = () => {
  return (
    <div>
      <NavLink to="/" exact activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/contact" activeClassName="selected">
        Contact
      </NavLink>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts" component={Posts} />
            <Route path="/header" component={Header} />
            <Redirect from="/old" to="/contact" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
