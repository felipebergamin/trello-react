import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { addList } from '~/store/modules/lists/actions';
import { addTask, moveTask } from '~/store/modules/tasks/actions';
import { Container, Board, Card, AddListButton } from './styles';

export default function Boards() {
  const dispatch = useDispatch();

  const { lists, tasks } = useSelector((store) => store);

  const onDragEnd = (result) => {
    const { destination, draggableId } = result;

    dispatch(
      moveTask({
        id: draggableId,
        toList: destination.droppableId,
      })
    );
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

  const handleAddList = () => {
    const listName = prompt('Qual o nome da lista?');
    dispatch(addList(listName));
  };

  const handleAddTask = (listId) => {
    const text = prompt('Qual é o nome do card?');
    dispatch(
      addTask({
        listId,
        text,
      })
    );
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {lists?.map((list) => (
          <Board key={String(list.id)}>
            <div className="container">
              <div className="header">
                <h3>{list.name}</h3>
              </div>

              <Droppable droppableId={String(list.id)}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    className="cards-list"
                    sytle={getListStyle(snapshot.isDraggingOver)}
                  >
                    {tasks
                      .filter((task) => task.listId === list.id)
                      .map((task, index) => (
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
                              <p>{task.text}</p>
                            </Card>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div className="footer">
                <button type="button" onClick={() => handleAddTask(list.id)}>
                  Adicionar Outro Cartão
                </button>
              </div>
            </div>
          </Board>
        ))}
      </DragDropContext>

      <div>
        <AddListButton onClick={handleAddList}>
          <AiOutlinePlus size={16} />
        </AddListButton>
      </div>
    </Container>
  );
}
