import { useState } from "react";
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

    const apagarC = (e) =>{
       novalista=[...lista]
       novalista.splice(index,1);
       setLista(novalista)
    };
    
    return(
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Atividades</h1>

            <form onSubmit={salvar}>
                <h2>Nome</h2>
                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text"></input>
                <h2>Imagem</h2>
                    <input value={imagem} onChange={(e) => setImagem(e.target.value)} type="text"></input>
                <h2>Conteudo</h2>
                <input value={conteudo} onChange={(e) => setConteudo(e.target.value)} type="text"></input>

                <button type="submit" >ADD</button>

            </form>

            {lista.map((ativ,index) => 
             <div key={index}>
                <div class="card" style="width: 18rem;">
            <img src={ativ.imagem} class="card-img-top" alt="..."></img>
            <div class="card-body">
             <h5 class="card-title">{ativ.nome}</h5>
             <p class="card-text">{ativ.conteudo}</p>
    <button onClick={(e) => apagarC(index)} class="btn btn-primary">apagar</button>
  </div>
</div>
            
            </div>
            )}
        </div>
    );
}