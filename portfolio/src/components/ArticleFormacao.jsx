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

    return (
         <article id="formacao">
            <h2><i className="fa-solid fa-graduation-cap"></i> Minha Formação</h2>
            <div id="formacao-container">
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
        </article>
    )
}