import imgBookmark from '../assets/img-bookmark-landing-page.png'
import imgSpace from '../assets/img-Space-tourism-website.png'
import imgSection from '../assets/img-SectionDropdownNavigation.png'
import imgSunnySide from '../assets/img-Sunnyside-agency.png'

export default function ArticleProjetos(){
    const listaProjetos = [
        {
            "imagemProjeto":`${imgBookmark}`,
            "periodo":"2025",
            "titulo":"bookmark landing page",
            "descricao":"site fictício de uma loja de gerenciador de extensões de navegador",
            "descricaoDetalhada":"é um projeto de gerenciador de extensões de navegador fictício, é um site responsívo, com Menu interativo para versão de celular, com animações suaves, interface separados em componentes e otimizado usando o framework React",
            "link":"https://ygorhslima.github.io/bookmark-landing-page/"
        },
        {
            "imagemProjeto":`${imgSpace}`,
            "periodo":"2025",
            "titulo":"Space Tourism Website",
            "descricao":"é um site interativo de uma agência espacial",
            "descricaoDetalhada":"um site completo, interativo, imersivo e responsivo de um tour de uma agência espacial, utilizando técnicas de animações de elementos dentro do site e criação de sliders, os chamados carrossel",
            "link":"https://ygorhslima.github.io/frontend-mentor-exercises/space-tourism-website-figma/src/index.html"
        },
        {
            "imagemProjeto":`${imgSection}`,
            "periodo":"2025",
            "titulo":"Section With Dropdown Navigation",
            "descricao":"Um site responsivo utilizando bootstrap para criação de dropdowns no menu do site.",
            "descricaoDetalhada":"Um site responsivo utilizando bootstrap, ferramenta utilizada para criar estilos prontos e que funcionam em qualquer aparelho",
            "link":"https://ygorhslima.github.io/frontend-mentor-exercises/intro-section-with-dropdown-navigation-main/intro-section-with-dropdown-navigation-main/index.html"
        },
        {
            "imagemProjeto":`${imgSunnySide}`,
            "periodo":"2025",
            "titulo":"Sunnyside Agency Landing Page",
            "descricao":"Uma landing page para a agência Sunnyside, focada em layout responsivo com HTML e CSS.",
            "descricaoDetalhada":"Sunnyside é uma agência fictícia responsável ajudar marcas a crescerem rapidamente. Focado em design e em marketing",
            "link":"https://ygorhslima.github.io/frontend-mentor-exercises/sunnyside-agency-landing-page-main/"
        },
    ]
    
    return (
        <article id="projetos">
            <h2> <i className="fa-solid fa-trowel-bricks"></i> Projetos Criados</h2>

            <div id="projeto-container">
                {
                    listaProjetos.map(({imagemProjeto,periodo,titulo,descricao,descricaoDetalhada,link},index)=>{
                        return(
                            <div className="projeto" id={index}>
                                <a href={link} target='_blank' rel="external">
                                    <img src={imagemProjeto} alt={titulo} className="foto"/>
                                </a>
                                <div className="projeto-info">
                                    <p className="periodo">{periodo}</p>
                                    <h3 className="titulo">{titulo}</h3>
                                    <p>{descricao}</p>
                                    <details className="descricao">
                                        <summary>Saiba mais...</summary>
                                        <p>{descricaoDetalhada}</p>
                                    </details>
                                </div>
                            </div>
                        )
                    })
                }
            </div>          
        </article>
    )
}