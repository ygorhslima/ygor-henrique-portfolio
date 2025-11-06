import algoritmo from '../assets/certificados/algoritmo.pdf'

import html1 from '../assets/certificados/html-css-modulo1.pdf'
import html2 from '../assets/certificados/html-css-modulo2.pdf'
import html3 from '../assets/certificados/html-css-modulo3.pdf'
import html4 from '../assets/certificados/html-css-modulo4.pdf'

import javascript from '../assets/certificados/javascript.pdf'
import mysql from '../assets/certificados/mysql.pdf'
import linux from '../assets/certificados/linux.pdf'
import seo from '../assets/certificados/seo.pdf'
import ingles1 from '../assets/certificados/ingles1.pdf'

import Certificado from './Certificado'

export default function ArticleFormacao(){

    const listaFormacao = [
        {
            "periodo":"2022 - 2024",
            "instituicao":"Escola Técnica Estadual Luiz Alves Lacerda",
            "titulacao":"Técnico em Desenvolvimento de sistemas"
        },
        {
            "periodo":"2025 - 2027",
            "instituicao":"Ensino Superior Faculdade Unicesumar EAD",
            "titulacao":"Tecnólogo em Análise e Desenvolvimento de Sistemas"
        }
    ]

    const listaCertificado=[
        {
            "curso":"Algoritmo [40 horas]",
            "instituicao":"Curso em vídeo",
            "data_emissao":"21 de junho de 2024",
            "link":`${algoritmo}`
        },
        {
            "curso":"MySQL [40 horas]",
            "instituicao":"Curso em vídeo",
            "data_emissao":"13 de julho de 2024",
            "link":`${mysql}`
        },
        {
            "curso":"HTML5 e CSS3: MÓDULO 1 DE 5 [40 horas]",
            "instituicao":"Curso em vídeo",
            "data_emissao":"7 de dezembro de 2024",
            "link":`${html1}`
        },
        {
            "curso":"HTML5 e CSS3: MÓDULO 2 DE 5 [40 horas]",
            "instituicao":"Curso em vídeo",
            "data_emissao":"11 de dezembro de 2024",
            "link":`${html2}`
        },
        {
            "curso":"HTML5 e CSS3: MÓDULO 3 DE 5 [40 horas]",
            "instituicao":"Curso em vídeo",
            "data_emissao":"14 de dezembro de 2024",
            "link":`${html3}`
        },
        {
            "curso":"HTML5 e CSS3: MÓDULO 4 DE 5 [40 horas]",
            "instituicao":"Curso em vídeo",
            "data_emissao":"17 de dezembro de 2024",
            "link":`${html4}`
        },
        {
            "curso":"JavaScript [40 horas]",
            "instituicao":"Curso em vídeo",
            "data_emissao":"22 de dezembro de 2024",
            "link":`${javascript}`
        },
        {
            "curso":"Linux [40 horas]",
            "instituicao":"Curso em vídeo",
            "data_emissao":"23 de Fevereiro de 2025",
            "link":`${linux}`
        },
        {
            "curso":"SEO Módulo 01 [40 horas]",
            "instituicao":"Curso em vídeo",
            "data_emissao":"19 de março de 2025",
            "link":`${seo}`
        },
        {
            "curso":"inglês Módulo 01: BEGINNERS [20 horas]",
            "instituicao":"Curso em vídeo",
            "data_emissao":"11 de Abril de 2025",
            "link":`${ingles1}`
        },
    ]


    return (
         <article id="formacao">
            <h2><i className="fa-solid fa-graduation-cap"></i> Minha Formação</h2>
            <div className="formacao-container">
                {
                    listaFormacao.map(({ periodo,instituicao,titulacao })=>{
                        return(
                            <div className="curso">
                                <div className="periodo">{periodo}</div>
                                <h3 className="instituicao">{instituicao}</h3>
                                <p className="titulacao">{titulacao}</p>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <h2><i className="fa-solid fa-graduation-cap"></i>Certificado</h2>
            <div className="formacao-container">
                {
                    listaCertificado.map(({ curso,instituicao,data_emissao,link },index)=>{
                        return(
                            <div className="curso" key={index}>
                                <div className="curso_nome">{curso}</div>
                                <h3 className="instituicao">{instituicao}</h3>
                                <p className="data_emissao">{data_emissao}</p>
                                <Certificado curso={curso} link={link}/>
                            </div>
                        )
                    })
                }
            </div>
        </article>
    )
}