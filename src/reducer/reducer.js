const initialState = {
  list: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      if (!data) {
        alert("Please add task..");
      } else {
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };
      }
      break;
      case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        list: newList,
      };
    case "EDIT_TODO":
      // const editValue = state.list.filter((elem) => elem.id === action.id);

      return {
        ...state,
        list: [
          ...state.list.filter((elem) => elem.id !== action.id),
          { task: action.data, id: action.id },
        ],
      };
    default:
      return state;
  }
};
export default reducer;
