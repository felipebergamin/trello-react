export function addList(name) {
  return {
    type: '@lists/add',
    payload: name,
  };
}
export function renameList({ id, name }) {
  return {
    type: 'lists/rename',
    payload: {
      id,
      name,
    },
  };
}

export function deleteList(id) {
  return {
    type: '@lists/delete',
    payload: id,
  };
}
