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
        Breadcrumb1="HOME"
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
                  <Col xs={6}> 
                  <img
                      className="header-image event-flyers"
                      src={require("../../static/images/church-img.jpg")}
                      alt="church image"
                    />
                                    </Col>
                  <Col xs={6}>
                  <img
                      className="header-image event-flyers"
                      src={require("../../static/images/church-img.jpg")}
                      alt="church image"
                    />
                  </Col>
                  <Col xs={6}> 
                  <img
                      className="header-image event-flyers"
                      src={require("../../static/images/church-img.jpg")}
                      alt="church image"
                    />
                                    </Col>
                  <Col xs={6}>
                  <img
                      className="header-image event-flyers"
                      src={require("../../static/images/church-img.jpg")}
                      alt="church image"
                    />
                  </Col>
                  <Col xs={6}> 
                  <img
                      className="header-image event-flyers"
                      src={require("../../static/images/church-img.jpg")}
                      alt="church image"
                    />
                                    </Col>
                  <Col xs={6}>
                  <img
                      className="header-image event-flyers"
                      src={require("../../static/images/church-img.jpg")}
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
