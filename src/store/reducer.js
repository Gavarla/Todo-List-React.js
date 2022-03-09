const initialState = {
  likes: 0,
  dislikes: 0,
};
const reducer = (state = initialState, action) => {
  if (action.type === 'Like') {
    return { ...state, likes: state.likes + 1 };
  }
  if (action.type === 'Dislike') {
    return { ...state, dislikes: state.dislikes + 1 };
  }
  return state;
};
export default reducer;
