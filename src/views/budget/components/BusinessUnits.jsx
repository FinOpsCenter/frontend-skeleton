import Slider from 'react-slick'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SemiCircularProgressbar from 'components/common/SemiCircularProgressbar/SemiCircularProgressbar'

import BusinessUnitsData from 'mock/BusinessUnits.json'

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const BusinessUnits = () => {
  return (
    <Card className="section-gray">
      <Card.Body>
        <h2 className="budget-subtitle">Business Units</h2>
        <Row>
          <Col>
            <Slider {...settings}>
              {BusinessUnitsData.map((businessUnit) => (
                <Card className="mb-3" key={businessUnit.title}>
                  <Card.Body>
                    <Card.Title className="text-center mb-4">{businessUnit.title}</Card.Title>
                    <div className="d-flex justify-content-evenly align-items-center">
                      <SemiCircularProgressbar percent={businessUnit.percent} radio="70" circledContent />
                      <div>
                        <Card.Subtitle>Spending</Card.Subtitle>
                        <h2>{businessUnit.spending}</h2>
                        <Card.Subtitle>Year to date Spend</Card.Subtitle>
                        <h3>{businessUnit.year_date_spend}</h3>
                      </div>
                    </div>

                    <Card
                      className={`card-color ${
                        businessUnit.percent < 34
                          ? 'card-green'
                          : businessUnit.percent < 68
                          ? 'card-orange'
                          : 'card-red'
                      } mt-3`}
                    >
                      <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                          <Card.Subtitle className="fw-bold">Variance in spend</Card.Subtitle>
                          <h2>{businessUnit.variance_in_spend}</h2>
                        </div>
                        <div className="text-end">
                          <Card.Subtitle>Available Budget</Card.Subtitle>
                          <h3>{businessUnit.available_budget}</h3>
                          <Card.Subtitle>Planned Spend</Card.Subtitle>
                          <h3>{businessUnit.planned_spend}</h3>
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
              ))}
            </Slider>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default BusinessUnits
