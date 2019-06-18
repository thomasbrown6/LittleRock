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
                    <h1 className="left">Discipleship</h1>
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
              title2="Assimilation/Barnabas Ministry"
              panelImage2={null}
              p2="Assimilation/ Barnabas Ministry encourages new converts who have decided to join our church family. Barnabas Partners assist them as they begin their journey with Christ and our church. Assimilation Partners seek to reconnect with those members who haven’t been in touch with the church for a long time."
              title3="Greater Centennial Community Bible School"
              panelImage3={null}
              p3="The Community Bible School is a full-day summer program for 5 weeks in July and August. The school has a vision of spiritually equipping our children and youth to cope with the challenges of growing up through: Worship, Prayer, Bible Study, Teamwork, Christian Fellowship, Recreational Activities and Field Trips."
              title4="S.T.E.P.S. (Small Group Ministry)"
              panelImage4={null}
              p4="S.T.E.P.S. Ministry is our small group ministry where we study together, equipped to prosper spiritually. In the weekly sessions we discuss biblical principles and life issues, and tools are given on how to prctically carry out spiritual principles in everyday life. The groups also share in community service and fellowship events."
              title5="Noon Day Bible Study"
              panelImage5={null}
              p5="Every Wednesday at noon, students of the Bible gather together in the sanctuary to be taught about God's plan for our lives. This Bible Study is open to everyone and welcomes all to attend."
              title6="Ministerial Contact"
              p6={
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
