import React from 'react';
import { connect } from 'react-redux';
import { addCommas, totalBudget, totals } from '../contents/totals';

import './Header.css';

const Header = (props) => {

  return (
    <div className='budget'>
      <div className='total-budget'>
        <h1 className='budget-header'> <span>&#129518;</span> Your Budget <span>&#129518;</span></h1>
        <h2 className='budget-value' >{addCommas(totalBudget(props.income, props.expenses))}/=</h2>
      </div>
      <div className='budget-inc'>
        <h4 className='total-income'>Income</h4>
        <h4 className='total-inc_value'>+{props.income.length > 0 ? addCommas(totals(props.income)) : ''}</h4>
      </div>
      <div className='budget-exp'>
        <h4 className='total-expenses'>Expenses</h4>
        <h4 className='total-exp_value'>-{props.expenses.length > 0 ? addCommas(totals(props.expenses)) : ''}</h4>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    income: state.income,
    expenses: state.expenses
  }
}

export default connect(mapStateToProps) (Header);