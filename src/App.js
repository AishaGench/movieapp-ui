import './App.css';
import {Link, Route} from 'react-router-dom'
import MoviesPage from './components/pages/MoviesPage';
import React, { Component } from 'react'
import {
  Container,Divider,Dropdown,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,
} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
      App Component
      <br/>
      <Link to="movies">Movies</Link>
      <Route path='/movies' component={MoviesPage}></Route>
      </div>
    )
  }
}
export default App;
