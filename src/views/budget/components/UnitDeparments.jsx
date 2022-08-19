import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CircularProgressbar from 'components/common/CircularProgressbar/CircularProgressbar'

const UnitDeparments = () => {
  return (
    <Card className="unit-deparments section-gray">
      <Card.Body>
        <h2 className="budget-subtitle">Unit 2 Departments</h2>

        <Row>
          <Col>
            <Card>
              <Card.Body>
                <div className="unit-deparments-header">
                  <div>
                    <Card.Subtitle>Department</Card.Subtitle>
                    <h5>Lorem Ipsum Dolor</h5>
                  </div>
                  <div className="text-end">
                    <Card.Subtitle>Trend</Card.Subtitle>
                    <h5>9392939129</h5>
                  </div>
                </div>

                <Card className="card-outline-green mb-3">
                  <Card.Body className="d-flex justify-content-evenly align-items-center">
                    <CircularProgressbar radio="50" percent="50" color="green" />
                    <div>
                      <Card.Subtitle>Spending</Card.Subtitle>
                      <h2>$500,000</h2>
                      <Card.Subtitle>Year to date Spend</Card.Subtitle>
                      <h3>$750,000</h3>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="card-outline-green mb-3">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="text-gray mb-1">Variance in spend</h5>
                      <h2>$50,000</h2>
                    </div>
                    <div className="text-end">
                      <Card.Subtitle>Available Budget</Card.Subtitle>
                      <h4>$200,000</h4>
                      <Card.Subtitle>Planned Spend</Card.Subtitle>
                      <h4>$10,000</h4>
                    </div>
                  </Card.Body>
                </Card>
                <div className="text-center mt-4 mb-3">
                  <button className="btn btn-app rounded" type="button">
                    Details
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <div className="unit-deparments-header">
                  <div>
                    <Card.Subtitle>Department</Card.Subtitle>
                    <h5>Lorem Ipsum Dolor</h5>
                  </div>
                  <div className="text-end">
                    <Card.Subtitle>Trend</Card.Subtitle>
                    <h5>9392939129</h5>
                  </div>
                </div>

                <Card className="card-outline-orange mb-3">
                  <Card.Body className="d-flex justify-content-evenly align-items-center">
                    <CircularProgressbar radio="50" percent="60" color="orange" />
                    <div>
                      <Card.Subtitle>Spending</Card.Subtitle>
                      <h2>$500,000</h2>
                      <Card.Subtitle>Year to date Spend</Card.Subtitle>
                      <h3>$750,000</h3>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="card-outline-orange mb-3">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="text-gray mb-1">Variance in spend</h5>
                      <h2>$50,000</h2>
                    </div>
                    <div className="text-end">
                      <Card.Subtitle>Available Budget</Card.Subtitle>
                      <h4>$200,000</h4>
                      <Card.Subtitle>Planned Spend</Card.Subtitle>
                      <h4>$10,000</h4>
                    </div>
                  </Card.Body>
                </Card>
                <div className="text-center mt-4 mb-3">
                  <button className="btn btn-app rounded" type="button">
                    Details
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <div className="unit-deparments-header">
                  <div>
                    <Card.Subtitle>Department</Card.Subtitle>
                    <h5>Lorem Ipsum Dolor</h5>
                  </div>
                  <div className="text-end">
                    <Card.Subtitle>Trend</Card.Subtitle>
                    <h5>9392939129</h5>
                  </div>
                </div>

                <Card className="card-outline-red mb-3">
                  <Card.Body className="d-flex justify-content-evenly align-items-center">
                    <CircularProgressbar radio="50" percent="90" color="red" />
                    <div>
                      <Card.Subtitle>Spending</Card.Subtitle>
                      <h2>$500,000</h2>
                      <Card.Subtitle>Year to date Spend</Card.Subtitle>
                      <h3>$750,000</h3>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="card-outline-red mb-3">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="text-gray mb-1">Variance in spend</h5>
                      <h2>$50,000</h2>
                    </div>
                    <div className="text-end">
                      <Card.Subtitle>Available Budget</Card.Subtitle>
                      <h4>$200,000</h4>
                      <Card.Subtitle>Planned Spend</Card.Subtitle>
                      <h4>$10,000</h4>
                    </div>
                  </Card.Body>
                </Card>
                <div className="text-center mt-4 mb-3">
                  <button className="btn btn-app rounded" type="button">
                    Details
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default UnitDeparments
