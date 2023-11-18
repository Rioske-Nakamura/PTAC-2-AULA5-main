import { object } from "prop-types";
import { useParams } from "react-router-dom";
import Card from "../componente/card";

export default function Detalhe() {
    const{id} = useParams();
    const lista= JSON.parse(localStorage.getItem("lista"))

    const atividade = lista.filter((objeto) => {
        if(objeto.id === parseInt(id, 10)){
            return objeto
        }
        return null
    })
 console.log(atividade[0])
    return(
        <Card atividade={atividade[0]}/>
    );
}