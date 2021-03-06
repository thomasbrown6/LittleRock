import Link from "next/link";
import { Row, Col } from "react-bootstrap";

const BtnBottom = props => (
  <div className="bottom-buttons">
    <Row>
      <Col xl={6}>
        <Link href="/pastors-message">
          <a className="button-bottom">
            <p>Pastor's Message</p>
          </a>
        </Link>
      </Col>
      <Col xl={6}>
        <Link href="/who-we-are/our-staff">
          <a className="button-bottom">
            <p>Our Staff</p>
          </a>
        </Link>
      </Col>
      {/* <Col xl={4}>
        <Link href="/our-boards">
          <a className="button-bottom">
              <p>Our Boards</p>
          </a>
        </Link>
      </Col> */}
    </Row>
  </div>
);

export default BtnBottom;
