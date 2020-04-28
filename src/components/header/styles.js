import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 6px;
  padding-right: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #026aa7;
  height: 40px;
  width: 100%;

  .content-left {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .content-right {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    img {
      border-radius: 50%;
      height: 34px;
      width: 34px;
    }
  }

  .content-center {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
      height: 34px;
    }
  }
`;
