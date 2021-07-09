import React from 'react'
import { connect } from 'react-redux'

export const MovieList = (props) => {
    return (
        <div>
            Movie List Page
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
