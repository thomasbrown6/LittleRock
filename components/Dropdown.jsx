import Link from 'next/link'

const Dropdown = (props) => (
    
    <ul className={props.hidden}>
        {/* {props.activeIndex != null && (
            )} */}
            {props.item1 != null && (
                <li>
                <Link href={props.url1}>
                <a className="rightmenu-link">{props.item1}</a>
                </Link>
                </li>
                )}
        {props.item2 != null && (
        <li>
            <Link href={props.url2}>
                <a className="rightmenu-link">{props.item2}</a>
            </Link>
        </li>
        )}
        {props.item3 != null && (
        <li>
            <Link href={props.url3}>
                <a className="rightmenu-link">{props.item3}</a>
            </Link>
        </li>
        )}
        {props.item4 != null && (
        <li>
            <Link href={props.url4}>
                <a className="rightmenu-link">{props.item4}</a>
            </Link>
        </li>
        )}
        {props.item5 != null && (
        <li>
            <Link href={props.url5}>
                <a className="rightmenu-link">{props.item5}</a>
            </Link>
        </li>
        )}
        {props.item6 != null && (
        <li>
            <Link href={props.url6}>
                <a className="rightmenu-link">{props.item6}</a>
            </Link>
        </li>
        )}
        {props.item7 != null && (
        <li>
            <Link href={props.url7}>
                <a className="rightmenu-link">{props.item7}</a>
            </Link>
        </li>
        )}
        </ul>

)

export default Dropdown
