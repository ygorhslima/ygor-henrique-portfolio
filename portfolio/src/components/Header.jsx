export default function Header(){
    return(
    <header>
        <nav id="menu">
            <ul>
                <li>
                    <a href="#">
                        <i className="fa-solid fa-house"></i>
                    </a>
                </li>

                <li>
                    <a href="#skills">
                        <i className="fa-solid fa-brain"></i>
                    </a>
                </li>

                <li>
                    <a href="#formacao">
                        <i className="fa-solid fa-graduation-cap"></i>
                    </a>
                </li>
                <li>
                    <a href="#projetos">
                        <i className="fa-solid fa-trowel-bricks"></i>
                    </a>
                </li>
                <li>
                    <a href="" id="botao-tema"></a>
                </li>
            </ul>
        </nav>
    </header>
    )
}