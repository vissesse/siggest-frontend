import { DocenteDetail } from "./DocenteDestaqueDetail" 
import { Docentes } from "../../data/data"
import { DestaqueListDocente } from "./DocenteDestaqueList"

/**
 * Home page
 * @returns 
 */
export function DocenteDestaque() {
    const artigos = 30
    const disciplinas = 40
    const projectos = 40
    const docentes = Docentes
    const formacao = docentes[0].formacao
    const instituto = docentes[0].instituto
    const docente = docentes[0].nome

    return (
        <>
            <DestaqueListDocente docentes={docentes} />
            <DocenteDetail docente={docente} instituto={instituto} formacao={formacao} artigos={artigos} disciplinas={disciplinas} projectos={projectos} />
        </>
    )
}