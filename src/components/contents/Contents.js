import React from "react";
import './Contents.css'
import Expense from "./Expense";
import Income from "./Income";

const Contents = () => {
  return (
    <div className="stuff">
        <Income />
        <Expense />
    </div>
  )
}

export default Contents;