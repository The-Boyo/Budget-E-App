import React, { useRef, useState } from "react";
import { connect } from 'react-redux';

import { getInput } from "../../actions";
import './Input.css'


const Input = (props) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [option, setOption] = useState('+');


  const onFormSubmit = (e) => {
    e.preventDefault();
    const newString = parseFloat(description);

    if(!value || !description || !isNaN(newString) || value <= 0) return;
    else {
      props.getInput(description, value, option);
      setDescription('');
      setValue('');
    }
  }
  
  const onOptionChange = (e) => {
    setOption(e.target.value)
  }
  
  const onDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const onValueChange = (e) => {
    setValue(e.target.value)
  }  
  
  const inputRef = useRef();
  const desRef = useRef();
  const valRef = useRef();
  const iconRef = useRef();
  

  return (
    <form onSubmit={onFormSubmit} className="input-cont">
      <select onChange={onOptionChange} className="select" ref = {inputRef}>
        <option className="positive">+</option>
        <option className="negative">-</option>
      </select>
      <input type="text" placeholder="description..." value={description} className={`description`} onChange={onDescriptionChange} ref={desRef} />

      <input type="number" placeholder="value..." value={value} className={`value`} onChange={onValueChange} ref={valRef}  />
      <button className="button">
        <i className="fa-regular fa-circle-check" ref={iconRef}></i>
      </button>
    </form>
  )
}


export default connect(null, { getInput }) (Input);




