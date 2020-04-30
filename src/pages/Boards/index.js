import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import mockBoards from './data.json';

import { Container, Board, Card } from './styles';

export default function Boards() {
  const [boards, setBoards] = React.useState(mockBoards);

  const move = (source, destination, droppableSrc, droppableDst) => {
    const sourceClone = Array.from(source.cards);
    const destinationClone = Array.from(destination.cards);

    const [itemRemoved] = sourceClone.splice(droppableSrc.index, 1);
    destinationClone.splice(droppableDst.index, 0, itemRemoved);

    return [
      {
        ...source,
        cards: sourceClone,
      },
      {
        ...destination,
        cards: destinationClone,
      },
    ];
  };

  const getList = (listId) =>
    boards.find((board) => String(board.id) === listId);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      const moveResult = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      setBoards(
        boards.map((board) => {
          if (!moveResult.length > 0) return board;

          const findAtResults = moveResult.findIndex(
            (r) => String(r.id) === String(board.id)
          );

          if (findAtResults >= 0)
            return moveResult.splice(findAtResults, 1).pop();
          return board;
        })
      );
    }
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: 8,
    width: 250,
  });

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {boards.map((board) => (
          <Board key={String(board.id)}>
            <div className="container">
              <div className="header">
                <h3>{board.name}</h3>
              </div>

              <Droppable droppableId={String(board.id)}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    className="cards-list"
                    sytle={getListStyle(snapshot.isDraggingOver)}
                  >
                    {board.cards.map((task, index) => (
                      <Draggable
                        key={String(task.id)}
                        draggableId={String(task.id)}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <Card
                            key={String(task.id)}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <p>{task.name}</p>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div className="footer">
                <button type="button">Adicionar Outro Cartão</button>
              </div>
            </div>
          </Board>
        ))}
      </DragDropContext>
    </Container>
  );
}
