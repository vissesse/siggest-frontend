type title = {
    title: string
}

export function Title({ title }: title) {
    return (
        <h6 className="text-2xl mt-5 mb-5">{title}</h6>
    )
}