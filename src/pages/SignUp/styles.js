import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const SignUpForm = styled.form`
  width: 400px;
  padding: 25px 40px;
  background-color: white;

  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  input {
    padding: 10px;
    font-size: 14px;
    background-color: #fafbfc;
    border: 2px solid #dfe1e6;
    margin-bottom: 20px;
  }

  .signup-btn {
    transition: background-color 0.2s;
    background-color: rgb(90, 172, 68);
    color: white;

    border: none;
    padding: 8px 0px;
    border-radius: 4px;
    margin-bottom: 14px;

    font-weight: bold;
    font-size: 14px;
    text-align: center;
  }

  .signup-btn:hover {
    background-color: ${darken(0.1, 'rgb(90, 172, 68)')};
  }
`;

export const BgImage = styled.img`
  @media (max-width: 400px) {
    display: none;
  }

  z-index: 0;
  position: absolute;
  bottom: 0;

  width: 30%;

  ${(props) =>
    props.position === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
`;
