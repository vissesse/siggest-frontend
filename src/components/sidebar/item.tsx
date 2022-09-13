//import { NavLink } from "react-router-dom"
//import { formatDate, conteudoLiberado } from '../utils/utils'

interface ItemProps {
    item_name: string,
    icon: string
}


export function Item(item: ItemProps) {


    return (
        <a className="flex mx-6 w-auto hover:bg-zinc-100 hover:rounded hover:text-zinc-800" href="#">
            <span className="w-5 mx-2 block"><i className={`fa fa-${item.icon}`}></i></span>
            <span className="mx-2 block" >{item.item_name} </span>
        </a>
    )
}

/**
 * 
                <div className="my-0"> <i className={`fa fa-${item.icon}`}></i></div>
                <span className="my-0 px-4" >  {item.item_name} </span>
 */