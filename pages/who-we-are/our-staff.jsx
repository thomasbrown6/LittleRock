import Link from "next/link";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        image={require("../../static/images/image-our-staff.jpg")}
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="WHO WE ARE"
        tag2="a"
        href2="#"
        Breadcrumb3="Our Staff"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
                <Card image={"https://via.placeholder.com/284x186"} header="Pastor Pogue & Family" subhead="Reverend Dr. Stephen W. Pogue" cardswap={null}>
                   <p>In addition to his role as spiritual visionary, Pastor Pogue serves as the Chief Executive Officer of Greater Centennial. He provides unsurpassed leadership and shepherds the flock of Jesus Christ. His primary responsibilities are to lead, nurture and endow saints with tangible teaching that will advance the Kingdom of God.</p>
                  </Card>
                <Card image={"https://via.placeholder.com/284x186"} header="Pastor Pogue & Family" subhead="Reverend Dr. Stephen W. Pogue" cardswap={null}>
                   <p>In addition to his role as spiritual visionary, Pastor Pogue serves as the Chief Executive Officer of Greater Centennial. He provides unsurpassed leadership and shepherds the flock of Jesus Christ. His primary responsibilities are to lead, nurture and endow saints with tangible teaching that will advance the Kingdom of God.</p>
                  </Card>
                <Card image={"https://via.placeholder.com/284x186"} header="Pastor Pogue & Family" subhead="Reverend Dr. Stephen W. Pogue" cardswap={null}>
                   <p>In addition to his role as spiritual visionary, Pastor Pogue serves as the Chief Executive Officer of Greater Centennial. He provides unsurpassed leadership and shepherds the flock of Jesus Christ. His primary responsibilities are to lead, nurture and endow saints with tangible teaching that will advance the Kingdom of God.</p>
            </Card>
            <Card image={"https://via.placeholder.com/284x186"} header="Pastor Pogue & Family" subhead="Reverend Dr. Stephen W. Pogue" cardswap={null}>
                   <p>In addition to his role as spiritual visionary, Pastor Pogue serves as the Chief Executive Officer of Greater Centennial. He provides unsurpassed leadership and shepherds the flock of Jesus Christ. His primary responsibilities are to lead, nurture and endow saints with tangible teaching that will advance the Kingdom of God.</p>
            </Card>
            <Card image={"https://via.placeholder.com/284x186"} header="Pastor Pogue & Family" subhead="Reverend Dr. Stephen W. Pogue" cardswap={null}>
                   <p>In addition to his role as spiritual visionary, Pastor Pogue serves as the Chief Executive Officer of Greater Centennial. He provides unsurpassed leadership and shepherds the flock of Jesus Christ. His primary responsibilities are to lead, nurture and endow saints with tangible teaching that will advance the Kingdom of God.</p>
                  </Card>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
