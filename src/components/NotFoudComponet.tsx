import { Title } from "./Title";

interface Entity {
    param: string | undefined
    entity: any
}


export function NotFoundEntity({ param, entity }: Entity) {
    const id = param
    let smg = "Entidade nao Encontrado!.."
    if (id == null && entity.id == null) {
        smg = "Selecione uma entidade"
    } else if (!id && entity.id == null) {
        smg = "Entidade not found"
    }
    return (
        <div className="w-[38%] p-5 rounded-md border border-zinc-600 bg-zinc-800 ">
            <div className=" ml-[20%] flex gap-x-1 items-center">
                <Title title={smg} icon="cancel" />
            </div>
        </div>
    )
}