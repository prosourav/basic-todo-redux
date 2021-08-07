const initialState = {
  todo: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      const newList = [...state.todo, action.payload];
      return {
        ...state,
        todo: newList,
      };
    case "REMOVE_TO_DO":
      const remainingList = state.todo.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todo: remainingList,
      };
    default:
      return state;
  }
};
export default todoReducer;
