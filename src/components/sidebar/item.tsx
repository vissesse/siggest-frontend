//import { NavLink } from "react-router-dom"
//import { formatDate, conteudoLiberado } from '../utils/utils'

import { NavLink } from "react-router-dom"

interface ItemProps {
    item_name: string,
    icon: string
    hrf?: string,
    active?:any
}


export function Item(item: ItemProps) { 

    //{//({ isActive }) => "hover:underline nav-link" + (isActive ? " font-bold" : "nav-link")}
    return (
        <NavLink
            className={({ isActive }) => "" + (isActive ? "active-link" : "nav-link")}
            to={`${item.hrf}`}>
            <span className="w-5 mx-2 block"><i className={`fa fa-${item.icon}`}></i></span>
            <span className={`mx-2 block`} >{item.item_name}</span>
        </NavLink>
    )
}

/**
 * 
                <div className="my-0"> <i className={`fa fa-${item.icon}`}></i></div>
                <span className="my-0 px-4" >  {item.item_name} </span>
 */