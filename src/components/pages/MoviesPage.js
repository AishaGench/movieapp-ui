//Created with rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import moviesReducer from '../../reducers/moviesReducer'
import PropTypes from 'prop-types'
import MovieList from '../MovieList'

export class MoviesPage extends Component {
    static propTypes = {movies:PropTypes.array.isRequired}
    render() {
        console.log(this.props)
        return (
            <div>
               Movies Page Component 
               <br/>
               <MovieList movies={this.props.movies}/>
            </div>
        )
    }
}

//const mapStateToProps = (state) => ({movies:state.moviesReducer})
const mapStateToProps = ({moviesReducer}) => ({movies:moviesReducer})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
