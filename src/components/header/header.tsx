import { NavLink } from "react-router-dom";

export function Header() {
    // cores 
    return (
        <header
            className="flex justify-between p-5 border-b border-zinc-500  bg-zinc-800">
            <NavLink to={`/`} className="flex">
                <span className="mx-1 block text-3xl" >
                    <i className="fa fa-s"></i></span>
                <span className="text-3xl block" >IGGEST</span>
                <span className="left-[250px] block">
                    <i className="mx-4 pt-2 fa fa-bars"></i>
                </span>
            </NavLink>
            <div className="login-form">
                <a href="#">
                    <span className=""> <i className="fa fa-user"></i> </span>
                    login
                </a>
            </div>
        </header>
    )
}