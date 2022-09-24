import { useParams } from "react-router-dom"
import { ActividadesProfissionaisData, DisciplinaMinistradaData } from "../../../data/data"
import { getData } from "../../../utils/utils"

export function ActividadesProfissionais() {
    const { id } = useParams()
    const aProfissionais = ActividadesProfissionaisData.filter(actividade => actividade.docente_id == id)

    return (
        <>
            <table>
                <legend >Actividades Profissionais </legend>
                <thead className="flex">
                    <th >Actividade</th>
                    <th className="">Instituição</th>
                    <th className="">Cargo</th>
                    <th className="justify-end">DataInicio</th>
                    <th className="justify-items-end">DataTermino</th>
                </thead>
                <tbody>
                    {aProfissionais.map(actividade => (
                        <tr key={actividade.id}>
                            <td>{actividade.actividade}</td>
                            <td className="">{actividade.instituicao}</td>
                            <td className="">{actividade.cargoExercido}</td>
                            <td className="justify-end">{getData(actividade.dataInicio)}</td>
                            <td className="justify-items-end">{getData(actividade.dataTermino)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-6">
                {DisciplinaMinistrada()}
            </div>
        </>
    )

}


function DisciplinaMinistrada() {
    const { id } = useParams()
    const disciplinasMinistradas = DisciplinaMinistradaData.filter(disciplina => disciplina.docente_id == id)

    return (
        <table>
            <legend>Disciplinas Ministrada </legend>

            <thead className="">
                <th>Disciplina</th>
                <th>Instituição</th>
                <th>Curso</th>
                <th>Experiencia</th>
                <th>Status</th>
            </thead>
            <tbody>
                {disciplinasMinistradas.map(disciplina => (
                    <tr key={disciplina.id}>
                        <td>{disciplina.disciplina}</td>
                        <td >{disciplina.instituicao}</td>
                        <td>{disciplina.curso}</td>
                        <td>{disciplina.experiencia}</td>
                        <td>{disciplina.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}