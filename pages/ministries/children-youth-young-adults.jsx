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
            image={require("../../static/images/image-youth-ministry.jpg")}
            Breadcrumb1="HOME"
            tag1="a"
            href1="/"
            Breadcrumb2="Ministries"
            tag2="a"
            href2="#"
            Breadcrumb3="CHILDREN, YOUTH & YOUNG ADULTS"
            tag3="span"
          />

          <div className="secondary">
            <section id="two">
              <div className="inner">
                <Row>
                  <Col xs={12}>
                    <div className="left">
                      <header className="major">
                        <h1 className="left">CHILDREN, YOUTH & YOUNG ADULTS</h1>
                        {/* <img
                        className="header-image"
                        id="churchimg3"
                        src={require("../../static/images/image-youth-ministry.jpg")}
                      /> */}
                      </header>
                    </div>
                  </Col>
                </Row>
                <SideMenu
                  title1="Youth for Christ"
                  title2="Children's Church"
                  title3="The Nursery Ministry"
                  title4="Rising Stars"
                  title5="Bridge Builders"
                  title6="Community Bible School"
                  title7="Young Adult Ministry"
                  title8="Ministerial Contact"

                  panelImage1={null}
                  p1="Youth for Christ Ministry empowers young people by training them to participate in the body of christ through evangelistic efforts, biblical principles and fellowship opportunities."
                  panelImage2={null}
                  p2="Children's Church Ministry nurtures children of ages 5-12 by providing a worship service that is a welcoming and loving environment and lays a foundation of faith and biblical knowledge."
                  panelImage3={null}
                  p3="Nursery Ministry provides care for children (infants - 4 years olds) in a safe and comfortable environment during worship services."
                  panelImage4={null}
                  p4="Rising Stars Ministry ministers to young women (ages 11-15 years) to be led on a journey in the spirit to understand and fulfill God's purposes for their lives. Through this ministry, the Rising Stars will understand the Bible and their relationship with Christ more clearly. The luminaries are women of our church who are called by God to lead the Rising Stars to realize their destiny in Christ. The Luminaries are committed to volunteer their time and resources to support the spiritual, emotional and social development of the Rising Stars."
                  panelImage5={null}
                  p5="Bridge Builders Ministry mentors to young boys (ages 12-16) through instructional and practical applications of God's guidelines."
                  panelImage6={null}
                  p6="Community Bible School is a summer program that spiritually equips our children and youth to cope with the challenges of growing up through: Worship, Prayer, Bible Study, Teamwork, Christian Fellowship, Recreational Activities and Field Trips."
                  panelImage7={null}
                  p7="Young Adult Ministry unites the community of young adults ages 18-40, in Christian fellowship and helps to guide them to their purpose. They strive to empower young adults to use their gifts to glorify God and edify the body of Christ, and to have a deeper appreciation and greater understanding of their relationship with community, Church and Christ."
                  panelImage8={null}
                  p8={
                    <span>
                      <p>Rev. Dr. Ena Clarke Ramsey</p>
                      <p><span className="bold">Contact:</span> edalnor@msn.com </p>
                    </span>
                  }

                />
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );

