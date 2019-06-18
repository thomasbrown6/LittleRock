import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Layout HomePage={true}>
    <div>
      <Banner
        slideshow={true}
        id="banner"
        image1={require("../static/images/church-img2.jpg")}
        image2={require("../static/images/church-img2.jpg")}
        image3={require("../static/images/church-img2.jpg")}
        // title="Little Rock"
        // p=""
        // buttontext="WATCH NOW"
        // link="VIEW MORE SERMONS"
        // linkhref="/sermons"
      />

      <div id="main">
        <section>
          <div className="inner">
              <Row>
                <Col xs={12}>
                  <div className="generous_section">
                    <div className="generous_text">
                      <p className="generous_giving">
                        <span>G</span>enerous Givin<span>G</span>
                    </p>
                    <img src="../static/images/decoration.png"/>
                  </div>
                  <a href="https://www.paypal.com/donate/?token=-SKQblJ2CEHgQvB_TUNDYD1mehEMqRMgaK5G5mJzwLEKZ2RkX3DwhBLVmeqKOo3p2-DkBW&country.x=US&locale.x=US" target="blank"><div className="generous_btn"><p>Click here to give</p></div></a>
                  </div>
                </Col>
              </Row>
          </div>
        </section>

      </div>
    </div>
  </Layout>
);
