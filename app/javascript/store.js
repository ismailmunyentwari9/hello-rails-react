import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
  greeting: '',
};

// Action Types
const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

// Action Creators
export const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

// Thunk Action
export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/greeting'); // Replace with your API endpoint
    const greeting = response.data;
    dispatch(fetchGreetingSuccess(greeting));
  } catch (error) {
    console.error(error);
  }
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
