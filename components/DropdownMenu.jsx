import React from 'react'
import Link from 'next/link'

const DropdownMenu = props => (
    <div className={"submenu-dropdown-grid "}>
    <div className="width-1-1">
      <ul className="submenu-navbar">
        <li className="submenu-item">
          <Link href={props.URL_item1}>
            <a className="sub-link">{props.Title_item1}</a>
          </Link>
        </li>
        {props.Title_item2 != null && (
          <li className="submenu-item">
            <Link href={props.URL_item2}>
              <a className="sub-link">{props.Title_item2}</a>
            </Link>
          </li>
        )}
        {props.Title_item3 != null && (
          <li className="submenu-item">
            <Link href={props.URL_item3}>
              <a className="sub-link">{props.Title_item3}</a>
            </Link>
          </li>
        )}
        {props.Title_item4 != null && (
          <li className="submenu-item">
            <Link href={props.URL_item4}>
              <a className="sub-link">{props.Title_item4}</a>
            </Link>
          </li>
        )}
        {props.Title_item5 != null && (
          <li className="submenu-item">
            <Link href={props.URL_item5}>
              <a className="sub-link">{props.Title_item5}</a>
            </Link>
          </li>
        )}
        {props.Title_item6 != null && (
          <li className="submenu-item">
            <Link href={props.URL_item6}>
              <a className="sub-link">{props.Title_item6}</a>
            </Link>
          </li>
        )}
        {props.Title_item7 != null && (
          <li className="submenu-item">
            <Link href={props.URL_item7}>
              <a className="sub-link">{props.Title_item7}</a>
            </Link>
          </li>
        )}
        {props.Title_item8 != null && (
          <li className="submenu-item">
            <Link href={props.URL_item8}>
              <a className="sub-link">{props.Title_item8}</a>
            </Link>
          </li>
        )}
        {props.Title_item9 != null && (
          <li className="submenu-item">
            <Link href={props.URL_item9}>
              <a className="sub-link">{props.Title_item9}</a>
            </Link>
          </li>
        )}
        {props.Title_item10 != null && (
          <li className="submenu-item">
            <Link href={props.URL_item10}>
              <a className="sub-link">{props.Title_item10}</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  </div>
);

export default DropdownMenu;
