

export const getInput = (des, val, opt) => {
  if (opt === '+') {
    return {
      type: 'INCOME',
      payload: { des, val, opt }
    }
  } 
  else {
    return {
      type: 'EXPENSE',
      payload: {des, val, opt}
    }
  }
} 

export const deleteIncome = (id) => {
  return {
    type: 'POSITIVE',
    payload: id
  }
}

export const deleteExpense = (id) => {
  return {
    type: 'NEGATIVE',
    payload: id
  }
}