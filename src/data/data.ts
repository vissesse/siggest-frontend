import { ActividadesProfissionais, Artigos, Autor, DisciplinaMinistrada, Docente, FormacaoAcademica, FormacaoProfissional, JuriTCC, Lesson, Livros, OrientacaoTCC, Projecto, ProjectoParticipado, STATUS } from './types'

export const data: Lesson[] = [
    new Lesson('aula 01', new Date(2022, 5, 26, 17, 40), 'live'),
    new Lesson('aula 02', new Date(2022, 5, 27, 17, 40), 'live'),
    new Lesson('aula 03', new Date(2022, 5, 28, 19, 40), 'class'),
    new Lesson('aula 04', new Date(2022, 5, 29, 19, 40), 'live')

]

export const EmpDocente = {

    id: null,
    nome: "",
    formacao: "",
    especialidade: "",
    instituto: "",
    projectos: "",
    livros: "",
    idioma: "",
    artigos: "",
    disciplinas: ""

}

export const Docentes: Docente[] = [
    {
        id: "1",

        contacto: "945083118",
        nome: "Angolalast Joao name",
        genero: "Masculino",
        nacionalidade: "Angolana",
        estadoCivil: "Casado",
        nIdentificacao: "0043382HO043",

        formacao: "Engenharia de Informatica",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "439",
        livros: "JLd Engenharia de softwere",
        idioma: "Ingles",
        artigos: "324",
        disciplinas: "342"
    },
    {

        id: "2",
        genero: "Masculino",
        nome: "JNonsd Carlos Vissesse last Joao name",
        nacionalidade: "Angolana",
        estadoCivil: "Casado",
        nIdentificacao: "0043382HO043",
        formacao: "Engenharia de Informatica",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "43",
        livros: "Engenharia de softwere",

        idioma: "Ingles",
        artigos: "324",
        disciplinas: "342"
    },
    {

        id: "112",
        genero: "Masculino",
        nome: "Carlos Vissesse last Joao name",
        nacionalidade: "Angolana",
        estadoCivil: "Casado",
        nIdentificacao: "0043382HO043",
        formacao: "Engenharia de Informatica",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "43",
        livros: "Engenharia de softwere",
        idioma: "Ingles",
        artigos: "324",
        disciplinas: "342"
    },
    {

        id: "3",
        genero: "Masculino",
        nome: "Carlos Vissesse last Joao name",
        nacionalidade: "Angolana",
        estadoCivil: "Casado",
        nIdentificacao: "0043382HO043",
        formacao: "Engenharia de Informatica",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "43",
        livros: "Engenharia de softwere",
        idioma: "Ingles",
        artigos: "324",
        disciplinas: "342"
    },
    {

        id: "4",
        genero: "Masculino",
        nome: "Carlos Vissesse last Joao name",
        nacionalidade: "Angolana",
        estadoCivil: "Casado",
        nIdentificacao: "0043382HO043",
        formacao: "Engenharia de Informatica",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "43",
        livros: "Engenharia de softwere",
        idioma: "Ingles",
        artigos: "324",
        disciplinas: "342"
    },
    {

        id: "5",
        genero: "Masculino",
        nome: "Carlos Vissesse last Joao name",
        nacionalidade: "Angolana",
        estadoCivil: "Casado",
        nIdentificacao: "0043382HO043",
        formacao: "Engenharia de Informatica",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "43",
        livros: "Engenharia de softwere",
        idioma: "Ingles",
        artigos: "324",
        disciplinas: "342"
    },
    {

        id: "63",
        genero: "Masculino",
        nome: "Carlos Vissesse last Joao name",
        nacionalidade: "Angolana",
        estadoCivil: "Casado",
        nIdentificacao: "0043382HO043",
        formacao: "Engenharia de Informatica",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "43",
        livros: "Engenharia de softwere",
        idioma: "Ingles",
        artigos: "324",
        disciplinas: "342"
    },
    {

        id: "36",
        genero: "Masculino",
        nome: "Carlos Vissesse last Joao name",
        nacionalidade: "Angolana",
        estadoCivil: "Casado",
        nIdentificacao: "0043382HO043",
        formacao: "Engenharia de Informatica",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "43",
        livros: "Engenharia de softwere",
        idioma: "Ingles",
        artigos: "324",
        disciplinas: "342"
    },
    {

        id: "6",
        genero: "Masculino",
        nome: "Simão Carlos Vi last Joao namessesse",
        nacionalidade: "Angolana",
        estadoCivil: "Casado",
        nIdentificacao: "0043382HO043",
        formacao: "Engenharia de Telecomunicaces",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "43",
        livros: "Engenharia de softwere",
        idioma: "Ingles",
        artigos: "324",
        disciplinas: "342"
    },
    {

        id: "16",
        genero: "Masculino",
        nome: "Leonardo Carlos Vissesse",
        nacionalidade: "Angolana",
        estadoCivil: "Casado",
        nIdentificacao: "0043382HO043",
        formacao: "Engenharia Mecanica",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "43",
        livros: "Engenharia de softwere",
        idioma: "Ingles",
        artigos: "324",
        disciplinas: "342"
    },
    {

        id: "7",
        genero: "Masculino",
        nome: "Mauro Carlos Vissesse",
        nacionalidade: "Angolana",
        estadoCivil: "Casado",
        nIdentificacao: "0043382HO043",
        formacao: "Engenharia de Softwere",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "43",
        livros: "Engenharia de softwere",
        idioma: "Ingles",
        artigos: "324",
        disciplinas: "342"
    }

]
//
//titulo: string
//curso: string
//dataDefesa: Date
//autores: Autor[]
//tutor: string
//coTutor: string

export const NonePorject = {
    id: null, autores: [], coTutor: "", curso: "", dataDefesa: new Date(), titulo: "", tutor: ""
}

export const ProjectosData: Projecto[] = [
    {
        id: "1",
        titulo: "Sistema de informacao orientado a gestao",
        dataDefesa: new Date(),
        curso: "Engenharia Informatica",
        tutor: "Carlos Vissesse",
        coTutor: "Ana Paula Aguiar",
        autores: [{
            sobrenome: "Ana Paula Pedro",
            nome: "Autor  Aguiar",
            email: "Autpr@gmail.com",
            telefone: "945083118"
        },
        {
            sobrenome: "Catulumba vissesse",
            nome: "Carlos Abilio",
            email: "Autpr@gmail.com",
            telefone: "945083118"
        }],
        status: 1,


    },
    {
        id: "2",
        titulo: "SISTEMA DE GESTAO DE PAUTAS",
        dataDefesa: new Date(),
        curso: "Engenharia Informatica",
        tutor: "Andre figuereido",
        coTutor: "Manuel Hebo",
        autores: [{
            sobrenome: "Avelino",
            nome: "Trindade",
            email: "Atr@gmail.com",
            telefone: "945083118"
        },
        {
            sobrenome: "Barnabe",
            nome: "Guiquila",
            email: "Autpr@gmail.com",
            telefone: "945083118"
        }],
        status: 2

    },
    {
        id: "3",
        titulo: "SISTEMA DE ELABORACAO DE HORARIO",
        dataDefesa: new Date(),
        curso: "Engenharia Informatica",
        tutor: "Yanels Erick",
        coTutor: "Bartade django",
        autores: [{
            sobrenome: "Joaqui",
            nome: "Pericles",
            email: "Autpr@gmail.com",
            telefone: "945083118"
        },
        {
            sobrenome: "Fragao",
            nome: "Helio",
            email: "Autpr@gmail.com",
            telefone: "945083118"
        }],
        status: 3

    }


]


export const FormacaoAcademicaData: FormacaoAcademica[] = [
    { id: "1", docente_id: "1", curso: "Engenharia Informatica", instituicao: "INSTIC", data: new Date(), grau: "Lincenciatura", pais: "Angola" },
    { id: "2", docente_id: "1", curso: "Engenharia Tecnologia", instituicao: "MTODISTA", data: new Date(), grau: "Pois graduacao", pais: "Cuba" },
    { id: "3", docente_id: "2", curso: "Engenharia de redes", instituicao: "ULA", data: new Date(), grau: "BACHAREL", pais: "Angola" },

]
export const FormacaoProfissionalData: FormacaoProfissional[] = [
    { id: "1", docente_id: "1", curso: "CCNA I", instituicao: "SISFOTEP", cargaHoraria: 43, data: new Date(2021, 4, 4) },
    { id: "1", docente_id: "1", curso: "CCNA II", instituicao: "SISFOTEP", cargaHoraria: 20, data: new Date(2020, 2, 4) },
    { id: "1", docente_id: "2", curso: "GPL", instituicao: "SISFOTEP", cargaHoraria: 30, data: new Date(2019, 1, 4) }
]

export const ActividadesProfissionaisData: ActividadesProfissionais[] = [
    { id: "1", docente_id: "1", actividade: "CNE", instituicao: "CNE", cargoExercido: "Delegado de lista", dataTermino: new Date, dataInicio: new Date },
    { id: "2", docente_id: "1", actividade: "CNE", instituicao: "CNE", cargoExercido: "Delegado de lista", dataTermino: new Date, dataInicio: new Date }

]

export const DisciplinaMinistradaData: DisciplinaMinistrada[] = [
    { id: "1", docente_id: "1", curso: "Engenharia informatica", instituicao: "UMA", disciplina: "LP", experiencia: 34, status: "LECIONA" },
    { id: "2", docente_id: "1", curso: "Engenharia informatica", instituicao: "UMA", disciplina: "LP", experiencia: 34, status: "LECIONA" }
]

export const ProjectoParticipadoData: ProjectoParticipado[] = [
    { id: "1", docente_id: "1", instituicao: "ISUTIC", integrantes: ["carlos", "Manue"], dataInicio: new Date(), dataTermino: new Date(), titulo: "Sistema de informacao" }
]

export const OrientacaoTrabalhoAcademicoData: OrientacaoTCC[] = [
    {
        id: "1", docente_id: "1", instituicao: "ISUTIC",
        projecto: {
            id: "1",
            status: STATUS.DEFENDIDO, titulo: "Sistema de retorna de baloes",
            autores: [{ nome: "carlos", email: "carlos@gmail.com", sobrenome: "Vissesse", telefone: "945083118" }],
            coTutor: "Gilberto", tutor: "Manuel", curso: "Engenharia Informatica", dataDefesa: new Date(1999, 2, 2)
        }
    }, {
        id: "2", docente_id: "2", instituicao: "ULA", projecto: {
            id: "2",
            status: STATUS.DEFENDIDO, titulo: "Sistema de retorna de baloes",
            autores: [{ nome: "carlos", email: "carlos@gmail.com", sobrenome: "Vissesse", telefone: "945083118" }],
            coTutor: "Gilberto", tutor: "Manuel", curso: "Engenharia Informatica", dataDefesa: new Date(1999, 2, 2)
        }
    }
]

export const JurizTCCData: JuriTCC[] = [
    {
        id: "1", docente_id: "1", funcao: "Arguente", instituicao: "INSTIC", tutor: "Professor Hebo",
        projecto: {
            id: "3",
            autores: [{ nome: "Carlos", sobrenome: "Vissesse", email: "Carlo@gmail.com", telefone: "+244 923 093 119" }],
            curso: "Engenharia de informatica", dataDefesa: new Date(), status: STATUS.DEFENDIDO, titulo: "Sistema de sondange,"
        }
    }
]

export const LivrosData :Livros [] = [
    { id: "1",docente_id:"1", titulo: "Livro entitulado", data: new Date(), editora: "Nome da editora", ISBN: "424-424-h24", paginas: "230" },
    { id: "2",docente_id:"2", titulo: "Livro entitulado", data: new Date(), editora: "Nome da editora", ISBN: "424-424-h24", paginas: "230" },
    { id: "3",docente_id:"3", titulo: "Livro entitulado", data: new Date(), editora: "Nome da editora", ISBN: "424-424-h24", paginas: "230" }

]

export const ArtigosData :Artigos[]  = [
  {id:"1", docente_id:"1",data: new Date(), paginas:"123",revista:"Revista lacu",titulo:"Meu primeiro artigo"},
  {id:"2", docente_id:"2",data: new Date(), paginas:"123",revista:"Revista lacu",titulo:"Meu primeiro artigo"},
  {id:"3", docente_id:"1",data: new Date(), paginas:"123",revista:"Revista lacu",titulo:"Meu primeiro artigo"}
]