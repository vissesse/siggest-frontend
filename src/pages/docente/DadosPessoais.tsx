import { Foto } from "../../components/docente/Foto";
import { DocenteItem } from "./Item";
import { Title } from "../../components/Title";
import { Docente } from "../../data/types";

interface Idocente {
    docente: Docente
}

export function DadosPessoais({ docente }: Idocente) {

    return (<>
        <div className="flex justify-between">
            <div>
                <div className="flex flex-grow font-bold">
                    <Title title={`${docente.nome}`} />
                </div>
                <DocenteItem item={docente.nacionalidade} icon="globe" />
                <DocenteItem item={docente.genero} icon="g" />
                <DocenteItem item={docente.nacionalidade} icon="globe" />
                <DocenteItem item={docente.estadoCivil} icon="heart" />
            </div>
            <Foto nome={docente.nome} foto={docente.nome} />
        </div>
        <hr className="border-b border-red-400" />
        <div className="pt-14 flex justify-between gap-y-2">
            <div className="item">
                <DocenteItem item="Local de nascimento" icon="globe-africa" />
                <DocenteItem item="Aniversário" icon="calendar" />
                <DocenteItem item="Endereço" icon="map-marker-alt" />
                <DocenteItem item="BI" icon="address-card" />
                <DocenteItem item="Idioma oficial" icon="a" />
                <DocenteItem item="email" icon="envelope" />
                <DocenteItem item="conctacto" icon="phone" />
            </div>
            <div className="text-end">
                <p>{`Luanda`}</p>
                <p>{`20-12-190`}</p>
                <p>{`Luanda, Luanda`}</p>
                <p>{docente.nIdentificacao}</p>
                <p>{`Português`}</p>
                <p>+244 945 083 118</p>
                <p>email@gmail.com</p>
            </div>
        </div>
    </>
    )

}