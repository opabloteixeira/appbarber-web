import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import LogoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={LogoImg} alt="AppBarber" />

        <form>
          <h1>Fazer seu login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Acessar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default SignIn;
