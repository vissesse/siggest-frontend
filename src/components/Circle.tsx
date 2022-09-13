type form = {
    item: string
    value: string
}

export function Circle({ item, value }: form) {
    return (
        <div className="w-40 h-40 p-4 rounded-full border border-red-400 text-center pt-14" id="projecto">
            {`${item}`} <br />
            {`${value}`}
        </div>)
}