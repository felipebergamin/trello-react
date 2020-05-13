import React from 'react';
import firebase from 'firebase/app';
import { Form } from '@unform/web';
import ValidationError from 'yup/es/ValidationError';

import { AuthContext } from '~/contexts/auth';
import BackgroundLeft from '../../assets/bg_left.svg';
import BackgroundRight from '../../assets/bg_right.svg';
import { SignUp, BgImage } from './styles';
import Input from '~/components/input';
import Validator from './validator';

function SignUpScreen() {
  const form = React.useRef();
  const auth = React.useContext(AuthContext);

  const handleSignUp = async (data) => {
    form.current.setErrors({});

    try {
      const { email, password } = await Validator.validate(data, {
        abortEarly: false,
      });

      await firebase.auth().createUserWithEmailAndPassword(email, password);
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
    <SignUp>
      <Form onSubmit={handleSignUp} ref={form}>
        <Input type="text" placeholder="Informe um e-mail" name="email" />

        <Input
          type="password"
          placeholder="Escolha uma boa senha"
          name="password"
        />

        <button type="submit" className="signup-btn">
          SignUp
        </button>
      </Form>

      <BgImage position="left" src={BackgroundLeft} alt="Backgrund Left" />
      <BgImage position="right" src={BackgroundRight} alt="Backgrund Right" />
    </SignUp>
  );
}

export default SignUpScreen;
