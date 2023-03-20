import styled from "styled-components";
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from "react";
import { UserDataContext } from "../../Contex/UserDataContext";


export default function CriacaoHabito(props) {

    const { dadosUsuario, setDadosUsuario, habitosCompletos, setHabitosCompletos } = useContext(UserDataContext)

    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUsuario.token}`
        }
    }

    const [nomeHabito, setNomeHabito] = React.useState("");
    const [dias, setDias] = React.useState([]);
    const [desabilitado, setDesabilitado] = React.useState(false)

    useEffect(() => {
        if (props.nomeHabitoEmCriacao != null) {
            setNomeHabito(props.nomeHabitoEmCriacao)
            setDias(props.diasHabitoEmCriacao)
        };
    }, []);


    function acionarDia(dia) {
        if (dias.includes(dia)) {
            const novoArray = dias.filter((d) => d !== dia)
            setDias(novoArray)
        }
        else {
            setDias([...dias, dia])
        }
    }

    function corBotao(dia) {
        if (dias.includes(dia)) {
            return true
        }

    }

    function enviarHabito() {

        const objetoEnvio = { name: nomeHabito, days: dias }
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", objetoEnvio, config);
        setDesabilitado(true)

        requisicao.then((resposta) => {
            props.setHabitos([...props.habitos, resposta.data])
            setDesabilitado(false)
            setNomeHabito("")
            props.setCriarHabito(false)
            props.setNomeHabitoEmCriacao(null)
            props.setDiasHabitoEmCriacao(null)
        })

        requisicao.catch((resposta) => {
            alert("Ocorreu um erro, tente novamente")
            setDesabilitado(false)
        })
    }

    function cancelarEnvio() {
        props.setNomeHabitoEmCriacao(nomeHabito)
        props.setDiasHabitoEmCriacao(dias)
        props.setCriarHabito(false)
    }

    return (
        <Card data-test="habit-create-container">
            <input data-test="habit-name-input" disabled={desabilitado} type="text" placeholder="nome do hábito" value={nomeHabito} onChange={event => setNomeHabito(event.target.value)} />
            <DiasSemana>
                <BotaoDias data-test="habit-day" disabled={desabilitado} onClick={() => acionarDia(0)} dia={0} dias={dias} >D</BotaoDias>
                <BotaoDias data-test="habit-day" disabled={desabilitado} onClick={() => acionarDia(1)} dia={1} dias={dias} >S</BotaoDias>
                <BotaoDias data-test="habit-day" disabled={desabilitado} onClick={() => acionarDia(2)} dia={2} dias={dias} >T</BotaoDias>
                <BotaoDias data-test="habit-day" disabled={desabilitado} onClick={() => acionarDia(3)} dia={3} dias={dias} >Q</BotaoDias>
                <BotaoDias data-test="habit-day" disabled={desabilitado} onClick={() => acionarDia(4)} dia={4} dias={dias} >Q</BotaoDias>
                <BotaoDias data-test="habit-day" disabled={desabilitado} onClick={() => acionarDia(5)} dia={5} dias={dias} >S</BotaoDias>
                <BotaoDias data-test="habit-day" disabled={desabilitado} onClick={() => acionarDia(6)} dia={6} dias={dias} >S</BotaoDias>
            </DiasSemana>
            <BotoesLadoLado>
                <BotaoCancelar data-test="habit-create-cancel-btn" disabled={desabilitado} onClick={() => cancelarEnvio()}>Cancelar</BotaoCancelar>
                <BotaoSalvar data-test="habit-create-save-btn" disabled={desabilitado} onClick={() => enviarHabito()}>Salvar</BotaoSalvar>
            </BotoesLadoLado>

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
    width: 100%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}

`

const DiasSemana = styled.div`
width: 234px;
align-self: flex-start;
`

const BotaoDias = styled.button`
box-sizing: border-box;
width: 30px;
height: 30px;
background: ${props => props.dias.includes(props.dia) ? "#DBDBDB" : "#FFFFFF"};
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: ${props => props.dias.includes(props.dia) ? "#FFFFFF" : "#DBDBDB"};
margin-right: 4px;
`

const BotoesLadoLado = styled.div`
margin-top: 10px;
display: flex;
align-self: flex-end;
`

const BotaoSalvar = styled.button`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
border: none;
`

const BotaoCancelar = styled.button`
width: 84px;
height: 35px;
background: #FFFFFF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #52B6FF;
border: none;
`
