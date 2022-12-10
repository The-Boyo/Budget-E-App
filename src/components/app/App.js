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
      return  'linear-gradient(to left, rgb(207, 27, 3), rgb(214, 104, 104))'

    else if(totalBudget(props.income, props.expenses) > 0)
      return ' linear-gradient(to left, rgb(6, 114, 6), rgb(87, 241, 108))'
  }

  return (
    <div className='container'>
        <header className='head' style={{background: getColor()}}>
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