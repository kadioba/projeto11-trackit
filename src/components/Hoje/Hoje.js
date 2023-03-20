import styled from "styled-components";
import axios from "axios";
import { UserDataContext } from "../../Contex/UserDataContext";
import { useContext } from "react";
import { useState, useEffect } from 'react';
import React from "react";
import dayjs from "dayjs";

import Topo from "../Topo/Topo";
import Menu from "../Menu/Menu";
import CardaHabitoHoje from "./CardHabitoHoje";

export default function Hoje() {

    const { dadosUsuario, setDadosUsuario, habitosCompletos, setHabitosCompletos } = useContext(UserDataContext)
    console.log(habitosCompletos)

    const [habitosDia, setHabitosDia] = React.useState([])
    const [habitoAtualizado, setHabitoAtualizado] = React.useState([])

    const diaMes = dayjs().format('DD/MM')
    const diaDaSemana = dayjs().format('ddd')
    const porcentagemHabitos = Number(habitosCompletos).toFixed()

    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUsuario.token}`
        }
    }

    function traduzDiaDaSemana(dia) {
        if (dia === 'Sun') {
            return ('Domingo')
        }
        else if (dia === 'Mon') {
            return ('Segunda')
        }
        else if (dia === 'Tue') {
            return ('Terça')
        }
        else if (dia === 'Wed') {
            return ('Quarta')
        }
        else if (dia === 'Thu') {
            return ('Quinta')
        }
        else if (dia === 'Fri') {
            return ('Sexta')
        }
        else if (dia === 'Sat') {
            return ('Sabado')
        }
    }

    function habitosConcluidos() {
        if (isNaN(habitosCompletos)) {
            return (false)
        }
        if (habitosCompletos === 0) {
            return false
        }
        else {
            return (true)
        }
    }


    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        requisicao.then(resposta => {
            setHabitosDia(resposta.data);
            const habitosCompletados = resposta.data.filter((habito => {
                if (habito.done === true) {
                    return true
                }
            }))
            const rateHabitos = (habitosCompletados.length / resposta.data.length) * 100
            setHabitosCompletos(rateHabitos);
        });
    }, [habitoAtualizado]);

    return (
        <>
            <Topo />
            <TelaHoje>
                <TextoDia data-test="today">{traduzDiaDaSemana(diaDaSemana)}, {diaMes}</TextoDia>
                <HabitosFeitos data-test="today-counter" habitosConcluidos={habitosConcluidos()}>{habitosConcluidos() ? `${porcentagemHabitos}% dos hábitos concluidos` : "Nenhum hábito concluído ainda"}</HabitosFeitos>
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
            <Menu habitoAtualizado={habitoAtualizado} />
        </>
    )
}

const TelaHoje = styled.div`
margin-top: 10vh;
margin-bottom: 10vh;
width: 100vw;
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

const HabitosFeitos = styled.h2`
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 17.976px;
color: ${props => props.habitosConcluidos ? "#8FC549" : "#BABABA"};
line-height: 22px;
margin-bottom: 28px;
`