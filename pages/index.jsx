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
                <a href="https://livestream.com/littlerockamezion/" target="blank" className="btn">
                  Watch Live Stream
                </a>
              </Col>
            </Row>
              <Row>
                <Col xs={12}>
                  <div className="generous_section">
                    <div className="generous_text">
                      <p className="generous_giving">
                        <span>G</span>ive <span>T</span>oday
                    </p>
                    <img src="../static/images/decoration.png"/>
                  </div>
                  {/* <a href="https://www.paypal.com/donate/?token=6r31DTJhd759evAbK5cpyyomUE8d8jQrMxhvVCvjm4O81cHienIgIKiZo50p68ogWj2Fbm&country.x=US&locale.x=US" target="blank"><div className="generous_btn"><p>Click here to give</p></div></a> */}
                </div>
                <div>
                <form action="https://www.paypal.com/cgi-bin/webscr" target="blank" method="post">
                  <input type="hidden" name="cmd" value="_s-xclick"/>
                  <input type="hidden" name="hosted_button_id" value="774431"/>
                  <input name="submit" type="image" src="../static/images/clickhertogive.PNG" alt="" align="middle" border="0"/>
                  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>
                </div>
                </Col>
              </Row>
          </div>
        </section>

      </div>
    </div>
  </Layout>
);
