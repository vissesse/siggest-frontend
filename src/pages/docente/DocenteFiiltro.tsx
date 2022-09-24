import { InPut } from "../../components/Input";
import { BtnSubmit } from "../../components/submit";
import { Title } from "../../components/Title";

export function DocenteFiltro() {
    return (
        <div className="w-[30%] p-5 rounded-md border border-zinc-600 bg-zinc-800 ">
            <Title icon="search" title={`Filtro`} />
            <div className="space-y-2">
                <div className="w-full flex">
                    <InPut name="name" w="full" placeHolder="Filter by: Name, Formacao or projects..." />
                </div>
                <hr />

                <a href="" className="">Todos</a>
                <hr />
                <div className="flex justify-between">
                    Artigos publicado
                    <InPut name="artigos_Publicado" />
                </div>
                <hr />
                <div className="flex justify-between">
                    Livros publicado
                    <InPut name="livros_Publicado" />
                </div>
                <hr />
                <div className="flex justify-between">
                    Projectos mentorado
                    <InPut name="projecto_mentorado" />
                </div>
                <hr />
                <div className="flex justify-between">
                    Projectos Julgado
                    <InPut name="projectos_julgado" />
                </div>
                <hr />
                <div className="flex justify-between">
                    Cadeiras ministrada
                    <InPut name="cadeiras" />
                </div>
                <div className="pt-8">
                    <BtnSubmit id="send" icon="search" name="procurar" w="full" />
                </div>
            </div>
        </div>
    )
}