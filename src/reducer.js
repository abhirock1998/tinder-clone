export const initialState = {};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PERSON":
      return { ...state, person: action.person, bool: true };

    case "SET_BOOL":
      return { ...state, bool: action.bool };
    default:
      return state;
  }
};
