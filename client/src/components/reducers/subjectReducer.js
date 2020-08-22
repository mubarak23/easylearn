export const intialState = null;
export const reducer = (state, action) => {
  if (action.type == 'STUDENT') {
    return action.payload;
  }
  return state;
};
