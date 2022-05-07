import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function Outputs() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        value: '',
        description: ''
    });

    async function save() {
        try {
            await axios.post('http://localhost:5000/transactions/outputs', data);
            alert('Saída adicionada');
            navigate('/transactions');
        } catch(e) {
            alert(e.response.data);
        }
    }

    return (
        <Container>
            <H1>Nova saída</H1>

            <Input placeholder='Valor' value={data.value} onChange={e => setData({...data, value: e.target.value})}/>
            <Input placeholder='Descrição' value={data.description} onChange={e => setData({...data, description: e.target.value})}/>

            <Button onClick={save}>Salvar saída</Button>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    padding: 35px;
    display: flex;
    flex-direction: column;
`;

const H1 = styled.h1`
    font-size: 26px;
    line-height: 31px;
    font-weight: 700;
    margin-bottom: 40px;
    color: #FFFFFF;
    font-family: 'Raleway';
`;

const Input = styled.input`
    width: 100%;
    height: 58px;
    padding: 15px;
    font-size: 20px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    background: #FFFFFF;
    font-family: 'Raleway';

    ::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        font-family: 'Raleway';
    }
`;

const Button = styled.button`
    width: 100%;
    height: 46px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    border-radius: 5px;
    text-align: center;
    border: none;
    color: #FFFFFF;
    background: #A328D6;
    font-family: 'Raleway';
    
    :hover {
        cursor: pointer;
    }
`;