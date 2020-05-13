import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form } from '@unform/web';
import ValidationError from 'yup/es/ValidationError';
import firebase from 'firebase/app';

import { Container, BgImage } from './styles';
import Input from '~/components/input';
import BackgroundLeft from '../../assets/bg_left.svg';
import BackgroundRight from '../../assets/bg_right.svg';
import useAuth from '~/hooks/useAuth';
import validator from './validator';

export default function Login() {
  const auth = useAuth();
  const form = React.useRef();

  if (auth.isSigned) {
    return <Redirect to="/boards" />;
  }

  const handleSubmit = async (values) => {
    form.current.setErrors({});

    try {
      const { email, password } = await validator.validate(values, {
        abortEarly: false,
      });

      await firebase.auth().signInWithEmailAndPassword(email, password);
      auth.signIn();
    } catch (err) {
      const validationErrors = {};

      if (err instanceof ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        form.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <Container>
      <div className="login-form-container">
        <Form onSubmit={handleSubmit} ref={form}>
          <strong>Fazer Login no Trello</strong>

          <Input type="text" placeholder="Insira o e-mail" name="email" />

          <Input type="password" placeholder="Inserir senha" name="password" />

          <button type="submit" className="login-btn">
            Fazer Login
          </button>

          <Link to="/signup">SignUp</Link>
        </Form>
      </div>

      <BgImage position="left" src={BackgroundLeft} alt="Backgrund Left" />
      <BgImage position="right" src={BackgroundRight} alt="Backgrund Right" />
    </Container>
  );
}
