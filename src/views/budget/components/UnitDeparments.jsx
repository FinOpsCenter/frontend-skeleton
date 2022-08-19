import Slider from 'react-slick'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CircularProgressbar from 'components/common/CircularProgressbar/CircularProgressbar'

import UnitDeparmentsData from 'mock/UnitDeparments.json'

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const UnitDeparments = () => {
  return (
    <Card className="unit-deparments section-gray">
      <Card.Body>
        <h2 className="budget-subtitle">Unit 2 Departments</h2>

        <Row>
          <Col>
            <Slider {...settings}>
              {UnitDeparmentsData.map((unitDeparment) => {
                let color = 'red'
                if (unitDeparment.percent < 34) {
                  color = 'green'
                } else if (unitDeparment.percent < 67) {
                  color = 'orange'
                }

                return (
                  <Card key={unitDeparment.trend}>
                    <Card.Body>
                      <div className="unit-deparments-header">
                        <div>
                          <Card.Subtitle>Department</Card.Subtitle>
                          <h5>{unitDeparment.department}</h5>
                        </div>
                        <div className="text-end">
                          <Card.Subtitle>Trend</Card.Subtitle>
                          <h5>{unitDeparment.trend}</h5>
                        </div>
                      </div>

                      <Card className={`card-outline-${color} mb-3`}>
                        <Card.Body className="d-flex justify-content-evenly align-items-center">
                          <CircularProgressbar radio="50" percent={unitDeparment.percent} color={color} />
                          <div>
                            <Card.Subtitle>Spending</Card.Subtitle>
                            <h2>{unitDeparment.spending}</h2>
                            <Card.Subtitle>Year to date Spend</Card.Subtitle>
                            <h3>{unitDeparment.year_date_spend}</h3>
                          </div>
                        </Card.Body>
                      </Card>

                      <Card className={`card-outline-${color} mb-3`}>
                        <Card.Body className="d-flex justify-content-between align-items-center">
                          <div>
                            <h5 className="text-gray mb-1">Variance in spend</h5>
                            <h2>{unitDeparment.variance_in_spend}</h2>
                          </div>
                          <div className="text-end">
                            <Card.Subtitle>Available Budget</Card.Subtitle>
                            <h4>{unitDeparment.available_budget}</h4>
                            <Card.Subtitle>Planned Spend</Card.Subtitle>
                            <h4>{unitDeparment.planned_spend}</h4>
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
                )
              })}
            </Slider>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default UnitDeparments
