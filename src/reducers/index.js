import { combineReducers } from 'redux'

const incomeReducer = (state = [], action) => {
  switch (action.type) {
    case 'INCOME':
      return [...state, action.payload]
    case 'POSITIVE':
      const newState = state.filter(el=> el.des !== action.payload);
        return newState;
    default:
      return state;
  }
}

const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case 'EXPENSE':
      return [...state, action.payload]
    case 'NEGATIVE':
      const newState = state.filter(el=> el.des !== action.payload);
      return newState;
    default:
      return state;
  }
} 


export default combineReducers({
  income: incomeReducer,
  expenses: expenseReducer
})