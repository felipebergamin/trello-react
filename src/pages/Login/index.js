import React from 'react';

import { Container, LoginForm, BgImage } from './styles';
import BackgroundLeft from '../../assets/bg_left.svg';
import BackgroundRight from '../../assets/bg_right.svg';

export default function Login() {
  return (
    <Container>
      <div className="login-form-container">
        <LoginForm>
          <strong>Fazer Login no Trello</strong>

          <input type="text" placeholder="Insira o e-mail" />

          <input type="password" placeholder="Inserir senha" />

          <button type="submit">Fazer Login</button>
        </LoginForm>
      </div>

      <BgImage position="left" src={BackgroundLeft} alt="Backgrund Left" />
      <BgImage position="right" src={BackgroundRight} alt="Backgrund Right" />
    </Container>
  );
}
