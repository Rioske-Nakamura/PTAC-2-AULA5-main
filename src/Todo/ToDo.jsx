import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
    const alStorage = localStorage.getItem("lista");
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState(alStorage ? JSON.parse(alStorage) : []);
    const [count, setCount] = useState(0)

    useEffect(() => {
        localStorage.setItem("lista", JSON.stringify(lista));
    }, [lista]);

    useEffect(()=> document.title= "voce clicou  ${count} vezes")

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade
        }]);
        setAtividade(""); 
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
                    <p>{ativ.atividade}</p>
                    <button onClick={() => apagarC(index)}>apagar</button>
                </div>
            ))}
        </div>
    );
}
