import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import { Container, Row, Col } from 'react-bootstrap'

export default () => (
    <Layout>
        <div>
            <Banner
                title="Little Rock"
                p=""
                buttontext="WATCH NOW"
                link="VIEW MORE SERMONS"
                linkhref="/sermons"
            />

            <div id="main">
                
            <section id="two">
                    <div className="inner">
                        <Container>
                        <Row>
                                <Col>
                                <header className="major">
                            <h2>Section 1</h2>
                        </header>
                        <p>Here will be important information regarding the church</p>
                        <ul className="actions">
                            <li><Link href="/"><a className="button next">Give Online</a></Link></li>
                        </ul>
                                </Col>
                                <Col xs={6}>
                                <header className="major">
                            <h2>Section 2</h2>
                        </header>
                        <p>Here will be important information regarding the church</p>
                        <p>Also, white border around logo will not be there for production</p>
                        <ul className="actions">
                            <li><Link href="/"><a className="button next">Watch Online</a></Link></li>
                        </ul>
                                </Col>
                                <Col>
                                <header className="major">
                            <h2>Section 3</h2>
                        </header>
                        <p>Here will be important information regarding the church</p>
                        <ul className="actions">
                            <li><Link href="/"><a className="button next">Events</a></Link></li>
                        </ul>
                                </Col>
                        </Row>
                        </Container>
                       
                       
                        
                    </div>
                </section>

                {/* <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/church-img5.jpg')`}}>
                        <header className="major">
                            <h3>Meet Our Pastor</h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>Tempus</h3>
                            <p>feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Magna</h3>
                            <p>Lorem etiam nullam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                        <header className="major">
                            <h3>Ipsum</h3>
                            <p>Nisl sed aliquam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic05.jpg')`}}>
                        <header className="major">
                            <h3>Consequat</h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic06.jpg')`}}>
                        <header className="major">
                            <h3>Etiam</h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section> */}
            </div>

        </div>
    </Layout>
)
