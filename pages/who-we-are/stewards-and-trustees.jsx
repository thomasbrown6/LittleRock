import Link from "next/link";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        Breadcrumb1="HOME"
        image={require("../../static/images/LR-WebPage-OurStaffNW_vrt.jpg")}
        headerText="Stewards and Trustees"
        tag1="a"
        href1="/"
        Breadcrumb2="WHO WE ARE"
        tag2="a"
        href2="#"
        Breadcrumb3="STEWARDS & TRUSTEES"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Container>
              <Row>
                <Col xs={12}>
                  <div className="left">
                    <header className="major">
                      <h1>STEWARDS & TRUSTEES</h1>
                    </header>
                    <p className="bold">Stewards Ministry</p>
                    <p>
                      The mission is to be accountable to make an exact
                      accounting of all tithes, offerings and contributions made
                      to the church. Ensure the stewardship and distribution of
                      church resources to edify the congregation, provide
                      support to the Pastor, his family, relief for the needy
                      and distressed members of the church.
                    </p>
                    <p className="bold">Trustees Ministry</p>
                    <p>
                      The mission is to take charge of care, maintenance and
                      security of church property. Initiate necessary
                      improvements to the church and maintain order and the
                      proper decorum to be observed throughout God’s house of
                      worship.
                    </p>
                    <p className="bold">Stewardess Ministry</p>
                    <p>
                      The mission is to assist the Preacher’s Steward in making
                      provision for the support and comfort of the Pastor and
                      his family.
                    </p>
                    <p className="bold">Deaconess Ministry</p>
                    <p>
                      The mission is to prepare for the sacraments of Holy
                      Communion and Baptism. The Deaconess Board’s main concern
                      is mercy, both within and without the church. The
                      Deaconess Board assists the Pastor in ministering to the
                      sick and shut-in.
                    </p>
                    <p className="bold">Pastoral Care Ministry</p>
                    <p>
                      The mission is to give support and assistance to Pastor
                      and his family with a spirit of excellence and love.
                    </p>
                   
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
