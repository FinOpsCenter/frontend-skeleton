import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BusinessUnits from './components/BusinessUnits'
import SemiCircularProgressbar from 'components/common/SemiCircularProgressbar/SemiCircularProgressbar'

import './Budget.scss'
import CircularProgressbar from 'components/common/CircularProgressbar/CircularProgressbar'

const Budget = () => {
  return (
    <div className="budget-view">
      <Card className="budget-content">
        <Card.Body>
          <h1 className="page-title">CCoE</h1>
          <Row>
            <Col>
              <Card className="card-semi-circular-progressbar card-with-shadow mb-3">
                <Card.Body className="d-flex">
                  <div className="card-progressbar">
                    <Card.Title className="mb-5">Year To Date Spend 2022</Card.Title>
                    <SemiCircularProgressbar percent="15" radio="120" />
                  </div>

                  <Card className="card-color card-green">
                    <Card.Body>
                      <Card.Subtitle>Year to date Spend</Card.Subtitle>
                      <h2>$50,000</h2>
                      <Card.Subtitle>Total Budget</Card.Subtitle>
                      <h3>$750,000</h3>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-semi-circular-progressbar card-with-shadow mb-3">
                <Card.Body className="d-flex justify-content-between">
                  <div className=" card-progressbar">
                    <Card.Title className="mb-5">Variance in spend</Card.Title>
                    <SemiCircularProgressbar percent="50" radio="120" />
                  </div>

                  <Card className="card-color card-orange">
                    <Card.Body>
                      <Card.Subtitle>Variance in spend</Card.Subtitle>
                      <h2>$50,000</h2>
                      <Card.Subtitle>Available Budget</Card.Subtitle>
                      <h3>$100,000</h3>
                      <Card.Subtitle>Planned Spend</Card.Subtitle>
                      <h3>$50,000</h3>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <BusinessUnits />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="section-gray">
                <Card.Body>
                  <h2 className="budget-subtitle">Unit 2 Departments</h2>

                  <Row>
                    <Col>
                      <Card>
                        <Card.Body>
                          <CircularProgressbar radio="60" percent="10" />
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Budget
