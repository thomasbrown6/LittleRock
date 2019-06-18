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
            Breadcrumb3="Women's Ministry"
            tag3="span"
          />

          <div className="secondary">
            <section id="two">
              <div className="inner">
                <Row>
                  <Col xs={12}>
                    <div className="left">
                      <header className="major">
                        <h1 className="left">Women's Ministry</h1>
                        <img
                        className="header-image"
                        id="churchimg3"
                        src={require("../../static/images/church3.jpg")}
                      />
                      </header>
                    </div>
                  </Col>
                </Row>
                <SideMenu
                  title1="Women’s Home and Overseas Missionary Society"
                  title2="Women’s Ministries Council"
                  title3="Women's Bible Study"
                  title4="Women's Prayer Line"
                  title5="Ministerial Contact"

                  panelImage1="../../static/images/image-mens-ministry.jpg"
                  p1="Women's Home and Overseas Missionary Society teaches the concepts of Christian missions and provides experiences for participation in mission work and its ministries; exemplifies the principles of Christian living; promotes the cause of World Evangelism; and serves as a financial support system to under gird the world mission outreach of the A.M.E. Zion Church at home and overseas."
                  panelImage2={null}
p2="Women's Ministry Council is an umbrella group that unifies all the development, outreach, special events and reciprocal communication."
                            panelImage3={null}
                            p3="The Women's Bible Study meets every second Saturday of the month at 10am."
                  panelImage4={null}
                  p4={
                    <span>
                      <p>The Women's Prayer Line dials in every morning</p>
                      <p><span className="bold">Mon-Fri:</span> 6:00am - 6:15am </p>
                      <p><span className="bold">Phone:</span> ###-###-#### </p>
                      <p><span className="bold">Code:</span> #####</p>
                    </span>
                  }                  
                  p5={
                    <span>
                      <p>Rev. Dr. Ena Clarke Ramsey</p>
                      <p><span className="bold">Email:</span> edalnor@msn.com </p>
                    </span>
                  }

                />
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
