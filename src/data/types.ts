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

export interface FormacaoAcademica {
    docente_id?: string
    id: string
    curso: string
    instituicao: string
    pais: string
    data: Date
    grau: string
}

export interface FormacaoProfissional {
    id: string
    docente_id?: string
    curso: string
    instituicao: string
    data: Date
    cargaHoraria: number
}

export interface DisciplinaMinistrada {
    id: string
    docente_id?: string
    disciplina: string
    instituicao: string
    curso: string
    experiencia: number
    status: string

}

export interface ActividadesProfissionais {
    id: string
    docente_id?: string
    actividade: string
    instituicao: string
    cargoExercido: string
    dataInicio: Date
    dataTermino: Date
}

export interface ProjectoParticipado {
    id: string
    docente_id?: string
    titulo: string
    instituicao: string
    dataInicio: Date
    dataTermino: Date
    integrantes: string[]
}

export interface OrientacaoTCC {
    id: string
    docente_id?: string
    instituicao: string
    projecto: Projecto
}

export interface JuriTCC {
    id:string
    docente_id:string
    instituicao: string
    funcao: string
    projecto: Projecto 
    tutor:string
}
export interface Artigos {
    id:string
    docente_id:string
    titulo: string 
    revista: string
    data: Date
    paginas: string
}
export interface Livros {
    id:string
    docente_id:string
    titulo: string
    editora: string
    ISBN: string
    data: Date
    paginas: number
}
export interface Docente {
    id: string
    nome: string
    genero: string
    nIdentificacao: string
    nacionalidade: string
    estadoCivil: string
    formacao: string
    especialidade: string
    projectos: string
    livros: string
    idioma: string
    instituto: string
    contacto?: string
    artigos: string
    disciplinas: string

}

export enum STATUS {
    DEFENDIDO = 1,
    PORDEFENDER = 2,
    REPROVADO = 3
}
export interface Projecto {
    id: string
    titulo: string
    curso: string
    dataDefesa: Date
    autores: Autor[]
    tutor?: string
    coTutor?: string
    status: STATUS

}