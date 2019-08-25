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
        image={require("../../static/images/LR-WebPage-OutreachNW_vrt.jpg")}
        headerText="Adult & Family Life"
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
                        <h1 className="">ADULT & FAMILY LIFE</h1>
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
                  
                  title1="Athletic Ministry"
                  panelTitle1="Athletic Ministry"
                  panelImage1="../../static/images/image-mens-ministry.jpg"
                  p1="To enhance Spiritual Development and Christian Discipline through team and individual sports, focusing on sportsmanship, dedication, teamwork, and discipline. Inclusive of all ages."
                  
                  title2="Banner Guild Ministry"
                  panelTitle2="Banner Guild Ministry"
                  panelImage2={null}
                  p2="To provide seasonal liturgical banners for education and beautification of the sanctuary."
                  
                  title3="Culinary Ministry"
                  panelTitle3="Culinary Ministry"
                  panelImage3={null}
                  p3={"To coordinate all meal functions and manage the upkeep of the kitchen of Little Rock."}
                  
                  title4="Economic Development Ministry"
                  panelTitle4="Economic Development Ministry"
                  panelImage4={null}
                  p4={"Designed to encourage, promote and enhance economic prosperity through entrepreneurial and private business development."}
                  
                  title5="Flower Ministry"
                  panelTitle5="Flower Ministry"
                  panelImage5={null}
                  p5={"Flower Ministry: To beautify the sanctuary and other areas inside the church with plants and seasonal flowers."}
                  
                  title6="Greeters/Announcers/Host/Hostesses Ministry"
                  panelTitle6="Greeters/Announcers/Host/Hostesses Ministry"
                  panelImage6={null}
                  p6={"Greeters/Announcers/Host/Hostesses Ministry: To welcome members and register visitors into the church on Sunday mornings and before all special services, to serve as decorum ambassadors for special events held at Little Rock."}
                  
                  title7="Historical Society"
                  panelTitle7="Historical Ministry"
                  panelImage7={null}
                  p7={"Historical Society: To collect information and articles for historical purposes."}
                  
                  title8="Information Technology Ministry"
                  panelTitle8="Information Technology Ministry"
                  panelImage8={null}
                  p8={"Information Technology Ministry: To provide technical support and assistance to the church office and staff."}

                />
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
