import imgPerfil from '../../public/img-perfil.jpg'
import curriculo from '../curriculo.pdf';

export default function SectionFicha(){
    return(
         <section id="ficha">
            <img src={imgPerfil} alt="" className="foto"/>
            <h1>Ygor Henrique</h1>
            <p>Atualmente curso <strong>Análise e desenvolvimento de sistemas</strong>, meu foco de estudo atualmente está no desenvolvimento web, na parte de <strong>criação, otimização e manutenção de sites</strong>, valorizando <strong>interfaces funcionais</strong> e uma <strong>experiência do usuário</strong> de qualidade.</p>
            <p>pessoalmente, gosto de passar tempo com a família, Tenho hobbies como jogar xadrez, ler livros, jogar videogame e fazer desenhos, que me ajudam a ter mais criatividade e raciocício lógico, e desenvolver sites, hobby este que se tornou algo que quero me profissionalizar.
            </p>
            <br/>
            <div id="social">
                <a href="https://www.linkedin.com/in/ygor-henrique-888543300" target="_blank" rel="nofollow">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                
                <a href="https://github.com/ygorhslima" target="_blank" rel="nofollow">
                    <i className="fa-brands fa-github"></i>
                </a>
                
                <a href={curriculo} target="_blank" rel="external" type="application/pdf">
                    <i className="fa-solid fa-file"></i>
                </a>
                <br />
            </div>
        </section>
    )
}
