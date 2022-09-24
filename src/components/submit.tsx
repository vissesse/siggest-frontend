interface ISubmit {
    name: string
    w: string
    icon?: string
    id?: string
}



export function BtnSubmit({ name, w, id, icon }: ISubmit) {
    return (
        <button
            type="submit"
            name={name}
            id={id}
            className={`hover:bg-zinc-500 hover:font-bold text-center bg-zinc-600 text-zinc-100 border rounded-md border-zinc-200 p-1 w-${w ? w : '20'}`}
        >   <span className="mx-2">{name}</span>
            <span className={`fa fa-${icon}`}></span>
        </button>
    )
}