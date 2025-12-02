import imgHtml from '../../assets/html5.svg';
import imgCss from '../../assets/css3.svg';
import imgJs from '../../assets/javascript.svg';
import imgNode from '../../assets/nodejs.svg';
import imgMysql from '../../assets/mysql.svg';
import imgReact from '../../assets/react.svg'
import imgGit from '../../assets/git.svg';
import imgGitHub from '../../assets/github.svg';
import imgPacoteOffice from '../../assets/office.svg';
import imgWindows from '../../assets/windows.svg';
import imgLinux from '../../assets/linux.svg';
import './style.css'

export default function ArticleSkills(){
    const listaHardSkills = [
        {
            "img":imgHtml,
            "text":"HTML",
            "link":"https://developer.mozilla.org/pt-BR/docs/Web/HTML"
        },
        {
            "img":imgCss,
            "text":"CSS",
            "link":"https://developer.mozilla.org/pt-BR/docs/Web/CSS"
        },
        {
            "img":imgJs,
            "text":"JavaScript",
            "link":"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
        },
        {
            "img":imgNode,
            "text":"Nodejs",
            "link":"https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction"
        },
        {
            "img":imgMysql,
            "text":"MySQL",
            "link":"https://dev.mysql.com/doc/"
        },
        {
            "img":imgReact,
            "text":"React",
            "link":"https://pt-br.react.dev/"
        },
        {
            "img":imgGit,
            "text":"Git",
            "link":"https://git-scm.com/docs/git/pt_BR"
        },
        {
            "img":imgGitHub,
            "text":"Github",
            "link":"https://github.com/"
        },
        {
            "img":imgPacoteOffice,
            "text":"Pacote Office",
            "link":"https://www.microsoft.com/pt-br/microsoft-365"
        },
        {
            "img":imgWindows,
            "text":"Windows",
            "link":"https://www.microsoft.com/pt-br/windows/?r=1"
        },
        {
            "img":imgLinux,
            "text":"Linux",
            "link":"https://www.linux.org/"
        }
    ]

    const listaSoftSkills = [
        {"text":"Inglês"},
        {"text":"Cooperação"},
        {"text":"Aprendizado Contínuo"},
        {"text":"Curiosidade"},
        {"text":"Resiliência"},
        {"text":"Responsabilidade"},
    ]

    return (
        <article id="skills">
            <h2><i className="fa-solid fa-brain"></i> Minhas skills</h2>
            <div id="skill-container">
                <h2>Hardskills</h2>

                <div className="container-hardskills">
                    {
                        listaHardSkills.map(({ img,text, link })=>{
                            return(
                                <div className='item'>
                                    <a className='img-hardskill' href={link} target='_blank'>
                                        <img src={img} alt={text} />
                                    </a>
                                    <div className='skill'>{text}</div>
                                </div>
                            )
                        })
                    }
                </div>

                <h2>Softskills</h2>
                <div className="container-softskills">
                    {
                        listaSoftSkills.map(({ text })=>{
                            return(
                                <div className="item">
                                    <div className="skill">{text}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>     
        </article>
    )
}