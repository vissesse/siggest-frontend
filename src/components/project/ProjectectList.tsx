import { NavLink } from "react-router-dom";
import { Projecto, STATUS } from "../../data/types";
import { getData } from "../../utils/utils";

interface IProjecto {
    projectos: Projecto[]
}


function status(status: number) {
    if (status == STATUS.DEFENDIDO) return "DEFENDIDO"
    if (status == STATUS.PORDEFENDER) return "POR-DEFENDER"
    return "REPROVADO"
}

export function ProjectList({ projectos }: IProjecto) {
    let i = 0

    return (
        <table  >
            <thead>
                <th>Titulo</th>
                <th>Curso</th>
                <th>Data defesa</th>
                <th>Status</th>
            </thead>
            <tbody >
                {projectos.map(projecto => (
                    <tr key={projecto.id}>
                        <td className="p-4">
                            <NavLink to={`/project/instic/${projecto.id}/`}
                                className={({ isActive }) => "hover:underline" + (isActive ? " font-bold" : "")}
                            >
                                {projecto.titulo.toUpperCase()}
                            </NavLink>
                        </td>
                        <td className="px-4 Py-2">{projecto.curso}</td>
                        <td className="px-4 Py-2">{`${getData(projecto.dataDefesa)}`}</td>
                        <td className="px-4 Py-2">{status(projecto.status)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}