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

    const { habitosCompletos } = useContext(UserDataContext)


    const navigate = useNavigate()

    function direcionarHoje() {
        navigate("/hoje")
    }

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
width: 100vw;
height: 10vh;
background-color: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
bottom: 0px;
left: 0px;
padding: 0px 30px;
box-sizing: border-box;
a{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    color: #52B6FF;
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
