import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";

export default function ToDo() {
    alStorage = localStorage.getItem("lista");
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);

    useEffect(() => { localStorage.setItem("lista",  json.stringify(lista))}, [lista]);

    const salvar = (e) =>{
       e.preventDefault();
       setLista([...lista,{
        atividade: atividade
       }])
    };
    
    return(
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Atividades</h1>

            <form onSubmit={salvar}>
                <input value={atividade} onChange={(e) => setAtividade(e.target.value)} type="text"></input>
                <button type="submit">ADD</button>

            </form>

            {lista.map((ativ) => 
             <div>
            <p>{ativ.atividade}</p>
            </div>
            )}
        </div>
    );
}