interface IFoto {
    nome: string
    foto: string
}

export function Foto({ nome, foto }: IFoto) {
    return (
        <div className="rounded-md border border-red-400 m-6 ">
            <div className="w-40 h-40 ">
                <img src="http://localhost:3000/img/carl.png" alt={nome}  srcSet={nome} />
            </div>
        </div>
    )
}