import { DocenteItem } from "../../pages/docente/Item"
import { Title } from "../Title"
import { Foto } from "./Foto"

interface IHDocente {
    nome: string
    formacao: string
    instituto: string
    foto: string
    contacto:string
}

export function DocenteDetailHeader(docente: IHDocente) {

    return (
        <div className="flex justify-between">
            <div>
                <div className="flex flex-grow font-bold">
                    <Title title={`${docente.nome}`} />
                </div>
                <DocenteItem item={docente.formacao} icon="graduation-cap" />
                <DocenteItem item={docente.instituto} icon="university" />
                <DocenteItem item={docente.contacto} icon="phone" />
            </div>
            <Foto nome={docente.nome} foto={docente.nome} />
        </div>
    )

}