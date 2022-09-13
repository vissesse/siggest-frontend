import { Autor, Lesson, Projecto } from './types'

export const data: Lesson[] = [
    new Lesson('aula 01', new Date(2022, 5, 26, 17, 40), 'live'),
    new Lesson('aula 02', new Date(2022, 5, 27, 17, 40), 'live'),
    new Lesson('aula 03', new Date(2022, 5, 28, 19, 40), 'class'),
    new Lesson('aula 04', new Date(2022, 5, 29, 19, 40), 'live')

]

export const Docentes = [
    {
        nome: "Carlos Vissesse",
        formacao: "Engenharia de Informatica",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "Engenharia de informatic",
        livros: "Engenharia de softwere",
        idioma: "Ingles"
    },
    {
        nome: "Simão Carlos Vissesse",
        formacao: "Engenharia de Telecomunicaces",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "Engenharia de informatic",
        livros: "Engenharia de softwere",
        idioma: "Ingles"
    },
    {
        nome: "Leonardo Carlos Vissesse",
        formacao: "Engenharia Mecanica",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "Engenharia de informatic",
        livros: "Engenharia de softwere",
        idioma: "Ingles"
    },
    {
        nome: "Mauro Carlos Vissesse",
        formacao: "Engenharia de Softwere",
        especialidade: "carlos Vissesse",
        instituto: "INSTIC",
        projectos: "Engenharia de informatic",
        livros: "Engenharia de softwere",
        idioma: "Ingles"
    }

]
const autores: Autor[] = [

]
//
//titulo: string
//curso: string
//dataDefesa: Date
//autores: Autor[]
//tutor: string
//coTutor: string



export const ProjectosData: Projecto[] = [
    {
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
        }]

    },
    {
        titulo: "Sistema de informacao orientado a gestao",
        dataDefesa: new Date(),
        curso: "Engenharia Informatica",
        tutor: "Carlos Vissesse",
        coTutor: "Ana Paula Aguiar",
        autores: [{
            sobrenome: "Sobrenome 1",
            nome: "Autor 1",
            email: "Autpr@gmail.com",
            telefone: "945083118"
        },
        {
            sobrenome: "Sobrenome 1",
            nome: "Autor 1",
            email: "Autpr@gmail.com",
            telefone: "945083118"
        }]

    }


]