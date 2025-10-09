import imgHtml from '../assets/html5.svg';
import imgCss from '../assets/css3.svg';
import imgJs from '../assets/javascript.svg';
import imgNode from '../assets/nodejs.svg';
import imgMysql from '../assets/mysql.svg';
import imgReact from '../assets/react.svg'
import imgGit from '../assets/git.svg';
import imgGitHub from '../assets/github.svg';
import imgPacoteOffice from '../assets/office.svg';
import imgWindows from '../assets/windows.svg';
import imgLinux from '../assets/linux.svg';


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