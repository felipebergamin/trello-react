import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import { Container, LoginForm, BgImage } from './styles';
import BackgroundLeft from '../../assets/bg_left.svg';
import BackgroundRight from '../../assets/bg_right.svg';
import useAuth from '~/hooks/useAuth';

export default function Login() {
  const auth = useAuth();

  if (auth.isSigned) {
    return <Redirect to="/boards" />;
  }

  return (
    <Container>
      <div className="login-form-container">
        <LoginForm>
          <strong>Fazer Login no Trello</strong>

          <input type="text" placeholder="Insira o e-mail" />

          <input type="password" placeholder="Inserir senha" />

          <button
            type="button"
            className="login-btn"
            onClick={() => auth.signIn()}
          >
            Fazer Login
          </button>

          <Link to="/signup">SignUp</Link>
        </LoginForm>
      </div>

      <BgImage position="left" src={BackgroundLeft} alt="Backgrund Left" />
      <BgImage position="right" src={BackgroundRight} alt="Backgrund Right" />
    </Container>
  );
}
