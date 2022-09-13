import { Projecto } from "../../data/types";
import { getData } from "../../utils/utils"; 

interface IProjecto {
    projectos: Projecto[]
}


export function ProjectList({ projectos }: IProjecto) {
    let i = 0

    return (
        <table  >
            <thead>
                <th>Titulo</th>
                <th>Curso</th>
                <th>Data defesa</th>
            </thead>
            <tbody >
                {projectos.map(projecto => (
                    <tr className={i++ ? '' : `border-b border-red-900 font-bold`}>
                        <td className="p-4">{projecto.titulo}</td>
                        <td className="p-4">{projecto.curso}</td>
                        <td className="p-4">{`${getData(projecto.dataDefesa)}`}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}