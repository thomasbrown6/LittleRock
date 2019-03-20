import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a className="nav-link"><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/who-we-are"><a className="nav-link"><span onClick={props.onToggleMenu}>Who We Are</span></a></Link></li>
                {/* <div className="dropdown-navbar">
                    <ul className="nav-navbar">
                        <li><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>Meet The Pastor</span></a></Link></li>
                        <li><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>What We Believe</span></a></Link></li>
                        <li><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>What is the A.M.E. ZION CHURCH</span></a></Link></li>
                        <li><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>Our History</span></a></Link></li>
                        <li><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>Our Staff</span></a></Link></li>
                        <li><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>Stewards & Trustees</span></a></Link></li>
                        <li><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>Times & Directions</span></a></Link></li>
                    </ul>
                </div> */}
                <li><Link href="/get-connected"><a className="nav-link"><span onClick={props.onToggleMenu}>Get Connected</span></a></Link></li>
                <li><Link href="/ministries"><a className="nav-link"><span onClick={props.onToggleMenu}>Ministries</span></a></Link></li>
                <li><Link href="/news-events"><a className="nav-link"><span onClick={props.onToggleMenu}>News & Events</span></a></Link></li>
                <li><Link href="/media-resources"><a className="nav-link"><span onClick={props.onToggleMenu}>Media & Resources</span></a></Link></li>
                <li><Link href="/quick-links"><a className="nav-link"><span onClick={props.onToggleMenu}>Quick Links</span></a></Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Watch Online</a></li>
                {/* <li><a href="#" className="button fit">Log In</a></li> */}
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
