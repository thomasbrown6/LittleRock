import Link from 'next/link'

const Footer = (props) => (
    <footer id="footer">
        <Link href="/">
            <a>
        <img className="footer-image" src={require("../static/images/logo2.png")}/>
        </a>
        </Link>
        <div className="inner">
            {/* <Link href="/">
                <a className="image"><img src="/static/images/logo2.png" alt="" className="image-footer" /></a>
            </Link> */}
            <ul className="copyright">
                <li><span className="bold">Little Rock AME Zion &copy; 2019 </span>| 401 North McDowell Street, Charlotte, North Carolina 28204 | <span className="phone"><a href="tel:7043343782">(704)334-3782</a> </span></li>
            </ul>
            <ul className="icons">
                <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
