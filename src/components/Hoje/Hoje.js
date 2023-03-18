import styled from "styled-components";
import axios from "axios";
import { UserDataContext } from "../../Contex/UserDataContext";
import { useContext } from "react";
import { useState, useEffect } from 'react';
import React from "react";

import Topo from "../Topo/Topo";
import Menu from "../Menu/Menu";
import CardaHabitoHoje from "./CardHabitoHoje";

export default function Hoje() {

    const { dadosUsuario, setDadosUsuario } = useContext(UserDataContext)
    const [habitosDia, setHabitosDia] = React.useState([])
    const [habitoAtualizado, setHabitoAtualizado] = React.useState([])

    console.log(habitosDia)

    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUsuario.token}`
        }
    }

    useEffect(() => {
        console.log(dadosUsuario.token)
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        requisicao.then(resposta => {
            setHabitosDia(resposta.data);
        });
    }, [habitoAtualizado]);

    return (
        <>
            <Topo />
            <TelaHoje>
                <TextoDia data-test="today">Segunda, 17/05</TextoDia>
                <HabitoNaoEncontrado data-test="today-counter">Nenhum hábito concluído ainda</HabitoNaoEncontrado>
                {habitosDia.map(habito => <CardaHabitoHoje
                    sequencia={habito.currentSequence}
                    sequenciaMax={habito.highestSequence}
                    id={habito.id}
                    feito={habito.done}
                    nome={habito.name}
                    setHabitoAtualizado={setHabitoAtualizado}
                    habitoAtualizado={habitoAtualizado}
                />)}
            </TelaHoje>
            <Menu />
        </>
    )
}

const TelaHoje = styled.div`
margin-top: 10vh;
margin-bottom: 10vh;
width: 100vw;
height: 80vh;
background-color: #F2F2F2;
padding: 0px 17px;
padding-top: 28px;
box-sizing: border-box;
`

const TextoDia = styled.h1`
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 22.976px;
color: #126BA5;
line-height: 29px;
`

const HabitoNaoEncontrado = styled.h2`
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 17.976px;
color: #BABABA;
line-height: 22px;
`