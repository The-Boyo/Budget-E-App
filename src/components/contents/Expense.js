import React from "react";
import { connect } from 'react-redux';
import { deleteExpense } from "../../actions";
import { addCommas, capitalise, totals } from "./totals";


const Expense = (props) => {

  const removeExpense = (e) => {
    props.deleteExpense(e.target.parentElement.id)
  }


  function renderExp (expenses) {
    return expenses.map(exp => {
      return (
        <div key={exp.des} id={exp.des} className="list-exp_cont">
          <li>{capitalise(exp.des)}</li>
          <li className="val">{addCommas(exp.val)}/=</li>
          <i className="fa-solid fa-circle-xmark" onClick={removeExpense}></i>
        </div>
        )
      }
      )
  }
       
  return (
    <div className="expenses">
        <h3 className="exp">Expenses</h3>
        <ul className="list-expense">
          {renderExp(props.expenses)}
          {/* <div className="list-exp_cont">
          <li>Bought Store</li>
          <li className="val">700/=</li>
          <button>X</button>
          </div> */}
        </ul>
        <h4 className="total">
          <p className="total-header">Total</p>
          <p className="total-value">{addCommas(totals(props.expenses))}</p>
        </h4>
      </div>
  )
}

const mapStateToProps = (state) => {
  return { expenses: state.expenses }
}

export default connect(mapStateToProps, { deleteExpense }) (Expense);