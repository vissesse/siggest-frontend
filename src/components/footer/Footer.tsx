import { NavLink } from "react-router-dom";
import { Box } from "./box";
export function Footer() {
    return (
        <div className="w-full flex justify-center">
            <div className="flex gap-2">
                <NavLink 
                    to={`docente`}><Box  color={`orange-600`} icon="user-graduate" quant={3233} title="Docentes" />
                </NavLink>
                <NavLink to={`project`}><Box color={`red-600`} icon="mortar-board" quant={3233} title="Projectos" /></NavLink>
                <NavLink to={`project?d=1`}><Box color={"green-600"} icon="user-graduate" quant={3233} title="projectos defendidos" /></NavLink>
                <NavLink to={`project?d=2`}><Box color={"blue-600"} icon="book" quant={3233} title="projectos por defender" /></NavLink>
                <NavLink to={`project?d=3`}><Box color={"blue-600"} icon="cancel" quant={3233} title="reprovados" /></NavLink>
            </div>
        </div>
    )
}