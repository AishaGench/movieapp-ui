import React from 'react'
import { connect } from 'react-redux'

export const MovieList = (props) => {
    const movieList =<div>Movies List is ready and here...</div>
    const emptyMessage =<div>Thefe is no any movies yet...</div>
    return (
        <div>
        {props.movies.lenght === 0 ? emptyMessage : movieList}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
