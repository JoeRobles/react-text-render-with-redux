export const reducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return action.payload.newText;
    default:
      return state;
  }
};
