import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { UserDataContext } from "../../Contex/UserDataContext";
import { useState, useEffect } from 'react';
import React from "react";
import axios from "axios";


export default function Menu(props) {

    const { dadosUsuario, setDadosUsuario } = useContext(UserDataContext)

    const [habitosCompletos, setHabitosCompletos] = React.useState(0);
    console.log(habitosCompletos)

    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUsuario.token}`
        }
    }

    const navigate = useNavigate()

    function direcionarHoje() {
        navigate("/hoje")
    }

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        requisicao.then(resposta => {

            const habitosFeitos = resposta.data.filter((habito => {
                if (habito.done === true) {
                    return true
                }
            }))
            console.log(habitosFeitos)

            const mediaHabitos = (habitosFeitos.length / resposta.data.length) * 100
            setHabitosCompletos(mediaHabitos);
        });
    }, [props.habitoAtualizado]);

    return (
        <BarraMenu data-test="menu">
            <Link data-test="habit-link" to="/habitos">Hábitos</Link>
            <button data-test="today-link" onClick={() => direcionarHoje()}> <CircularProgressbar value={habitosCompletos} text={"Hoje"} styles={
                buildStyles({
                    textColor: "white",
                    pathColor: "white",
                    trailColor: "#52B6FF"
                })} /></button>
            <Link data-test="history-link" to="/historico">Histórico</Link>
        </BarraMenu>
    )
}

const BarraMenu = styled.div`
margin: 0 auto;
width: 375px;
height: 70px;
background-color: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
bottom: 0px;
left: 0px;
background-color: red;
a{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    color: #52B6FF;
    background-color: red;
}
button{
    width: 91px;
    height: 91px;
    background: #52B6FF;
    margin-bottom: 40px;
    border-radius: 50px;
    border: none;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
}
`
