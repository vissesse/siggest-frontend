 
import { Title } from "../Title";
import { Foto } from "./Foto";

interface DocenteFullD {
    nome: string;
    sobrenome: string;
    local_nascimento: string,
    genero: string
    nacionalidade: string;
    estado_civil: string,
    n_identificacao: string,
    data_nascimento: Date,
    titulo_profissional?: string,
    telefone: string,
    email: string,
    foto: string,
}

export function DocenteDadosPessoais({ nome, sobrenome, local_nascimento, data_nascimento, email, estado_civil,
    foto, genero, n_identificacao, nacionalidade, telefone, titulo_profissional
}: DocenteFullD) {

    return (<div className="w-[38%] p-5 rounded-md border border-zinc-600 bg-zinc-800 ">
        <div className="flex gap-x-20">
            <div>
                <div className="font-bold">
                    <Title title={nome + '' + sobrenome} />
                </div>
                <p>{n_identificacao} </p>
                <p>{email}</p>
                <p></p>
            </div>
            <Foto nome={nome} foto={foto} />
        </div>
        <hr className="border-b border-red-400" />

    </div>

    )
}