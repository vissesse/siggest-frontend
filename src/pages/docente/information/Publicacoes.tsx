import { useParams } from "react-router-dom"
import { ArtigosData, LivrosData } from "../../../data/data"
import { getData } from "../../../utils/utils"

export function Publicacoes() {
    const { id } = useParams()
    const livrosData = LivrosData.filter(livro => livro.docente_id == id)
    return (
        <>
            <table>
                {/**Titulo 	Editora 	ISBN 	Ano 	Paginas */}
                <legend >Livros publicados </legend>
                <thead className="flex">
                    <th >Titulo</th>
                    <th className="">Editora</th>
                    <th className="">ISBN</th>
                    <th className="justify-end">Ano</th>
                    <th className="justify-items-end">Paginas</th>
                </thead>
                <tbody>
                    {livrosData.map(livro => (
                        <tr key={livro.id}>
                            <td>{livro.titulo}</td>
                            <td className="">{livro.editora}</td>
                            <td className="">{livro.ISBN}</td>
                            <td className="justify-items-end">{getData(livro.data)}</td>
                            <td className="justify-items-end">{livro.paginas}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-6">
                {Artigos()}
            </div> 
        </>
    )
}

function Artigos() {
    const { id } = useParams()
    const livrosData = ArtigosData.filter(livro => livro.docente_id == id)
    return (
        <>
            <table>
                {/**Titulo 	Editora 	ISBN 	Ano 	Paginas */}
                <legend >Artigos publicado </legend>
                <thead className="flex">
                    <th >Titulo</th>
                    <th className="">Revista</th>
                    <th className="justify-end">Ano</th>
                    <th className="justify-items-end">Paginas</th>
                </thead>
                <tbody>
                    {livrosData.map(livro => (
                        <tr key={livro.id}>
                            <td>{livro.titulo}</td>
                            <td className="">{livro.revista}</td>
                            <td className="justify-items-end">{getData(livro.data)}</td>
                            <td className="justify-items-end">{livro.paginas}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}