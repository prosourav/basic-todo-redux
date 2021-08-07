export const ADD_TO_DO = "ADD_TO_DO";
export const REMOVE_TO_DO = "REMOVE_TO_DO";

export const addTodo = (todo) => {
  return {
    type: ADD_TO_DO,
    payload: { id: new Date().getTime().toString(), todo: todo },
  };
};
export const removeTodo = (id) => {
  return {
    type: REMOVE_TO_DO,
    payload: id,
  };
};
