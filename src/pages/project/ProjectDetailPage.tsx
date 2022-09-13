import { Projecto } from "../../data/types";
import { getData } from "../../utils/utils";
import { Circle } from "../../components/Circle";
import { Title } from "../../components/Title";
import { ProjectoDetail } from "../../components/project/ProjectDetail";


export function ProjectoDetailPage({ titulo, autores, tutor, coTutor, curso, dataDefesa }: Projecto) {
    return (
        <div className="w-[38%] p-5 rounded-md border border-zinc-600 bg-zinc-800 ">
            <div className="flex gap-x-20">
                <div>
                    <div className="font-bold">
                        <Title title={titulo} />
                    </div>
                    <ProjectoDetail  autores={autores} dataDefesa={dataDefesa}  />
                </div>
            </div>
            <hr className="my-4 border-red-400" />
            <div className="flex gap-12 justify-center">
                <Circle item={tutor} value={`tutor`} />
                <Circle item={`${coTutor}`} value={`co-tutor`} />
            </div>
        </div>
    )

}
