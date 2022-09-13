interface IFoto {
    nome: string
    foto: string
}

export function Foto({ nome, foto }: IFoto) {
    return (
        <div className="w-40 h-40 rounded-md border border-red-400 m-6 ">
            <div className="picture">
                <img src="../../vendor/img/foto.png" alt={nome} sizes={`"24x24"`} srcSet={nome} />
            </div>
            <div className="legend">
                <p className="text-sm"> {foto}</p>
            </div>
        </div>
    )
}