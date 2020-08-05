import { v1 } from 'uuid';

const INITIAL_STATE = [];

export default function tasks(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case '@tasks/add':
      return [
        ...state,
        {
          ...action.payload,
          id: v1(),
        },
      ];
    case '@tasks/rename':
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, listId: action.payload.listId }
          : task
      );
    case '@tasks/move':
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, listId: action.payload.toList }
          : task
      );
    case '@tasks/delete':
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}
