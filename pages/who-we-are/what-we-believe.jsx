import Link from "next/link";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        image={require("../../static/images/header-designed.jpg")}
        headerText="WHAT WE BELIEVE"
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="WHO WE ARE"
        tag2="a"
        href2="#"
        Breadcrumb3="WHAT WE BELIEVE"
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
                      <h1>What We Believe</h1>
                      <img
                        className="header-image"
                        id="churchimg3"
                        src={require("../../static/images/church3.jpg")}
                      />
                    </header>
                    <h3 className="bold">
                      There is but one living and true God
                    </h3>
                    <p>
                      ...of infinite power, wisdom, and goodness. In unity of
                      this Godhead there are three persons—the Father, the Son,
                      and the Holy Spirit.
                    </p>
                    <h3 className="bold">
                      Jesus Christ, the Son, is God in the flesh - fully human
                      and fully divine.
                    </h3>
                    <p>
                      ...He was crucified, died, and buried, to reconcile
                      humanity to God, and to be a sacrifice for the sins of
                      mankind. He rose from the dead and ascended into Heaven,
                      waiting for the day when He will judge all humankind.
                    </p>
                    <h3 className="bold">The Holy Spirit is God.</h3>
                    <p>
                      All the divine attributes ascribed to the Father and the
                      Son are equally ascribed to the Holy Spirit. The Holy
                      Spirit instantly resides within every person who accepts
                      Jesus Christ as Lord and Savior. The Holy Spirit is a
                      comforter, a teacher, guider, and helper. The Holy Spirit
                      enables every believer to live lives filled with the love,
                      joy, peace, patience, kindness, goodness, faithfulness,
                      gentleness and self-control.
                    </p>
                    <h3 className="bold">
                      The Holy Bible has all information necessary for salvation
                    </h3>
                    <p>
                      ...and living a life of holiness and righteousness. The
                      Old and New Testaments both point toward Christ as the
                      savior of the world.
                    </p>
                    <h3 className="bold">
                      All people have sinned and fallen short of the glory of
                      God.
                    </h3>
                    <p>
                      There is nothing that any of us can do to earn salvation.
                      It is only through God’s grace, by the sacrifice of Jesus
                      Christ, that we are able to enter into right relationship
                      with God. Only by faith that Jesus Christ was the Son of
                      God, died for our sins, and was resurrected on the third
                      day, can we be saved.
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
