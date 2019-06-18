import Link from "next/link";
import { Row, Col } from "react-bootstrap";

const BtnBottom = props => (
  <div className="bottom-buttons">
    <Row>
      <Col xs={4}>
        <Link hef="#">
          <a>
            <button className="button-bottom">
              <p>Pastor's Message</p>
              <p>Click Here</p>
            </button>
          </a>
        </Link>
      </Col>
      <Col xs={4}>
        <Link hef="#">
          <a>
            <button className="button-bottom">
              <p>Our Staff</p>
              <p>Click Here</p>
            </button>
          </a>
        </Link>
      </Col>
      <Col xs={4}>
        <Link hef="#">
          <a>
            <button className="button-bottom">
              <p>Our Boards</p>
              <p>Click Here</p>
            </button>
          </a>
        </Link>
      </Col>
    </Row>
  </div>
);

export default BtnBottom;
