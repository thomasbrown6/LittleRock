import PropTypes from 'prop-types'
import Link from 'next/link'
import Menu2 from './Menu2'

const Header = (props) => (
    <div>
        <Menu2 />
    <header id="header" className="alt">
        <Link href="/">
            <a className="logo">
                {/* <strong>Little Rock</strong> <span>A.M.E. Zion</span> */}
            </a>
        </Link>
        <div className="nav-menu">
            <ul>
                <li><Link href="/"><a className="nav-link">Home</a></Link></li>
                <li><Link href="/"><a className="nav-link">Who We Are</a></Link></li>
                <li><Link href="/"><a className="nav-link">Get Connected</a></Link></li>
                <li><Link href="/"><a className="nav-link">Ministries</a></Link></li>
                <li><Link href="/"><a className="nav-link">News & Events</a></Link></li>
                <li><Link href="/"><a className="nav-link">Media & Resources</a></Link></li>
                <li><Link href="/"><a className="nav-link">Quick Links</a></Link></li>
            </ul>
        </div>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;"></a>
        </nav>
    </header>
    </div>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
