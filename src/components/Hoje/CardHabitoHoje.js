import styled from "styled-components";
import check from "../../assets/check.png"

export default function CardaHabitoHoje() {
    return (
        <CardHoje>
            <DadosHabito>
                <h1>Ler 1 capítulo de livro</h1>
                <h2>Sequência atual: 3 dias</h2>
                <h2>Seu recorde: 5 dias</h2>
            </DadosHabito>
            <CheckDia>
                <img src={check} alt="" />
            </CheckDia>
        </CardHoje>

    )
}

const CardHoje = styled.div`
width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: space-between;
box-sizing: border-box;
padding: 13px;
margin-bottom: 10px;
`

const CheckDia = styled.button`
    box-sizing: border-box;
    width: 69px;
    height: 69px;
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
img{
    width: 35px;
    height: 28px;
}
`

const DadosHabito = styled.div`
width: 231px;
height: 64px;
h1{
    width: 208px;
    height: 25px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}
h2{
    width: 146px;
    height: 32px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 12.976px;
    line-height: 6px;
    color: #666666;
}
`