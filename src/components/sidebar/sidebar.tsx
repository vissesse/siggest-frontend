import { NavLink } from "react-router-dom";
import { Item } from "./item";

export function SideBar() {
    return (
        <aside className="flex flex-col w-60 border-r border-zinc-800 gap-4 bg-zinc-800">
            <span className="mx-7 mt-3 font-semibold">
                MY PROFILE
            </span>
            <Item icon="user" item_name="Sing in" />
            <span className="block border-b border-zinc-500"></span>

            <span className="mx-7 font-semibold">COMMUNITY</span>
            <Item hrf={`/`} icon="home" item_name="Home" />

            <Item hrf={`/project/instic`} icon="mortar-board" item_name="Projectos" /> 
            <Item hrf={`/docente`} icon="users" item_name="Docentes" />
            <Item hrf={``} icon="check-square" item_name="Moderation" />

            <span className="block border-b border-zinc-500"></span>
            <span className="mx-7 font-semibold">BETA TESTING</span>

            <Item icon="gears" item_name="Software" />
            <Item icon="compact-disc" item_name="ISO Images" />
            <Item icon="user-friends" item_name="Teams" />

            <Item icon="comments" item_name="Chat room" />

        </aside>

    )
}

/**
 * 
 *    <span className="side-title">
                cronograma de aulas
            </span>
              <Item icon="user" item_name="Sing in" />
                <span className="side-title">COMMUNITY</span>
                
                <Item icon="circle" item_name="Ideas" />
                <Item icon="mortar-board" item_name="Tutorias" />
                <Item icon="gears" item_name="Software" />
                <Item icon="laptop" item_name="Hardware" />
                <Item icon="users" item_name="Users" />
                <Item icon="check-square" item_name="Moderation" />
                <Item icon="comments" item_name="Chat room" />
                <span className="side-title">BETA TESTING</span>
                <Item icon="compact-disc" item_name="ISO Images" />
                <Item icon="user-friends" item_name="Teams" />
 */