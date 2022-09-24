import { NavLink } from "react-router-dom"

interface ILink {
    name: string
    link: string
    icon?: string
    active?: string
}

export function Link({ name, link }: ILink) {

    return (
        <NavLink
            to={link}
            
        >
            {name}
        </NavLink >
    )

}