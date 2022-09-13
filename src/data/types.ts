export class Lesson {
    private slug: string

    constructor(private title: string, private avaliable: Date, private type: 'live' | 'class') {
        this.slug = this.title.split(' ').join('-').toLowerCase()
    }


    public getSlug() {
        return this.slug

    }
    getTitle() {
        return this.title
    }

    getDate() {
        return this.avaliable
    }

    getType(): 'live' | 'class' {
        return this.type
    }

}
export interface Autor {
    nome: string
    sobrenome: string
    telefone: string
    email: string
}


export interface Docente {
    nome: string
    formacao: string
    especialidade: string
    projectos: string
    livros: string
    idioma: string
    instituto: string
}
export interface Projecto {
    titulo: string
    curso: string
    dataDefesa: Date
    autores: Autor[]
    tutor: string
    coTutor: string

}