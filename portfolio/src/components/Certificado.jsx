import { use, useState } from "react"
import './certificado.css'


export default function Certificado({link, curso}){
    const [mostrarPDF, setMostrarPDF] = useState(false);

    return(
        <div>
            <button onClick={()=>setMostrarPDF(true)}>Ver certificado</button>
            {mostrarPDF && (
                <div className="modal">
                    <div className="overlay" onClick={()=>setMostrarPDF(false)}></div>
                    <div className="conteudo">
                        <h3>{curso}</h3>
                        <embed src={link} width="100%" height="600px" type="application/pdf" />
                    </div>
                    <button onClick={()=>setMostrarPDF(false)}>Fechar</button>
                </div>
            )}
        </div>
    )
}
