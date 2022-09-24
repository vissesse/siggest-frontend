import { Docentes } from "../../data/data"
import { DestaqueListDocente } from "./DocenteDestaqueList"
import { Outlet } from "react-router-dom"

/**
 * Home page
 * @returns 
 */
export function DocenteDestaque() {
    const artigos = 30
    const disciplinas = 40
    const projectos = 40
    let docentes = []
    for (let i = 0; i < 5; i++) {
        docentes.push(Docentes[i])

    }
    const formacao = docentes[0].formacao
    const instituto = docentes[0].instituto
    const docente = docentes[0].nome

    return (
        <>
            <DestaqueListDocente docentes={docentes} />
            <Outlet />
        </>
    )
}