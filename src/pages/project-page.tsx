 
import { ProjectosData } from "../data/data";
import { ProjectoDetailPage } from "./project/ProjectDetailPage";
import { ProjectListPage } from "./project/ProjectListPage";


export function ProjectPage() {
    const projectos = ProjectosData
    const projecto = projectos[0]
    return (
        <>
            <ProjectListPage projectos={projectos} />
            <ProjectoDetailPage
                dataDefesa={projecto.dataDefesa} titulo={projecto.titulo}
                autores={projecto.autores} tutor={projecto.tutor}
                coTutor={projecto.coTutor} curso={projecto.curso} />
        </>
    )
}