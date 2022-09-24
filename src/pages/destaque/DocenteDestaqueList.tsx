import { Docente } from "../../data/types";
import { Title } from "../../components/Title";
import { ListDocente } from "../../components/docente/ListDocente";

interface IDocente {
    docentes: Docente[]
}


export function DestaqueListDocente({ docentes }: IDocente) {
    let i = 0;
    return (
        <div className="w-[60%] p-5 rounded-md block border border-zinc-600 bg-zinc-800">
            <Title title={`Docente destaque`} />
            <ListDocente docentes={docentes} destaque={true} />
            <div className="justify-end">
                <p className="font-semibold text-zinc-100 float-right p-2 underline">2/3/4/5 mais...</p>
            </div>
        </div>
    )
}