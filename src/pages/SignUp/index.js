import React from 'react';

import BackgroundLeft from '../../assets/bg_left.svg';
import BackgroundRight from '../../assets/bg_right.svg';
import { SignUpForm, BgImage } from './styles';

function SignUp() {
  return (
    <SignUpForm>
      <input placeholder="Informe seu nome" />

      <input placeholder="Escolha uma boa senha" />

      <button type="button" className="signup-btn">
        SignUp
      </button>

      <BgImage position="left" src={BackgroundLeft} alt="Backgrund Left" />
      <BgImage position="right" src={BackgroundRight} alt="Backgrund Right" />
    </SignUpForm>
  );
}

export default SignUp;
