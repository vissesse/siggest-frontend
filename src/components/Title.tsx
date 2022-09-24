type title = {
    title: string,
    icon?: string
}

export function Title({ icon, title }: title) {
    return (
        <h6 className="flex justify-between text-2xl mt-5 mb-5">
            {title}
            <span className="w-5 mx-2 block"><i className={`fa fa-${icon}`}></i></span>
        </h6 >
    )
}