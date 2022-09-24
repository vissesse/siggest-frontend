import { Title } from "../Title"
import { Foto } from "./Foto"

interface IHDocente {
    nome: string
    formacao: string
    instituto: string
    foto: string
    contacto:string  | undefined
}

export function DocenteDetailHeader(docente: IHDocente) {

    return (
        <>
            <div>
                <div className="font-bold">
                    <Title title={docente.nome} />
                </div>
                <p>{docente.formacao} </p>
                <p>Pelo {docente.instituto}</p>
                <p>{docente.contacto}</p>
            </div>
            <Foto nome={docente.nome} foto={docente.nome} />
        </>
    )

}