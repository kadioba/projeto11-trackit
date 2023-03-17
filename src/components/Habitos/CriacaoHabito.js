import styled from "styled-components";
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from "react";
import { UserDataContext } from "../../Contex/UserDataContext";


export default function CriacaoHabito(props) {

    const { dadosUsuario, setDadosUsuario } = useContext(UserDataContext)

    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUsuario.token}`
        }
    }

    const [nomeHabito, setNomeHabito] = React.useState("");
    const [dias, setDias] = React.useState([]);
    console.log(dias, nomeHabito)

    function acionarDia(dia) {
        if (dias.includes(dia)) {
            const novoArray = dias.filter((d) => d !== dia)
            setDias(novoArray)
        }
        else {
            setDias([...dias, dia])
        }
    }

    function enviarHabito() {

        const objetoEnvio = { name: nomeHabito, days: dias }
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", objetoEnvio, config);

        requisicao.then((resposta) => {
            props.setHabitos([...props.habitos, resposta.data])

            console.log("Sucesso")

            console.log(resposta)
        })
    }

    return (
        <Card>
            <input type="text" placeholder="nome do hábito" onChange={event => setNomeHabito(event.target.value)} />
            <DiasSemana>
                <button onClick={() => acionarDia(7)}>D</button>
                <button onClick={() => acionarDia(1)}>S</button>
                <button onClick={() => acionarDia(2)}>T</button>
                <button onClick={() => acionarDia(3)}>Q</button>
                <button onClick={() => acionarDia(4)}>Q</button>
                <button onClick={() => acionarDia(5)}>S</button>
                <button onClick={() => acionarDia(6)}>S</button>
            </DiasSemana>
            <div>
                <button>Cancelar</button>
                <button onClick={() => enviarHabito()}>Salvar</button>
            </div>

        </Card>
    )
}

const Card = styled.div`
height: 180px;
width: 90vw;
display: inline;
background-color: #FFFFFF;
padding: 18px;
box-sizing: border-box;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: flex-start;

input{
    width: 80vw;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
}
div{
    margin-top: 10px;
    display: flex;
}
`

const DiasSemana = styled.div`
height: 30px;
width: 60vw;
background-color: red;
`