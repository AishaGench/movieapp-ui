//Created with rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import moviesReducer from '../../reducers/moviesReducer'
import PropTypes from 'prop-types'

export class MoviesPage extends Component {
    static propTypes = {movies:PropTypes.array.isRequired}
    render() {
        console.log(this.props)
        return (
            <div>
               Movies Page Component 
            </div>
        )
    }
}

//const mapStateToProps = (state) => ({movies:state.moviesReducer})
const mapStateToProps = ({moviesReducer}) => ({movies:moviesReducer})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
