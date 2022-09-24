import { Outlet } from "react-router-dom";
import { Item } from "../../components/sidebar/item";
import { Docentes } from "../../data/data";
import { DadosPessoais } from "./DadosPessoais";

export function DocenteFullDetail() {
    const docente = Docentes[0]
    return (
        <>
            { /*outroas informacoes*/}
            <div className="w-[60%] p-5 rounded-md block border border-zinc-600 bg-zinc-800">
                <div className="flex flex-auto">
                    <Item icon="graduation-cap" item_name="Formação" hrf="formacao/" />
                    <Item icon="briefcase" item_name="Actividades profissionais" hrf="actividades-profissionais/" />
                    <Item icon="vials" item_name="Actividades Cientificas" hrf="actividades-cientificas/" />
                    <Item icon="book" item_name="Publicaçoes" hrf="publicacoes/" />
                    <Item icon="plus" item_name="Outras" hrf="outros/" />
                </div>
                <hr className="mt-4 mb-6" />
                <Outlet />
            </div>
            {/**Informacoes pessoais */}
            <div className="w-[38%] p-5 rounded-md border border-zinc-600 bg-zinc-800 " >
                <DadosPessoais docente={docente} />
            </div>
        </>)



}