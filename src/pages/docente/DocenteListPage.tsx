import { ListDocente } from "../../components/docente/ListDocente";
import { Title } from "../../components/Title";
import { Docentes } from "../../data/data";
import { DocenteFiltro } from "./DocenteFiiltro";

export function DocenteListPage() {
    let docentes = []
    for (let i = 0; i < 8; i++) {
        docentes.push(Docentes[i]);
    }
    return (
        <>
            <div className="w-[70%] py-1 px-5 rounded-md block border border-zinc-600 bg-zinc-800">
                <Title title={`Docentes`} />
                <ListDocente docentes={docentes} />
                <div className="justify-end">
                    <p className="font-semibold text-zinc-100 float-right p-2 underline">2/3/4/5 mais...</p>
                </div>
            </div>
            <DocenteFiltro />
        </>
    )

}