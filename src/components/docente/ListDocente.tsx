import { NavLink } from "react-router-dom";
import { Docente } from "../../data/types";
import { Link } from "../Link";
interface Idocente {
    docentes: Docente[] 
    destaque?: boolean
}


export function ListDocente({ docentes, destaque }: Idocente) {
    let i = 0;
    return (
        <table>
            <thead >
                <th >Nome</th>
                <th >Formacao</th>
                <th >Insituto</th>
                <th >Projectos</th>
                <th >Livros</th>
                {destaque ?
                    (<th >Mais</th>) : ``}
            </thead>
            <tbody >
                {docentes.map(docente => (
                    <tr key={`${docente.id}`}>
                        <td>
                            <NavLink to={destaque ? `/destaque/docente/${docente.id}` : `/docente/${docente.id}/`}
                                className={({ isActive }) => "hover:underline" + (isActive ? " font-bold" : "")}
                            >
                                {docente.nome}
                            </NavLink>
                        </td>
                        <td>{docente.formacao}</td>
                        <td>{docente.instituto}</td>
                        <td>{docente.projectos}</td>
                        <td>{docente.livros}</td>
                        {destaque ? (<td><Link name="mais" link={`/docente/${docente.id}/`} /></td>) : ``}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}