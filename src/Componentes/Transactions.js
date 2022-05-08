import {useNavigate} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import {FaSignOutAlt} from 'react-icons/fa';
import {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from './../context/UserContext';

export default function Transactions() {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const [transactions, setTransactions] = useState();
    let sum = 0;

    useEffect(() => {
        (async () => {
            try {
                const transactions = await axios.get('http://localhost:5000/transactions', {
                    headers: {Authorization: `Bearer ${user.token}`}
                });
                setTransactions(transactions.data);
            } catch(e) {
                alert('Erro ao obter transações');
                console.log(e);
            }
        })();
    }, []);

    return transactions ? (
        <Container>
            <Nav>
                <H1>Olá, {user.name}</H1>
                <Exit onClick={() => navigate('/')}><FaSignOutAlt/></Exit> 
            </Nav>
            
            <Registers>
                   {transactions.length > 0 ? (
                        <Values>
                            {transactions.map(transaction => {
                                const {date, description, value, type} = transaction;
                                const number = parseFloat(value).toFixed(2).replace('.', ',');
                                type === 'input' ? sum += parseFloat(value) : sum -= parseFloat(value);

                                return (
                                    <List>
                                        <Group>
                                            <Info1>{date}</Info1>
                                            <Info2>{description}</Info2>
                                        </Group>
                                        <Value color={type === 'input' ? '#03AC00' : '#C70000'}>{number}</Value>
                                    </List>
                                )
                            })}
                            <Saldo>
                                SALDO
                                <Value color={sum > 0 ? '#03AC00' : '#C70000'}>{parseFloat(sum).toFixed(2).replace('.', ',')}</Value> 
                            </Saldo>
                        </Values>
                   ) : (
                       <Div><H2>Não há registros de entrada ou saída</H2></Div>
                   )}
            </Registers>

            <Footer>
                <Transaction onClick={() => navigate('/transactions/input')}>
                    <Icon>+</Icon>
                    <P>Nova entrada</P>
                </Transaction>
                <Transaction onClick={() => navigate('/transactions/output')}>
                    <Icon>-</Icon>
                    <P>Nova saída</P>
                </Transaction>
            </Footer>
        </Container>
    ) : <p>Carregando</p>;
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
    left: 25px;
    right: 25px;
    height: calc(100vh - 230px);
    margin: 15px 0;
    border-radius: 5px;
    position: absolute;
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
    min-width: 48%;
    height: 114px;
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

const Values = styled.div`
    width: 100%;
    height: calc(100vh - 280px);
    overflow-y: scroll;
    padding: 12px;
    display: flex;
    flex-direction: column;
    font-family: 'Raleway';
`;

const List = styled.div`
    font-size: 18px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Group = styled.div`
    margin: 10px;
    display: flex;
`;

const Info1 = styled.p`
    margin-right: 10px;
    color: #C6C6C6;
`;

const Info2 = styled.p`
    color: #000000;
`;

const Value = styled.p`
    font-weight: initial;
    color: ${props => props.color};
`;

const Saldo = styled.h1`
    width: calc(100% - 35px);
    bottom: 20px;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    margin-left: 10px;
    display: flex;
    position: absolute;
    justify-content: space-between;
`;