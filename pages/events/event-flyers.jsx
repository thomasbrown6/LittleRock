import Link from "next/link";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Map from "../../components/Map";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        image={require("../../static/images/LR-WebPage-OurStaffNW_vrt.jpg")}
        Breadcrumb1="HOME"
        headerText="Event Flyers"
        tag1="a"
        href1="/"
        Breadcrumb2="GET CONNECTED"
        tag2="a"
        href2="#"
        Breadcrumb3="Event flyers"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Container>
              <div className="left">
                <Row>
                  <Col xs={12}>
                    <header className="major">
                      <h1>Event Flyers</h1>
                    </header>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <img
                      className="header-image event-flyers"
                      src={"../../static/images/events/event2.JPEG"}
                      alt="church image"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <img
                      className="header-image event-flyers"
                      src={"../../static/images/events/event3.JPEG"}
                      alt="church image"
                    />
                  </Col>
                </Row>
                <Row>
                <Col xs={12}>
                    <img
                      className="header-image event-flyers"
                      src={"../../static/images/events/event1.JPEG"}
                      alt="church image"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <img
                      className="header-image event-flyers"
                      src={require("../../static/images/flyer.jpg")}
                      alt="church image"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <img
                      className="header-image event-flyers"
                      src={require("../../static/images/events/IMG_2417.jpg")}
                      alt="church image"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <img
                      className="header-image event-flyers"
                      src={require("../../static/images/events/IMG_2418.jpg")}
                      alt="church image"
                    />
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
