import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    
    const apagarC = (index) =>{
        const novalista = [...lista];
        novalista.splice(index,1);
        setLista(novalista);
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
            <button onClick={(e) => apagarC(index)}>apagar</button>
            </div>
            )}
        </div>
    );
}