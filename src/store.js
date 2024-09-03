import { createStore } from 'redux';

const initialState = {
  users: Array.from({ length: 10000 }, (_, i) => ({ id: i, name: `User ${i}` })),
  activeUserId: 5000,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_USER':
      return {
        ...state,
        activeUserId: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);