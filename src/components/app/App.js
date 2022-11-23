import React, { useState } from 'react';

import Header from '../header/Header';
import Contents from '../contents/Contents';
import './App.css';
import Input from '../input/Input';
import { connect } from 'react-redux';
import { totalBudget } from '../contents/totals';

const App = (props) => {
  const [data, setData] = useState([])


  const getInput = (des, val, opt) => {
     setData([...data, {des, val, opt}]);
    }
    
  const getColor = () => {
    if (totalBudget(props.income, props.expenses) < 0)
      return  'rgb(233, 62, 77)'

      return 'rgb(92, 230, 138)'
  }

  return (
    <div className='container'>
        <header className='head' style={{backgroundColor: getColor()}}>
          <Header />
        </header>
        <div className='input'>
          <Input getInput={getInput} />
        </div>
        <section className='section'>
          <Contents />
        </section>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    income: state.income,
    expenses: state.expenses
  }
}

export default connect(mapStateToProps) (App);