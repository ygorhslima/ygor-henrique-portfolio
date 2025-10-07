import imgHtml from '../../public/html5.svg';
import imgCss from '../../public/css3.svg';
import imgJs from '../../public/javascript.svg';
import imgNode from '../../public/nodejs.svg';
import imgMysql from '../../public/mysql.svg';
import imgReact from '../../public/react.svg'
import imgGit from '../../public/git.svg';
import imgGitHub from '../../public/github.svg';
import imgPacoteOffice from '../../public/office.svg';
import imgWindows from '../../public/windows.svg';
import imgLinux from '../../public/linux.svg';


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