import Link from "next/link";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        Breadcrumb1="HOME"
        image={require("../../static/images/image-our-history.jpg")}
        //headerText="Our History"
        tag1="a"
        href1="/"
        Breadcrumb2="WHO WE ARE"
        tag2="a"
        href2="#"
        Breadcrumb3="OUR HISTORY"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Container>
              <Row>
                <Col xs={12}>
                  <div className="left">
                    <header className="major">
                      <h1>OUR HISTORY</h1>
                    </header>
                    <p>
                      In 1896 a small group of people met in the home of Mrs.
                      Anna Green, who lived on the corner of Eleventh Avenue and
                      Eastchester Lane, for the purpose of organizing a colored
                      Methodist church in Mount Vernon, New York, thus marking
                      the founding of the first A.M.E. Zion Church in the city
                      of Mount Vernon. Those present at the meeting were
                      Brothers A. Lyle, Allen Banks, William Keeler, Charles
                      Johnson, J. B. Underhill, Sisters W. H. Ely, R. A. Lyle,
                      Maria Landrine, Nellie Thompson, Elizabeth Manigault and
                      Anna Green. The first meeting place as a church was in a
                      frame building on the corner of South Ninth Avenue and
                      West Third Street. However documented evidence including
                      information revealed in the publication, A Time to
                      Remember authored by Mount Vernon historian, educator and
                      cleric, Dr. Larry H. Spruill, indicates that the A.M.E.
                      Zion Church was the first, independently organized African
                      American religious group in Mt. Vernon. Dr. Spruill
                      writes; “The fundraising drive to build an A.M.E. Zion
                      Church was documented in The Chronicle a village
                      newspaper, from 1869 – 1892 in descriptive announcements
                      and articles on Black community life.” These facts allow
                      him to conclude that, “the honor of pioneering Black
                      religious life in the city of Mount Vernon belongs to the
                      African Methodist Episcopal Zion congregation.{" "}
                    </p>
                    <p>
                      Based on Dr. Spruill’s research, the A.M.E. Zion church
                      led by Rev. Jacob Thomas, an A.M.E. Zion minister, had a
                      presence in Mt. Vernon as early as 1868. Greater
                      Centennial, however, looks to its official founding date
                      as 1896, when under the leadership of the Rev. W. H. Ely
                      the groups of members were organized into a church and
                      Rev. Ely became the first pastor.
                    </p>
                                        <h2 className="bold">The Pastors of Little Rock A.M.E. Zion Church</h2>

                                        <p className="historylist">Rev. C. H. Williams ( 1899 - 1900 )</p>
                                        <p className="historylist">Rev. George Frances Green ( 1900 - 1901 )</p>
                                        <p className="historylist">Rev. Emory Thomas ( 1901 - 1903 )</p>
                                        <p className="historylist">Rev. R. A. Lye ( 1903-1907 )</p>
                                        <p className="historylist">Rev. N. E. Ray ( 1907-1908 )</p>
                                        <p className="historylist">Rev. N. E. Collins ( 1908-1912 )</p>
                                        <p className="historylist">Rev. Johnson ( 1912-1913 )</p>
                                        <p className="historylist">Rev. Samuel S. Boyd ( 1913-1924 )</p>
                                        <p className="historylist">Rev. F. W. Riley ( 1924-1926 )</p>
                                        <p className="historylist">Rev. James R. White ( 1926-1933 )</p>
                                        <p className="historylist">Rev. J. H. Tucker ( 1933-1934 )</p>
                                        <p className="historylist">Rev. Blunt ( 1934-1935 )</p>
                                        <p className="historylist">Rev. Polk K. Fonvielle ( 1935-1946 )</p>
                                        <p className="historylist">Rev. Dr. Clinton L. Wilcox, Sr. ( 1946-1967 )</p>
                                        <p className="historylist">Rev. Dr. Clinton Hoggard ( 1967-1968 )</p>
                                        <p className="historylist">Rev. Dr. Belvie Holland Jackson, Jr. ( 1968-1993 )</p>
                                        <p className="historylist">Rev. Dr. W. Darin Moore ( 1993-2012 )</p>
                                        <p className="historylist">Rev. Dr. Dwayne A. Walker ( 2012-Present )</p>
                                        

                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
