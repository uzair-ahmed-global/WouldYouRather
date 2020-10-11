import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = (props) => {
    return (
        <div>
            <li>
                <NavLink
                    to={props.path}
                    exact>
                    {props.children}
                </NavLink>
            </li>
        </div>
    )
}

export default NavItem
