
export function formatDate(date: Date): string {
    let day_wi = date.getDay()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    return `${dayOfWick(day_wi)}, ${formatCurrentMonth(`${day}-${month}`)} * ${hours}h${minutes}`
}

export function conteudoLiberado(data: Date) {
    // aula liberada quando a diferemça é positiva
    let data_passed = new Date() - data

    return data_passed > 0

}
export function getData(data: Date) {
    let months = [
        'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio',
        'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
        'Novembro', 'Dexembro'
    ]
    return `${data.getDate()}, ${months[data.getMonth()]} de ${data.getFullYear()}`
}


function dayOfWick(n: number) {
    // retorno dia da semana
    let days = [
        'Domingo', 'Segunda', 'Terça', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'
    ]

    return days[n]
}

function formatCurrentMonth(CurrentMonth: string) {
    // retorno dia do mes junto do mes
    let [day, month] = CurrentMonth.split('-')
    let months = [
        'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio',
        'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
        'Novembro', 'Dexembro'
    ]

    return `${day} de ${months[parseInt(month) - 1]}`

}

