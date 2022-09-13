import { Autor, Projecto } from "../../data/types";
import { getData } from "../../utils/utils";

interface IProjectoDe {
    autores: Autor[]
    dataDefesa: Date
}


export function ProjectoDetail({ autores, dataDefesa }: IProjectoDe) {
    return (
        <table>
            <legend className="pb-4">
                Data defesa: {getData(dataDefesa)}
            </legend>
            <thead >
                <th>Autor</th>
                <th>Contacto</th>
                <th>Email</th>
            </thead>
            <tbody>
                {autores.map(autor => (
                    <tr>
                        <td>{autor.nome} {autor.sobrenome}</td>
                        <td>{autor.telefone}</td>
                        <td>{autor.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}
