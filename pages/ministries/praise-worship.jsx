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
            headerText="Praise & Worship"
            Breadcrumb1="HOME"
            tag1="a"
            href1="/"
            Breadcrumb2="Ministries"
            tag2="a"
            href2="#"
            Breadcrumb3="Praise & Worship"
            tag3="span"
          />

          <div className="secondary">
            <section id="two">
              <div className="inner">
                <Row>
                  <Col xs={12}>
                    <div className="left">
                      <header className="major">
                        <h1 className="">Praise & Worship</h1>
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
                  title1="Worship Coordinator Ministry"
                  title2="Ushers Ministry"
                  title4="Hospitality Ministry"
                  title5="Dance Ministry"
                  title6="Music Ministry"
                            title7="Drama Ministry"
                            title8="Pray Ministry"
                  title10="Ministerial Contact"

                  panelImage1="../../static/images/image-mens-ministry.jpg"
                  p1="Worship Coordinator Ministry is responsible for coordinating and organizing the Worship Ministries to effectively and efficiently conduct worship services in a spirit of excellence."
                  panelImage2={null}
                  p2="Usher Ministry serves God and the congregation by being the doorkeepers of the church. The ushers provide guidance and direction to the worshippers during the worship service."
                  panelImage4={null}
                  p4="Hospitality Ministry ministers to people through warm greetings to each worshipper in order to extend a spirit of welcome. We provide a hospitable service to all guests and members during worship services and other church related events."
                  panelImage5={null}
                  p5=""
                  panelImage6={null}
                  p6="Music ministry leads the congregation in worship, through the celebration of music and dance. Music Ministry helps to foster the joy of worshiping God through various methods of songs, dance and vignettes."
                  panelImage7={null}
                  p7="Drama Ministry uses the gifts of theatrical interpretation of mind and body to express artistic efforts."
                            panelImage8={null}
                            p8="Prayer Ministry meets on Wednesday mornings and Saturday evenings. They remain in fervent prayer for, and with, members at all times."
                  p10={
                    <span>
                      <p></p>
                      <p><span className="bold"></span> </p>
                    </span>
                  }

                />
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
