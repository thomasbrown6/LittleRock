import Link from 'next/link'

const Menu2 = (props) => (
    <nav id="menu2">
        <div className="menu2-container">
            <ul className="top-menu">
                <li><Link><a href="#">New Here?</a></Link></li>
                <li><Link><a href="#">Watch Live</a></Link></li>
                <li><Link><a href="#">Give Today</a></Link></li>
            </ul>
            <div className="spacer"/>
            <ul className="icons">
                <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
        </div>
    </nav>
)


export default Menu2
