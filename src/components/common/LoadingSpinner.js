import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadingSpinner = () => {
  return (
    <div
      className="position-fixed vh-100 vw-100 top-0 start-0"
      style={{
        zIndex: '999999',
        background: '#00000038'
      }}
    >
      <div className="position-absolute start-50 top-50 translate-middle">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  )
}

export default LoadingSpinner
