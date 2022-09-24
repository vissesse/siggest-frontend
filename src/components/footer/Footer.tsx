import { NavLink } from "react-router-dom";
import { Docentes, ProjectosData } from "../../data/data";
import { STATUS } from "../../data/types";
import { Box } from "./box";
export function Footer() {
    const docentes = Docentes.length
    const projectos = ProjectosData
    const Pdefendidos = projectos.filter(pj => pj.status == STATUS.DEFENDIDO)
    const PNdefendidos = projectos.filter(pj => pj.status == STATUS.PORDEFENDER)
    const PR = projectos.filter(pj => pj.status == STATUS.REPROVADO)
    return (
        <div className="w-full flex justify-center">
            <div className="flex gap-2">
                <NavLink
                    to={`/destaque/docente`}><Box color={`orange-600`} icon="user-graduate" quant={docentes} title="Docentes" />
                </NavLink>
                <NavLink to={`/project/instic/`}><Box color={`red-600`} icon="mortar-board" quant={projectos.length} title="Projectos" /></NavLink>
                <NavLink to={`/project/instic/?d=1`}><Box color={"green-600"} icon="user-graduate" quant={Pdefendidos.length} title="projectos defendidos" /></NavLink>
                <NavLink to={`/project/instic/?d=2`}><Box color={"blue-600"} icon="book" quant={PNdefendidos.length} title="projectos por defender" /></NavLink>
                <NavLink to={`/project/instic/?d=3`}><Box color={"blue-600"} icon="cancel" quant={PR.length} title="reprovados" /></NavLink>
            </div>
        </div>
    )
}