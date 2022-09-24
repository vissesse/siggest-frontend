import { Projecto } from "../../data/types"; 
import { Title } from "../../components/Title";
import { ProjectList } from "../../components/project/ProjectectList";

interface IProjecto {
    projectos: Projecto[]
}


export function ProjectListPage({ projectos }: IProjecto) {
    let i = 0

    return (
        <div className="w-[60%] p-5 rounded-md block border border-zinc-600 bg-zinc-800">
            <Title title={`Projectos`} />
            <ProjectList projectos={projectos} />
            <div className="justify-end">
                <p className="font-semibold text-zinc-100 float-right p-2 underline">
                    {projectos.map(element => (`${i++}/`))} mais...</p>
            </div>
        </div>
    )
}