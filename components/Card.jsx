import { Row, Col } from "react-bootstrap";

const Card = props => (
  <article className="card">
    {props.cardswap != null ? (
      <Row>
        <Col xs={6}>
          <div className="card-content">
            <h3>{props.header}</h3>
            <span className="bold">{props.subhead}</span>
            {props.children}
          </div>
        </Col>
        <Col xs={6}>
          <div className="card-img">
            <img src={props.image} alt="card image" />
          </div>
        </Col>
      </Row>
    ) : (
      <Row>
        <Col xs={6}>
          <div className="card-img">
            <img src={props.image} alt="card image" />
          </div>
        </Col>
        <Col xs={6}>
          <div className="card-content">
            <h3>{props.header}</h3>
            <span className="bold">{props.subhead}</span>
            {props.children}
          </div>
        </Col>
      </Row>
            )}
          <br/>
            <br/>
  </article>
);

export default Card;
