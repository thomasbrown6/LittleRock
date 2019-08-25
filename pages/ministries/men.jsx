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
        image={require("../../static/images/LR-WebPage-MenBoostersNW_vrt.jpg")}
        headerText="Men's Ministry"
            Breadcrumb1="HOME"
            tag1="a"
            href1="/"
            Breadcrumb2="Ministries"
            tag2="a"
            href2="#"
            Breadcrumb3="Men's Ministry"
            tag3="span"
          />

          <div className="secondary">
            <section id="two">
              <div className="inner">
                <Row>
                  <Col xs={12}>
                    <div className="left">
                      <header className="major">
                        <h1 className="">Men's Ministry</h1>
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
                  title1="Men's Ministry"
                  title2="Men's Bible Study"
                  title3="Men's prayer line"
                  title4="Ministerial Contact"
                  panelImage1="../../static/images/image-mens-ministry.jpg"
                  p1="Men's Ministry empowers men to be strong leaders in the Kingdom and the Community through the work of the Holy Sprit."
                  panelImage2={null}
                  p2="The Men's Ministry meets every second Saturday of the month at 9am"
                  panelImage3={null}
                  p3={
                    <span>
                      <p>The Men's Prayer Line dials in every morning</p>
                      <p><span className="bold">Mon-Fri:</span> 6:15am - 6:30am</p>
                    </span>
              }
              p4={
                <span>
                  <p></p>
                  <p><span className="bold"></span>  </p>
                </span>
              }
                />
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
