import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  padding: 20px;

  background-color: cyan;

  display: flex;
  flex-direction: row;
`;

export const Board = styled.div`
  margin-left: 10px;
  margin-right: 10px;

  .container {
    background-color: #ebecf0;
    width: 222px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0px 1px 4px rgba(9, 30, 66, 0.25);

    .header {
      margin-bottom: 10px;

      h3 {
        font-size: 14px;
        color: #172b4d;
      }
    }

    .footer {
      button {
        width: 100%;
        border: none;
        color: #5e6c84;
        margin: 10px 0px 0px;
      }

      button:hover {
        background-color: #cfd2db;
      }
    }
  }
`;

export const Card = styled.div`
  background-color: white;
  padding: 6px;
  border-radius: 4px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);

  cursor: grab;

  p {
    font-size: 14px;
  }
`;
