import { Docente } from "../../data/types"; 
interface docente {
    docentes: Docente[]
}


export function ListDocente({ docentes }: docente) {
    let i = 0;
    return (
        <table>
            <thead >
                <th >nome</th>
                <th >formacao</th>
                <th >insituto</th>
                <th >projectos</th>
                <th >livros</th>
                <th >idiomas</th>
            </thead>
            <tbody >
                {docentes.map(docente => (
                    <tr className={i++ ? '' : `border-b border-red-900 font-bold`}>
                        <td className="">{docente.nome}</td>
                        <td className="">{docente.formacao}</td>
                        <td className="">{docente.instituto}</td>
                        <td className="">{docente.projectos}</td>
                        <td className="">{docente.livros}</td>
                        <td className="">{docente.idioma}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}