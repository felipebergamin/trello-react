import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  background-color: #f9fafc;

  align-items: center;
  justify-content: center;

  div.login-form-container {
    z-index: 1;
    background-color: #fff;
    width: 400px;
    padding: 25px 40px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    strong {
      text-align: center;
      margin: 10px 0 25px;
      color: #5e6c84;
      font-size: 16px;
    }

    .error-message {
      color: red;
      align-self: flex-end;
    }

    .form-group {
      width: 100%;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
    }

    input {
      width: 100%;
      padding: 10px;
      font-size: 14px;
      background-color: #fafbfc;
      border: 2px solid #dfe1e6;
    }

    a,
    .login-btn {
      border: none;
      padding: 8px 0px;
      border-radius: 4px;
      margin-bottom: 14px;

      font-weight: bold;
      font-size: 14px;
      text-align: center;
    }

    .login-btn {
      transition: background-color 0.2s;
      background-color: rgb(90, 172, 68);
      color: white;
    }

    .login-btn:hover {
      background-color: ${darken(0.1, 'rgb(90, 172, 68)')};
    }
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
