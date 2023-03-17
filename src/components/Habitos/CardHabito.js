import styled from "styled-components";
import iconeLixo from "../../assets/lixo.png"
import axios from 'axios';
import { useContext } from "react";
import { UserDataContext } from "../../Contex/UserDataContext";

export default function CardHabito(props) {

    const { dadosUsuario, setDadosUsuario } = useContext(UserDataContext)

    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUsuario.token}`
        }
    }

    function deletarHabito() {
        const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`, config)

        requisicao.then(resposta => {
            console.log("Excluido com sucesso")
            const novoArray = props.habitos.filter(hab => hab.id !== props.id)
            props.setHabitos(novoArray)
        })
    }

    return (
        <Cartao>
            <div>
                <h1>{props.conteudo}</h1>
                <img src={iconeLixo} alt="" onClick={() => deletarHabito()} />
            </div>
            <div>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </div>
        </Cartao>
    )
}

const Cartao = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
padding: 15px;
box-sizing: border-box;
margin-top: 10px;
display: flex;
flex-direction: column;
div:first-of-type{
    width: 315px;
    height: 27px;
    display: flex;
    justify-content: space-between;
}
h1{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}
img{
    width: 13px;
    height: 15px;
}
div:nth-of-type(2){
    width: 240px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-self: flex-start;
}
button{
    width: 30px;
    height: 30px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
}
`