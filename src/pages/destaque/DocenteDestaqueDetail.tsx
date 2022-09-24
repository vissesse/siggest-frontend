import { Circle } from "../../components/Circle";
import { Docentes, EmpDocente } from "../../data/data";
import { useParams } from "react-router-dom";
import { DocenteDetailHeader } from "../../components/docente/Cabecalho";
import { NotFoundEntity } from "../../components/NotFoudComponet";
import { DocenteDadosPessoais } from "../../components/docente/DocenteFullDetail";

type docenteDetaial = {
    docente: string
    instituto: string
    formacao: string
    projectos: number
    artigos: number
    disciplinas: number
    contacto: string
}
export function DocenteDestaqueDetail() {
    const { id } = useParams()
    const docente = Docentes.find((docente) => docente.id == id) || EmpDocente

    let smg = "Docente nao Encontrad"
    if (id == null && docente.id == null) {
        smg = "Selecione um docente!"
    } else if (!id && docente.id == null) {
        smg = "Docente not found"
    }


    return docente.id ? (
        < div className="w-[38%] p-5 rounded-md border border-zinc-600 bg-zinc-800 " >
            <DocenteDetailHeader contacto={docente.contacto || '9xx xxx xxx'} formacao={docente.formacao} foto={docente.nome} instituto={docente.instituto} nome={docente.nome} />
            <hr className="border-b border-red-400" />
            <div className="pt-16 flex justify-between">
                <Circle item="Projectos" value={`${docente.projectos}`} />
                <Circle item="Artigos" value={`${docente.artigos}`} />
                <Circle item="Disciplinas lecionadas" value={`${docente.disciplinas}`} />
            </div>
        </div >
    ) : NotFoundEntity({ param: id, entity: docente })
}
