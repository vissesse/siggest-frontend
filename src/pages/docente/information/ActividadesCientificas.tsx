import { useParams } from "react-router-dom"
import { JurizTCCData, OrientacaoTrabalhoAcademicoData, ProjectoParticipadoData } from "../../../data/data"
import { getData } from "../../../utils/utils"

export function ActividadesCientificas() {
    const { id } = useParams()
    const projectoParticipado = ProjectoParticipadoData.filter(projecto => projecto.docente_id == id)

    return (
        <>
            <table>
                <legend >Projectos participado </legend>
                <thead className="flex">
                    <th >Projecto</th>
                    <th className="">Instituição</th>
                    <th className="">Periro</th>
                    <th className="justify-end">DataInicio</th>
                    <th className="justify-items-end">DataTermino</th>
                </thead>
                <tbody>
                    {projectoParticipado.map(ptojecto => (
                        <tr key={ptojecto.id}>
                            <td>{ptojecto.titulo}</td>
                            <td className="">{ptojecto.instituicao}</td>
                            <td className="">{getData(ptojecto.dataInicio)}</td>
                            <td className="justify-items-end">{getData(ptojecto.dataTermino)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-6">
                {OrientacaoTrabalhoAcademico()}
            </div>
            <div className="mt-6">
                {TCCJulgado(id)}
            </div>
        </>
    )

}


function OrientacaoTrabalhoAcademico() {
    const { id } = useParams()
    const disciplinasMinistradas = OrientacaoTrabalhoAcademicoData.filter(projecto => projecto.docente_id == id)

    return (
        <table>
            <legend>Trabalhos orientado </legend>

            <thead className="">
                <th>Titulo</th>
                <th>Instituição</th>
                <th>Curso</th>
                <th>Autor</th>
                <th>DataDefesa</th>
            </thead>
            <tbody>
                {disciplinasMinistradas.map(projecto => (
                    <tr key={projecto.id}>
                        <td>{projecto.instituicao}</td>
                        <td >{projecto.projecto.titulo}</td>
                        <td>{projecto.projecto.curso}</td>
                        <td>{projecto.projecto.autores.map(autor => autor.nome)}</td>
                        <td>{getData(projecto.projecto.dataDefesa)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}

function TCCJulgado(docente_id: string | undefined) {
    const projectoJulgado = JurizTCCData.filter(project => project.id == docente_id)
    return (
        <table>
            <legend>Trabalhos Cientificos jugado</legend>
            {/*Tutilo 	Instituicao 	Autor 	Orientador 	Grau 	Função*/}
            <thead className="">
                <th>Titulo</th>
                <th>Instituição</th>
                <th>Autor</th>
                <th>Orientador</th>
                <th>Funcao</th>
                <th>DataDefesa</th>
            </thead>
            <tbody>
                {projectoJulgado.map(projecto => (
                    <tr key={projecto.id}>
                        <td>{projecto.projecto.titulo}</td>
                        <td>{projecto.instituicao}</td>
                        <td>{projecto.projecto.autores.map(autor => autor.nome)}</td>
                        <td >{projecto.tutor}</td>
                        <td>{projecto.funcao}</td>
                        <td>{getData(projecto.projecto.dataDefesa)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}