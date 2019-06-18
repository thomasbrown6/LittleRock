import Link from "next/link";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import { Row, Col } from "react-bootstrap";
import SideMenu from "../../components/SideMenu";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        image={require("../../static/images/image-mens-ministry.jpg")}
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="Ministries"
        tag2="a"
        href2="#"
        Breadcrumb3="Communications"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Row>
              <Col xs={12}>
                <div className="left">
                  <header className="major">
                    <h1 className="left">Communications</h1>
                    {/* <img
                        className="header-image"
                        id="churchimg3"
                        src={require("../../static/images/church3.jpg")}
                      /> */}
                  </header>
                </div>
              </Col>
            </Row>
            <SideMenu
              title1="Video & Sound"
              panelImage1="../../static/images/image-media.jpg"
              p1={
                <span>
                  <p>
                    Video & Sound Ministry reaches people for Christ through the
                    use of modern technology – Computer presentation software
                    and hardware; Computer graphics; HD video recording, editing
                    and projection; Audio magnification, mixing and editing;
                    Social media; Writing and editing for articles and marketing
                    pieces; and more, as technology grows and develops.
                  </p>
                  <ul>
                    <li>Audio Ministry</li>
                    <li>Graphic Arts</li>
                    <li>Media Sales</li>
                    <li>Public Relations</li>
                    <li>Video</li>
                    <li>Website</li>
                    <li>Writers</li>
                  </ul>
                </span>
              }
              title2="Photography"
              panelImage2={"../../static/images/image-photo.jpg"}
              p2="The Photography ministry provides a timeless image of the heart and presence of God through candid moments of praise & worship. The photography ministry records the history of the church and assists in the visual messages through graphic design and social media."
              title3="Ministerial Contact"
              p3={
                <span>
                  <p>Rev. Dr. Ena Clarke Ramsey</p>
                  <p>
                    <span className="bold">Email:</span> edalnor@msn.com{" "}
                  </p>
                </span>
              }
            />
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
