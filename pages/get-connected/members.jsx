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
        Breadcrumb3="MEMBERS"
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
                      <h1>MEMBERS</h1>
                    </header>
                    <img
                        className="header-image"
                        src={require("../../static/images/church-img3.jpg")}
                        alt="church image"
                      />
                  </Col>
                </Row>
                <Row>
                  <Col xs={2} />
                  <Col xs={10}>
                    <h2>
                      <br />
                      Types of Membership
                    </h2>
                    <p className="header">Probationary Member</p>
                    <p>
                      A person who has made the public declaration to join the
                      church but has not fulfilled the requirements as set forth
                      by the AME Zion Church for Membership in Full Connection.
                    </p>
                    <p className="header">Member in Full Connection </p>
                    <p>
                      Is a member who has completed the required four New Member
                      classes and has received the Right Hand of Fellowship
                      before the congregation.
                    </p>
                    <p className="mb-0">
                      As a member in full connection here at Greater Centennial,
                      your first responsibility is to partner with us to achieve
                      three goals:
                    </p>
                    <ul className="list">
                      <li className="bold">
                        Show the LOVE of Christ to all. Seek to become more like
                        Christ. Tell people about Christ.
                      </li>
                      <li className="bold">
                        Show the POWER of Christ by assisting members of the
                        congregation and community. Our deeds are a
                        demonstration of our faith in a mighty God.
                      </li>
                      <li className="bold">
                        Show the GLORY of Christ by making the church a place
                        where God is placed at the forefront of all that we do.
                      </li>
                    </ul>

                    <p className="header">What does Membership mean?</p>
                    <p className="mb-0">
                      <span className="bold">
                        As a Member we expect you to love and be loved. The
                        motivation for all your actions should be love.{" "}
                      </span>{" "}
                      We define love as seeking the highest good for others. As
                      a member you are expected to:{" "}
                    </p>
                    <ul className="list">
                      <li>Grow in the Spirit Filled Life</li>
                      <li>Belief in the Gospel of Jesus Christ</li>
                      <li>Read and study the Bible</li>
                      <li>Meditate on the Word of God</li>
                      <li>Regularly attend worship services</li>
                      <li>Reflect the glory of God in your lifestyle and attitude</li>
                      <li>Tithe and give offerings both systematically and cheerfully</li>
                      <li>Use your spiritual gifts in ministry</li>
                      <li>Share your faith with others</li>
                      <li>Respect church doctrine and authority</li>
                      <li>Live in harmony with one another</li>
                      <li>Be receptive to pastoral leadership</li>
                    </ul>
                    <Link href="/ministries/adult-family-life"><a className="link">Click here to Get Connected with our Ministries</a></Link>
                  </Col>
                  <Col xs={1} />
                </Row>
              </div>
            </Container>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
