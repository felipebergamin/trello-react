import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '~/components/header';

export default function AppLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
