import { useParams } from "react-router-dom"
import { FormacaoAcademicaData, FormacaoProfissionalData } from "../../../data/data"
import { getData } from "../../../utils/utils"

export function Formacao() {
    const { id } = useParams()
    const formacaoAcademica = FormacaoAcademicaData.filter(formacao => formacao.docente_id == id)


    return (
        <>
            <table>
                <legend >Formacao Academica </legend>
                <thead  className="flex">
                    <th >Curso</th>
                    <th className="">Instituição</th>
                    <th className="">País</th>
                    <th className="justify-end">Data</th>
                    <th className="justify-items-end">Grau</th>
                </thead>
                <tbody>
                    {formacaoAcademica.map(formacao => (
                        <tr key={formacao.id}>
                            <td>{formacao.curso}</td>
                            <td className="">{formacao.instituicao}</td>
                            <td className="">{formacao.pais}</td>
                            <td className="justify-end">{getData(formacao.data)}</td>
                            <td className="justify-items-end">{formacao.grau}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-6">
                {FormacaoProfissional()}
            </div>
        </>
    )

}


function FormacaoProfissional() {
    const { id } = useParams()
    const formacaoProfissional = FormacaoProfissionalData.filter(formacao => formacao.docente_id == id)

    return (
        <table>
            <legend>Formacao Profissional </legend>
            <thead className="">
                <th>Curso</th>
                <th>Instituição</th>
                <th>Data</th>
                <th>Grau</th>
            </thead>
            <tbody>
                {formacaoProfissional.map(formacao => (
                    <tr key={formacao.id}>
                        <td>{formacao.curso}</td>
                        <td className="ml-20">{formacao.instituicao}</td>
                        <td className="ml-20">{formacao.cargaHoraria}</td>
                        <td className="ml-20">{getData(formacao.data)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}