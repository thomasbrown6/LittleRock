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
        headerText="Communications"
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
                    <h1 className="">Communications</h1>
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
              title1="Audio/Visual Ministry"
              panleTitle="Audio/Visual Ministry"
              panelImage1="../../static/images/image-media.jpg"
              p1={"Audio/Visual Ministry: To enhance the worship experience through amplification of the music and the preached word, to record and make available audio tapes & CD’s and DVD’s for all services."}

              title2="Public Relations Ministry"
              panelTitle2="Public Relations Ministry"
              panelImage2={"../../static/images/image-photo.jpg"}
              p2="Public Relations Ministry: To serve as a liaison between the Church and the community to keep the Church informed of events and opportunities in the community, and to keep the community informed of events and opportunities presented by the church."
            />
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
