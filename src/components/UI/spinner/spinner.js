import React from 'react'

const spinner = (props) => {
    return (
        <div className="d-flex justify-content-center" style={{margin: '20px'}}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default spinner
