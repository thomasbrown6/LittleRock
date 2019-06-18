import Link from 'next/link'

const Menu2 = (props) => (
    <nav id="menu2">
        <div className="menu2-container">
            <ul className="top-menu">
                <li><Link href="/get-connected/visitors"><a>New Here?</a></Link></li>
                <li><Link href="/media-resources/watch-online"><a>Watch Live</a></Link></li>
                <li><Link href="/get-connected/tithes-offerings"><a>Give Today</a></Link></li>
            </ul>
            <div className="spacer"/>
            <ul className="icons">
                <li><a href="#" target="_blank" className="icon fa-twitter"><span className="label"></span></a></li>
                <li><a href="https://www.facebook.com/LittleRockAMEZion/" target="_blank" className="icon fa-facebook-square"><span className="label"></span></a></li>
                <li><a href="#" target="_blank" className="icon fa-instagram"><span className="label"></span></a></li>
                <li><a href="#" target="_blank" className="icon fa-youtube"><span className="label"></span></a></li>
            </ul>
        </div>
    </nav>
)


export default Menu2
