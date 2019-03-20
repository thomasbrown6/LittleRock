import Link from 'next/link'
import AliceCarousel from 'react-alice-carousel'


class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0
        }
    }
    //  handleOnDragStart = e => e.preventDefault()
    // slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });
    // slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

    render() {
        return (
        
            <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>{this.props.title}</h1>
            </header>
            <div className="content">
                <p>{this.props.p}</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">{this.props.buttontext}</a></li>
                </ul>
                <Link href={this.props.linkhref}><a>{this.props.link}</a></Link>
            </div>
        </div>
    </section>
        
        // <section id="banner2" className="major">
        //     <div className="inner">
        //         <button className="carouselbutton" onClick={() => this.slidePrev()}>{"<<"}</button>

        //         <AliceCarousel
        //             mouseDragEnabled
        //             duration={4000}
        //             autoPlay={true}
        //             fadeOutAnimation={true}
        //             stopAutoPlayOnHover={false}
        //             dotsDisabled={true}
        //             buttonsDisabled={true}
        //         >
        //             <img src="../static/images/church1.jpg" onDragStart={this.handleOnDragStart} className="img-carousel-1" />
        //             <img src="../static/images/church2.jpg" onDragStart={this.handleOnDragStart} className="img-carousel-2" />
        //             <img src="../static/images/church3.jpg" onDragStart={this.handleOnDragStart} className="img-carousel-3" />
        //             <img src="../static/images/church4.jpg" onDragStart={this.handleOnDragStart} className="img-carousel-4" />
        //             <img src="../static/images/church5.jpg" onDragStart={this.handleOnDragStart} className="img-carousel-5" />
        //         </AliceCarousel>

        //         <button className="carouselbutton" onClick={() => this.slideNext()}>{">>"}</button>
        //     </div>
        // </section>
        )
    }
}

export default Banner









// <section id="banner" className="major">
//         <div className="inner">
//             <header className="major">
//                 <h1>{props.title}</h1>
//             </header>
//             <div className="content">
//                 <p>{props.p}</p>
//                 <ul className="actions">
//                     <li><a href="#one" className="button next scrolly">{props.buttontext}</a></li>
//                 </ul>
//                 <Link href={props.linkhref}><a>{props.link}</a></Link>
//             </div>
//         </div>
//     </section>
