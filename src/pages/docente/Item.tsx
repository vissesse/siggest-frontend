
interface ITem {
    item: string
    icon: string
}

export function DocenteItem({ item, icon }: ITem) {
    return (<p><span className={`fa fa-${icon}`}></span> {item}</p>)
}