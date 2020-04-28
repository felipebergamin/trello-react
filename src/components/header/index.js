import React from 'react';

import { Container } from './styles';
import ProfileImage from '~/assets/profile.jpg';
import NameLogo from '~/assets/name_logo.svg';

export default function header() {
  return (
    <Container>
      <div className="content-left" />

      <div className="content-center">
        <img src={NameLogo} alt="App Logo" />
      </div>

      <div className="content-right">
        <img src={ProfileImage} alt="Profile" />
      </div>
    </Container>
  );
}
