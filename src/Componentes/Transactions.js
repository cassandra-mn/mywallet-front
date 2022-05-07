import {useNavigate} from 'react-router-dom';
import {FaSignOutAlt} from 'react-icons/fa';
import {useContext} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from './../context/UserContext';

export default function Transactions() {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);

    return (
        <Container>
            <Nav>
                <H1>Olá, {user.name}</H1>
                <Exit><FaSignOutAlt/></Exit> 
            </Nav>
            
            <Registers>
                <Div><H2>Não há registros de entrada ou saída</H2></Div>
            </Registers>

            <Footer>
                <Transaction onClick={() => navigate('/transactions/inputs')}>
                    <Icon>+</Icon>
                    <P>Nova entrada</P>
                </Transaction>
                <Transaction onClick={() => navigate('/transactions/outputs')}>
                    <Icon>-</Icon>
                    <P>Nova saída</P>
                </Transaction>
            </Footer>
        </Container>
    );
}

const Container = styled.div`
    margin: 25px;
    height: calc(100vh - 50px);
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
`;

const H1 = styled.h1`
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    font-family: 'Raleway';
`;

const Exit = styled.div`
    font-size: 25px;
    color: #FFFFFF;

    :hover {
        cursor: pointer;
    }
`;

const Registers = styled.div`
    min-width: 326px;
    height: calc(100vh - 230px);
    margin: 15px 0;
    border-radius: 5px;
    background: #FFFFFF;
`;

const Div = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const H2 = styled.h2`
    width: 180px;
    height: 46px;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    font-family: 'Raleway';
`;

const Footer = styled.div`
    left: 25px;
    right: 25px;
    bottom: 25px;
    display: flex;
    position: absolute;
    justify-content: space-between;
`;

const Transaction = styled.div`
    min-width: 155px;
    min-height: 114px;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #A328D6;

    :hover {
        cursor: pointer;
    }
`;

const Icon = styled.div`
    width: 22px;
    height: 22px;
    font-size: 22px;
    font-weight: 700;
    border-radius: 50px;
    border: 2px #FFFFFF solid;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
`;

const P = styled.div`
    width: 64px;
    height: 40px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    font-family: 'Raleway';
`;