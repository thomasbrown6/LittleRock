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
        image={null}
        tag1="a"
        href1="/"
        Breadcrumb2="GET CONNECTED"
        tag2="a"
        href2="#"
        Breadcrumb3="Tithes & Offering"
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
                      <h1>Tithes & Offering</h1>
                    </header>
                    <img
                      className="header-image"
                      src={require("../../static/images/church-img3.jpg")}
                      alt="church image"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={1} />
                  <Col xs={11}>
                    <br />
                    <p>
                      Your tithes and offerings are a testimony to your love for
                      God and commitment to His work. Your giving says you
                      recognize your vital responsibility as a steward over the
                      resources He has gifted to you. Your partnership with
                      Christ will yield ever increasing love for things eternal
                      and provide you comfort and peace through God’s abundant
                      love and grace. But just as you excel in everything, -see
                      that you also excel in this grace of giving. (2 Cor.8:7)
                    </p>
                    <p className="header">What is tithing?</p>
                    <p>
                      Proper stewardship involves giving in proportion to what a
                      person has received. Tithing is the practice of
                      proportionate giving of 10% of your income to God. A tithe
                      of everything… is Holy to the Lord. (Leviticus 27:30)
                    </p>

                    <p className="header">What is offering?</p>
                    <p>
                      Proper stewardship involves giving in proportion to what a
                      person has received. Tithing is the practice of
                      proportionate giving of 10% of your income to God. A tithe
                      of everything… is Holy to the Lord. (Leviticus 27:30)
                    </p>

                    <Link href="#">
                      <a className="link"
                        href="https://www.paypal.com/donate/?token=-SKQblJ2CEHgQvB_TUNDYD1mehEMqRMgaK5G5mJzwLEKZ2RkX3DwhBLVmeqKOo3p2-DkBW&country.x=US&locale.x=US"
                        target="blank">Click to Give Online!</a>

                    </Link>
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
