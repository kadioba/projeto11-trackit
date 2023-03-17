import styled from "styled-components";
import Topo from "../Topo/Topo";
import Menu from "../Menu/Menu";

export default function Habitos() {

    return (
        <>
            <Topo />
            <TelaHabitos>
                <div>
                    <h1>Meus hábitos</h1>
                    <button>+</button>
                </div>
            </TelaHabitos>
            <Menu />
        </>
    )
}

const TelaHabitos = styled.div`
margin-top: 10vh;
margin-bottom: 10vh;
width: 100vw;
height: 80vh;
background-color: #F2F2F2;
padding: 0px 17px;
padding-top: 28px;
box-sizing: border-box;
div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h1{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
}
button{
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4.63636px;
}
`