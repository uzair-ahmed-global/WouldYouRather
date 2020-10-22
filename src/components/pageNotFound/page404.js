import React from 'react'

const Page404 = () => {
    return (
        <div className='d-flex justify-content-center h-100' style={{ margin: '20px 0px' }}>
            <div className="card mb-3" style={{ maxWidth: '540px', minWidth: '300px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src='404.png' className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8 align-self-center">
                        <div className="card-body">
                            <h5 className="card-title">PAGE NOT FOUND</h5>
                            <p className="card-text font-weight-bold text-center">Are you lost?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page404
