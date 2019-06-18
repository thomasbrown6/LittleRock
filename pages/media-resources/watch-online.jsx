import Link from "next/link";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Map from "../../components/Map";
import { Container, Row, Col } from "react-bootstrap";
import YouTube from "react-youtube";

class WatchOnline extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  render() {
    const opts = {
      height: "900",
      width: "1200",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <Layout>
        <div>
          <Banner
            id="banner"
            headerText="Watch Online"
            Breadcrumb1="HOME"
            tag1="a"
            href1="/"
            Breadcrumb2="GET CONNECTED"
            tag2="a"
            href2="#"
            Breadcrumb3="Watch Online"
            tag3="span"
          />

          <div className="secondary">
            <section id="two">
              <div className="inner">
                <Container>
                  <div className="left">
                    <Row>
                      <Col xs={12}>
                        <header className="major">
                          <h1>Watch Online</h1>
                        </header>
                      </Col>
                    </Row>
                    <Row>
                      <div className="center">
                        <Col xs={12}>
                          <YouTube
                            videoId={"TTLuhF9TRaA"} // defaults -> null
                            id={"YoutubePlayer"} // defaults -> null
                            className={"YoutubePlayer center"} // defaults -> null
                            containerClassName={null} // defaults -> ''
                            opts={opts} // defaults -> {}
                            onReady={this._onReady} // defaults -> noop
                            // onPlay={func}                     // defaults -> noop
                            // onPause={func}                    // defaults -> noop
                            // onEnd={func}                      // defaults -> noop
                            // onError={func}                    // defaults -> noop
                            // onStateChange={func}              // defaults -> noop
                            // onPlaybackRateChange={func}       // defaults -> noop
                            // onPlaybackQualityChange={func}    // defaults -> noop
                          />
                        </Col>
                      </div>
                    </Row>
                  </div>
                </Container>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}

export default WatchOnline;
