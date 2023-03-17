import styled from "styled-components";
import { useContext } from "react";
import { UserDataContext } from "../../Contex/UserDataContext";

export default function Topo() {

    const { dadosUsuario, setDadosUsuario } = useContext(UserDataContext)

    return (
        <BarraTopo data-test="header">
            <h1>TrackIt</h1>
            <img src={dadosUsuario.image} alt="" />
        </BarraTopo>
    )
}

const BarraTopo = styled.div`
width: 100vw;
height: 10vh;
position: fixed;
padding: 0px 18px;
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0px;
left: 0px;
background-color: #126BA5;
h1{
    font-family: 'Playball';
    font-weight: 400;
    font-size: 38.982px;
    color: #FFFFFF;
}
img{
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
}
`