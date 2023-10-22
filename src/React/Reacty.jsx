import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ReaCte() {
    const [conteudo, setConteudo] = useState("");
    const [imagem, setImagem] = useState("");
    const [nome, setNome] = useState("");
    const [lista, setLista] = useState([]);

    const salvar = (e) =>{
        e.preventDefault();
        setLista([...lista,{
            conteudo: conteudo,
            imagem: imagem,
            nome: nome
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
            <br></br>
            <Link to="/todo">atividade</Link>
            <h1>Lista de Atividades</h1>

            <form onSubmit={salvar}>
                <h2>Nome</h2>
                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text"></input>
                <h2>Imagem</h2>
                <input value={imagem} onChange={(e) => setImagem(e.target.value)} type="text"></input>
                <h2>Conteudo</h2>
                <input value={conteudo} onChange={(e) => setConteudo(e.target.value)} type="text"></input>

                <button type="submit">ADD</button>
            </form>

            <div className="container text-center">
                <div className="row">
                    {lista.map((ativ, index) => (
                        <div className="col" key={index}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={ativ.imagem} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{ativ.nome}</h5>
                                    <p className="card-text">{ativ.conteudo}</p>
                                    <button onClick={() => apagarC(index)} className="btn btn-primary">apagar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
