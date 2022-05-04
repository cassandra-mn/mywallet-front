import styled from 'styled-components';

export default function Login() {
    return (
        <Container>
            <Logo>MyWallet</Logo>
            <Input placeholder='E-mail'/>
            <Input placeholder='Senha'/>
            <Button>Entrar</Button>
            <Register>Primeira vez? Cadastre-se!</Register>
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
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    background: #FFFFFF;
    box-sizing: border-box;

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

const Register = styled.p`
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    margin-top: 36px;
    color: #FFFFFF;
    font-family: 'Raleway';
`;