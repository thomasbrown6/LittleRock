const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <div className="logo-wrapper">
            <img className="logo"/>
            </div>
            <ul className="icons">
                <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li><span className="bold">Little Rock AME Zion &copy; 2019 </span>| 401 North McDowell Street, Charlotte, North Carolina 28204 | <span className="bold">(704)334-3782 </span></li>
            </ul>
        </div>
    </footer>
)

export default Footer
