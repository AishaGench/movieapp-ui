//Created with rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class MoviesPage extends Component {
    render() {
        return (
            <div>
               Movies Page Component 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
