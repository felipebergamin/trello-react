export function addTask({ text, listId }) {
  return {
    type: '@tasks/add',
    payload: {
      text,
      listId,
    },
  };
}

export function renameTask({ id, text }) {
  return {
    type: '@tasks/rename',
    payload: {
      id,
      text,
    },
  };
}

export function moveTask({ id, toList }) {
  return {
    type: '@tasks/move',
    payload: {
      id,
      toList,
    },
  };
}

export function deleteTask(id) {
  return {
    type: '@tasks/delete',
    payload: id,
  };
}
