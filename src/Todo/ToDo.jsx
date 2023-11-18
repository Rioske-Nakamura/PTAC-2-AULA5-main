import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
    const alStorage = localStorage.getItem("lista");
    const [atividade, setAtividade] = useState("");
    const [id, setId] = useState(0);
    const [lista, setLista] = useState(alStorage ? JSON.parse(alStorage) : []);
    const [count, setCount] = useState(0)

    useEffect(() => {
        localStorage.setItem("lista", JSON.stringify(lista));
        document.title= `voce clicou  ${count} vezes`;
    }, [lista, count]);
    

  
    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id,
        }]);
        setAtividade(""); 
        setCount(count +1);
        setId(id+1)
    };

    const apagarC = (index) => {
        const novalista = [...lista];
        novalista.splice(index, 1);
        setLista(novalista);
    };

    return (
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Atividades</h1>

            <form onSubmit={salvar}>
                <input value={atividade} onChange={(e) => setAtividade(e.target.value)} type="text" />
                <button type="submit">ADD</button>
            </form>

            {lista.map((ativ, index) => (
                <div key={index}>
                    <p>{ativ.id}- {ativ.atividade}</p>
                    <button onClick={() => apagarC(index)}>apagar</button>
                </div>
            ))}
        </div>
    );
}
