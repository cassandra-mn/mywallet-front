import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function SignUp() {
    const navigate = useNavigate();
    const [date, setDate] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    async function register() {
        try {
            await axios.post('http://localhost:5000/sign-up', date);
            alert('Cadastro realizado com sucesso!');
            navigate('/sign-in');
        } catch(e) {
            alert('Erro ao cadastrar');
            alert(e.response.data);
        }
    }

    return (
        <Container>
            <Logo>MyWallet</Logo>

            <Input placeholder='Nome' value={date.name} onChange={e => setDate({...date, name: e.target.value})}/>
            <Input placeholder='E-mail' value={date.email} onChange={e => setDate({...date, email: e.target.value})}/>
            <Input placeholder='Senha' type='password' value={date.password} onChange={e => setDate({...date, password: e.target.value})}/>
            <Input placeholder='Confirme a senha' type='password' value={date.passwordConfirm} onChange={e => setDate({...date, passwordConfirm: e.target.value})}/>
            
            <Button onClick={register}>Cadastrar</Button>
            
            <Login onClick={() => navigate('/sign-in')}>Já tem uma conta? Entre agora?</Login>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #945CBE;
`;

const Logo = styled.h1`
    font-size: 32px;
    line-height: 50px;
    margin-bottom: 25px;
    color: #FFFFFF;
    font-family: 'Saira Stencil One';
`;

const Input = styled.input`
    width: 326px;
    height: 58px;
    padding: 15px;
    font-size: 20px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    background: #FFFFFF;
    box-sizing: border-box;
    font-family: 'Raleway';

    ::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        font-family: 'Raleway';
    }
`;

const Button = styled.button`
    width: 326px;
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
    box-sizing: border-box;
    
    :hover {
        cursor: pointer;
    }
`;

const Login = styled.p`
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    margin-top: 36px;
    color: #FFFFFF;
    font-family: 'Raleway';

    :hover {
        cursor: pointer;
    }
`;