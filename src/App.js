import "./App.css";
import {Route } from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage";
import Footer from "./components/Footer";
import Header from "./components/Header"
import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container text>
          App Component
          <br />
          <Route path="/movies" component={MoviesPage}></Route>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default App;