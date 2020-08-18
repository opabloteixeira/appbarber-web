import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationsErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/AuthContext';

import LogoImg from '../../assets/logo.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn, user } = useAuth();

  console.log(user);
  const handleSubmit = useCallback(async (data: SignInFormData) => {// eslint-disable-line
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
      console.log(error); // eslint-disable-line

        const errors = getValidationsErrors(error);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <>
      <Container>
        <Content>
          <img src={LogoImg} alt="AppBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
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
          </Form>

          <a href="login">
            <FiLogIn />
            Criar conta
          </a>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
