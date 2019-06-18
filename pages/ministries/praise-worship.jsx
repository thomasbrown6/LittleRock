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
                        <h1 className="left">Praise & Worship</h1>
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
                  title3="Deaf & Hard of Hearing Ministry"
                  title4="Hospitality Ministry"
                  title5="Dance Ministry"
                  title6="Music Ministry"
                            title7="Drama Ministry"
                            title8="Pray Ministry"
                            title9="S.T.A.N.D. Ministry"
                  title10="Ministerial Contact"

                  panelImage1="../../static/images/image-mens-ministry.jpg"
                  p1="Worship Coordinator Ministry is responsible for coordinating and organizing the Worship Ministries to effectively and efficiently conduct worship services in a spirit of excellence."
                  panelImage2={null}
                  p2="Usher Ministry serves God and the congregation by being the doorkeepers of the church. The ushers provide guidance and direction to the worshippers during the worship service."
                  panelImage3={null}
                  p3="Deaf Ministry helps deaf people SEE the Gospel of Jesus Christ and accept Him as their Lord and Savior through their eyes using American Sign Language and reaches out to deaf communities in and around Westchester County and New York City."
                  panelImage4={null}
                  p4="Hospitality Ministry ministers to people through warm greetings to each worshipper in order to extend a spirit of welcome. We provide a hospitable service to all guests and members during worship services and other church related events."
                  panelImage5={null}
                  p5="Dance Ministry is the praise and worship of the Lord through the God-given gift of dance. The liturgical dance ministry at Greater Centennial consists of NuPrayze, which is geared towards youth and teens from ages 10-17; and Prayze in Motion which is a multi-generational group for young adults, adults and seniors."
                  panelImage6={null}
                  p6="Music ministry leads the congregation in worship, through the celebration of music and dance. Music Ministry helps to foster the joy of worshiping God through various methods of songs, dance and vignettes."
                  panelImage7={null}
                  p7="Drama Ministry uses the gifts of theatrical interpretation of mind and body to express artistic efforts."
                            panelImage8={null}
                            p8="Prayer Ministry meets on Wednesday mornings and Saturday evenings. They remain in fervent prayer for, and with, members at all times."
                            panelImage9={null}
                            p9="S.T.A.N.D. Ministry Seeks to Teach, Admonish, Nurture and Discipline while maintaining and providing security for church membership and property."
                  p10={
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
