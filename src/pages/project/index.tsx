
import { Outlet, useParams } from "react-router-dom";
import { ProjectosData } from "../../data/data";
import { Projecto, STATUS } from "../../data/types";
import { ProjectListPage } from "./ProjectListPage";

/**
 * 
 * @param filter number especico para cada  filtro{1=projectos, defendidos, 2=por defender, e 3=ndefendido} 
 */
function projectFilterBy(filter: number, projectos: Projecto[]) {

    let projecto;

    switch (filter) {
        case STATUS.DEFENDIDO:
            projecto = projectos.filter((pj) => pj.status == STATUS.DEFENDIDO)
            break;
        case STATUS.PORDEFENDER:
            projecto = projectos.filter((pj) => pj.status == STATUS.PORDEFENDER)
            break;
        case STATUS.REPROVADO:
            projecto = projectos.filter((pj) => pj.status == STATUS.REPROVADO)
            break;
        default:
            return projectos;
    }

    return projecto
}


export function ProjectIndex() { 
    const projectos = projectFilterBy(parseInt(`0${0}`), ProjectosData)

    return (
        <>
            <ProjectListPage projectos={projectos} />
            <Outlet />
        </>
    )
}

