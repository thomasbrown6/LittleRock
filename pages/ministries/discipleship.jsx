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
        image={require("../../static/images/LR-WebPage-AboutUsNW_vrt.jpg")}
        headerText="Discipleship"
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="Ministries"
        tag2="a"
        href2="#"
        Breadcrumb3="Discipleship"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Row>
              <Col xs={12}>
                <div className="left">
                  <header className="major">
                    <h1 className="">Discipleship</h1>
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
              title1="New Members Class"
              panelImage1={null}
              p1="Please check the Sunday Order of Worship and website calendar for class dates. New Members Class teaches what it means to be a new believer in Christ. It also encourages each new member to identify and develop their spiritual gifts and become a member in full connection. There are 4 classes that meet on consecutive Mondays at 7pm. There is also a one-day Fast Track option where all four classes are given on one day."
               title3="Little Rock A.M.E. Zion Bible School"
              panelImage3={null}
              p3="The Community Bible School is a full-day summer program for 5 weeks in July and August. The school has a vision of spiritually equipping our children and youth to cope with the challenges of growing up through: Worship, Prayer, Bible Study, Teamwork, Christian Fellowship, Recreational Activities and Field Trips."              title5="Noon Day Bible Study"
              panelImage5={null}
              p5="Every Wednesday at noon, students of the Bible gather together in the sanctuary to be taught about God's plan for our lives. This Bible Study is open to everyone and welcomes all to attend."
              title6="Ministerial Contact"
              p6={
                <span>
                  <p></p>
                  <p>
                    <span className="bold"></span> {" "}
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
