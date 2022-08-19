import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SemiCircularProgressbar from 'components/common/SemiCircularProgressbar/SemiCircularProgressbar'

const BusinessUnits = (props) => {
  return (
    <Card className="section-gray">
      <Card.Body>
        <h2 className="budget-subtitle">Business Units</h2>
        <Row>
          <Col>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="text-center mb-4">Unit 1</Card.Title>
                <div className="d-flex justify-content-evenly align-items-center">
                  <SemiCircularProgressbar percent="20" radio="70" circledContent />
                  <div>
                    <Card.Subtitle>Spending</Card.Subtitle>
                    <h2>$10,000</h2>
                    <Card.Subtitle>Year to date Spend</Card.Subtitle>
                    <h3>$750,000</h3>
                  </div>
                </div>

                <Card className="card-color card-green mt-3">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Subtitle className="fw-bold">Variance in spend</Card.Subtitle>
                      <h2>$50,000</h2>
                    </div>
                    <div className="text-end">
                      <Card.Subtitle>Available Budget</Card.Subtitle>
                      <h3>$200,000</h3>
                      <Card.Subtitle>Planned Spend</Card.Subtitle>
                      <h3>$10,000</h3>
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
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="text-center mb-4">Unit 2</Card.Title>
                <div className="d-flex justify-content-evenly align-items-center">
                  <SemiCircularProgressbar percent="60" radio="70" circledContent />
                  <div>
                    <Card.Subtitle>Spending</Card.Subtitle>
                    <h2>$500,000</h2>
                    <Card.Subtitle>Year to date Spend</Card.Subtitle>
                    <h3>$750,000</h3>
                  </div>
                </div>

                <Card className="card-color card-orange mt-3">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Subtitle className="fw-bold">Variance in spend</Card.Subtitle>
                      <h2>$50,000</h2>
                    </div>
                    <div className="text-end">
                      <Card.Subtitle>Available Budget</Card.Subtitle>
                      <h3>$200,000</h3>
                      <Card.Subtitle>Planned Spend</Card.Subtitle>
                      <h3>$10,000</h3>
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
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="text-center mb-4">Unit 3</Card.Title>
                <div className="d-flex justify-content-evenly align-items-center">
                  <SemiCircularProgressbar percent="90" radio="70" circledContent />
                  <div>
                    <Card.Subtitle>Spending</Card.Subtitle>
                    <h2>$750,000</h2>
                    <Card.Subtitle>Year to date Spend</Card.Subtitle>
                    <h3>$750,000</h3>
                  </div>
                </div>

                <Card className="card-color card-red mt-3">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Subtitle className="fw-bold">Variance in spend</Card.Subtitle>
                      <h2>$50,000</h2>
                    </div>
                    <div className="text-end">
                      <Card.Subtitle>Available Budget</Card.Subtitle>
                      <h3>$200,000</h3>
                      <Card.Subtitle>Planned Spend</Card.Subtitle>
                      <h3>$10,000</h3>
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

export default BusinessUnits
