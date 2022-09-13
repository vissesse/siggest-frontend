import { Circle } from "../../components/Circle";
import { Title } from "../../components/Title";
import { Foto } from "../../components/docente/Foto";

type docenteDetaial = {
    docente: string
    instituto: string
    formacao: string
    projectos: number
    artigos: number
    disciplinas: number
}
export function DocenteDetail({ docente, formacao, instituto, projectos, artigos, disciplinas }: docenteDetaial) {
    return (
        <div className="w-[38%] p-5 rounded-md border border-zinc-600 bg-zinc-800 ">
            <div className="flex gap-x-20">
                <div>
                    <div className="font-bold">
                        <Title title={docente} />
                    </div>
                    <p>{formacao} </p>
                    <p>Pelo {instituto}</p>
                </div>
                <Foto nome={docente} foto={docente} />
            </div>
            <hr className="border-b border-red-400" />
            <div className="pt-16 flex gap-2">
                <Circle item="Projectos" value={`${projectos}`} />
                <Circle item="Artigos" value={`${artigos}`} />
                <Circle item="Disciplinas lecionadas" value={`${disciplinas}`} />
            </div>
        </div>
    )

}
