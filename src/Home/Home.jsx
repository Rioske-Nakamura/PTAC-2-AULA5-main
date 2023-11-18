import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   
    return (
        <div>
            <h1>Home</h1>
            <Link to="/todo">Sabado Letivo</Link>
            <br></br>
            <Link to="/Trabalho">Trabalho</Link>
            <br></br>
            
            <Link to="/detalhe:1">Atividade 2</Link>
        </div>

    );
}