import React from 'react';

import { Container, Board, Card } from './styles';

export default function Boards() {
  return (
    <Container>
      <Board>
        <div className="container">
          <div className="header">
            <h3>A fazer</h3>
          </div>

          <div className="cards-list">
            <Card>
              <p>an awesome task to do</p>
            </Card>
          </div>

          <div className="footer">
            <button type="button">Adicionar Outro Cartão</button>
          </div>
        </div>
      </Board>

      <Board>
        <div className="container">
          <div className="header">
            <h3>Fazendo</h3>
          </div>

          <div className="cards-list">
            <Card>
              <p>an awesome task to do</p>
            </Card>
          </div>

          <div className="footer">
            <button type="button">Adicionar Outro Cartão</button>
          </div>
        </div>
      </Board>
    </Container>
  );
}
