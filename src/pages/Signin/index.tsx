import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import LogoImg from '../../assets/logo.svg';

const Signin: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={LogoImg} alt="AppBarber" />

        <form>
          <h1>Fazer login</h1>
          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Acessar</button>
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

export default Signin;
