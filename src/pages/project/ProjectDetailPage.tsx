import { Circle } from "../../components/Circle";
import { Title } from "../../components/Title";
import { ProjectoDetail } from "../../components/project/ProjectDetail";
import { NonePorject, ProjectosData } from "../../data/data";
import { useParams } from "react-router-dom";
import { NotFoundEntity } from "../../components/NotFoudComponet"; 

 

export function ProjectoDetailPage() {
    const { projectoId } = useParams()
    const projecto = ProjectosData.find((docente) => (docente.id == projectoId)) || NonePorject


    return projecto.id ? (
        <div className="w-[38%] p-5 rounded-md border border-zinc-600 bg-zinc-800 ">
            <div className="flex gap-x-20">
                <div>
                    <div className="font-bold">
                        <Title title={projecto.titulo} />
                    </div>
                    <ProjectoDetail autores={projecto.autores} dataDefesa={projecto.dataDefesa} />
                </div>
            </div>
            <hr className="my-4 border-red-400" />
            <div className="flex gap-12 justify-center">
                <Circle item={projecto.tutor} value={`tutor`} />
                <Circle item={`${projecto.coTutor}`} value={`co-tutor`} />
            </div>
        </div>
    ) : NotFoundEntity({ param: projectoId, entity: projecto })

}

