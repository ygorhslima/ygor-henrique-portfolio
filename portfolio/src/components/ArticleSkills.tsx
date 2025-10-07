import imgHtml from '../images/html5.svg';
import imgCss from '../images/css3.svg';
import imgJs from '../images/javascript.svg';
import imgNode from '../images/nodejs.svg';
import imgMysql from '../images/mysql.svg';
import imgReact from '../images/react.svg'
import imgGit from '../images/git.svg';
import imgGitHub from '../images/github.svg';
import imgPacoteOffice from '../images/office.svg';
import imgWindows from '../images/windows.svg';
import imgLinux from '../images/linux.svg';


export default function ArticleSkills(){
    const listaHardSkills = [
        {"img":imgHtml,"text":"HTML"},
        {"img":imgCss,"text":"CSS"},
        {"img":imgJs,"text":"JavaScript"},
        {"img":imgNode,"text":"Nodejs"},
        {"img":imgMysql,"text":"MySQL"},
        {"img":imgReact,"text":"React"},
        {"img":imgGit,"text":"Git"},
        {"img":imgGitHub,"text":"Github"},
        {"img":imgPacoteOffice,"text":"Pacote Office"},
        {"img":imgWindows,"text":"Windows"},
        {"img":imgLinux,"text":"Linux"}
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
                        listaHardSkills.map(({ img,text })=>{
                            return(
                                <div className='item'>
                                    <div className='img-hardskill'>
                                        <img src={img} alt={text} />
                                    </div>
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