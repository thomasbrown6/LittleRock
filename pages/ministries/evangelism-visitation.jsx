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
        Breadcrumb3="EVANGELISM & VISITATION"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Row>
              <Col xs={12}>
                <div className="left">
                  <header className="major">
                    <h1 className="left">EVANGELISM & VISITATION</h1>
                    <img
                      className="header-image"
                      id="churchimg3"
                      src={require("../../static/images/image-ambass.jpg")}
                    />
                  </header>
                </div>
              </Col>
            </Row>
            <SideMenu
              title1="Ambassadors for Christ"
              panelImage1={require("../../static/images/image-prayerstation.jpg")}
              p1="Ambassadors for Christ shares the Word of God through the ministry of evangelism, both within the church and throughout the community."
              title2="Visitation"
              panelImage2={null}
              p2="Visitation Ministry seeks to create a connection with those who find themselves unable to leave their homes due to illnes or disability and those members who have been hospitalized due to sudden illness."
              title3="Care-Ring"
              panelImage3={null}
              p3="Care-Ring Ministry engages our congregation through telephone calls of words of encouragement and prayer to members, guests, those that may be sick and shut in, and those that are in a season of bereavement."
              title4="Prision Ministry"
              panelImage4={null}
              p4="Prison Ministry extends the message of hope and love to men and women who are incarcerated through preaching, scripture, prayer and visitation."
              title5="Ministerial Contact"
              p5={
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
