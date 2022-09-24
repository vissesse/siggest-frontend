
interface IinPut {
    type?: string
    placeHolder?: string
    name: string
    id?: string
    w?: string
}


export function InPut({ type, placeHolder, name, id, w }: IinPut) {

    return (
        <input
            type={type ? `${type}` : `text`}
            placeholder={placeHolder}
            name={name}
            id={id}
            className={`text-center bg-zinc-600 text-zinc-100 border rounded-md border-zinc-200 p-1 w-${w ? w : '20'}`}
        />
    )

}