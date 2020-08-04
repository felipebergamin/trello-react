import { v1 } from 'uuid';

export const INITIAL_STATE = [];

export default function lists(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case '@lists/add':
      return [
        ...state,
        {
          id: v1(),
          name: action.payload.name,
        },
      ];
    case '@lists/rename':
      return state.map((list) =>
        list.id === action.payload.id
          ? {
              ...list,
              name: action.payload.name,
            }
          : list
      );
    case '@lists/delete':
      return state.filter((list) => list.id === action.payload);
    default:
      return state;
  }
}
