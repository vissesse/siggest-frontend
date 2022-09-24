import { Projecto } from "../../data/types";
import { Title } from "../../components/Title";
import { ProjectList } from "../../components/project/ProjectectList";
import { InPut } from "../../components/Input";

interface IProjecto {
    projectos: Projecto[]
}


export function ProjectListPage({ projectos }: IProjecto) {
    let i = 0

    return (
        <div className="w-[60%] p-5 rounded-md block border border-zinc-600 bg-zinc-800">
            <div className="py-2 flex">
                <h6 className="text-2xl pr-2">Projectos</h6>
                <span className="fa fa-search text-zinc-100 p-1 ml-[30%] text-2xl"></span>
                <InPut name="text" placeHolder="search by: Titulo, integrante, Tutor..." w="full" />
            </div>
            <ProjectList projectos={projectos} />
            <div className="justify-end">
                <p className="font-semibold text-zinc-100 float-right p-2 underline">
                    {projectos.map(element => (`${i++}/`))} mais...</p>
            </div>
        </div>
    )
}