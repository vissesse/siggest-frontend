type BoxProps = {
    icon: string,
    title: string,
    quant: number,
    color:string

}

export function Box(item: BoxProps) {

    return (
        <div className={`flex p-5  rounded gap-20 border border-zinc-100 bg-${item.color} text-white`} >
            <div className="block">
                <header className="block text-2xl font-medium">
                    {item.quant}
                </header>
                <strong className="block">
                    {item.title}
                </strong>
            </div>
            <span className="block text-5xl font-bold">
                <i className={`fa fa-${item.icon}`}></i>
            </span>
        </div>
    )
}