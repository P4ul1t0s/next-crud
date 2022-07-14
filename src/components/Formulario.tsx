import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente: Cliente
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id} className="mb-5"/>
            ) : (
                false
            )}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-5"/>
            <Entrada texto="Idade" valor={idade} tipo={"number"} valorMudou={setIdade}/>
            <div className="flex justify-end mt-7">
                <Botao cor="blue" classname="mr-4">{id ? 'Alterar' : 'Salvar'}</Botao>
                <Botao cor="red">Cancelar</Botao>
            </div>
        </div>
    )
}