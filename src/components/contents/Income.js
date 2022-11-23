import React from "react";
import { connect } from 'react-redux';
import { deleteIncome } from "../../actions";

import './Contents.css';
import { addCommas, capitalise, totals } from "./totals";

const Income = (props) => {

  const removeIncome = (e) => {
    props.deleteIncome(e.target.parentElement.id)
  }

  function renderInc (income) {
    return income.map(inc => {
      return (
        <div key={inc.des} id={inc.des} className="list-inc_cont">
          <li>{capitalise(inc.des)}</li>
          <li className="val">{addCommas(inc.val)}/=</li>
          <i className="fa-solid fa-circle-xmark" onClick={removeIncome}></i>
        </div>
      )
    })
  }

  return (
    <div className="income">
        <h3 className="inc">Income</h3>
        <ul className="list-income">
          {renderInc(props.income)}
          {/* <div className="list-inc_cont">
            <li>Sold Car</li>
            <li className="val">7000/=</li>
            <button>X</button>
          </div> */}
        </ul>
        <h4 className="total">
          <p className="total-header">Total</p>
          <p className="total-value">{addCommas(totals(props.income))}</p>
        </h4>
      </div>
  )
}

const mapStateToProps = (state) => {
  return { income: state.income}
}

export default connect(mapStateToProps, { deleteIncome }) (Income);