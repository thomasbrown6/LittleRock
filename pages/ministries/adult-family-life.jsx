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
            Breadcrumb3="Adult & Family Life"
            tag3="span"
          />

          <div className="secondary">
            <section id="two">
              <div className="inner">
                <Row>
                  <Col xs={12}>
                    <div className="left">
                      <header className="major">
                        <h1 className="left">ADULT & FAMILY LIFE</h1>
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
                  title1="Family Life Ministry"
                  title2="Singles Ministry"
                  title3="Adult's in Ministry (AIM)"
                  title4="Sports & Recreation Ministry"
                  title5="Marriage Ministry"
                  title6="Agape Wedding Ministry"
                  title7="Culinary Ministry"
                  title8="Ministerial Contact"

                  panelTitle1="Family Life Ministry"
                  panelImage1="../../static/images/image-mens-ministry.jpg"
                  p1="Family Life Ministry provides an educational and therapeutic environment to families facing the challenges of christian family living. We use God's Word and family life research to assist families, single-parents, and stepfamilies in building stronger Christian homes."
                  panelTitle2="Singles Ministry"
                  panelImage2={null}
                  p2="Singles Ministry creates an atmosphere where singles can gather together and deal with the unique issues of singlehood, while purposefully seeking Christ in the areas of worship, discipleship, fellowship and outreach."
                  panelTitle3="Adult's In Ministry (AIM)"
                  panelImage3={null}
                  p3={"Ministry desgined for adults aged 41-64"}
                  panelTitle4="Sports & Recreation Ministry"
                  panelImage4={null}
                  p4={"Sports Ministry encourages various groups of sports activities, physical exercise, social interaction and spiritual reshaping within the body of Christ."}
                  panelTitle5="Marriage Ministry"
                  panelImage5={null}
                  p5={"Marriage Ministry promotes and encourages married couples and their families to work toward the ideal in relationships set forth in the Holy Scripture, and provides tools to them for improving their relationship with each other and with Jesus Christ."}
                  panelTitle6="Agape Wedding Ministry"
                  panelImage6={null}
                  p6={"Agape Wedding Ministry ensures the sacredness of the wedding ceremony with spiritually inspired guidelines. The Wedding Coordinators assist in all aspects of planning and fulfilling the matrimonial desires of the bride, groom and family."}
                  panelTitle7="Culinary Ministry"
                  panelImage7={null}
                  p7={"Culinary Ministry glorifies God and serves the community by preparing meals for church sanctioned activities in a manner that demonstrates God's love and care for God's people."}
                  panelTitle8="Ministerial Contact"
                  panelImage8={null}
                  p8={
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
