import React from 'react';
import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import LogoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Background />
      <Content>
        <img src={LogoImg} alt="AppBarber" />

        <form>
          <h1>Fazer seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="login">
          <FiLogIn />
          Voltar para login
        </a>
      </Content>
    </Container>
  </>
);

export default SignIn;
