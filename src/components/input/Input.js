import React, { useRef, useState } from "react";
import { connect } from 'react-redux';

import { getInput } from "../../actions";
import './Input.css'


const Input = (props) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [option, setOption] = useState('+');
  const [borderDes, setBorderDes] = useState('1px solid black');
  const [borderVal, setBorderVal] = useState('1px solid black');

  const iconRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newString = parseFloat(description);

    if(!value || !description || !isNaN(newString) || value <= 0) return;
    else {
      props.getInput(description, value, option);
      setDescription('');
      setValue('');
      iconRef.current.style.color = 'rgb(92, 230, 138)';

      setTimeout(()=>{
        iconRef.current.style.color = 'black'
      }, 1000)
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

  const borderChange = (e) => {
    if (e.target.className.includes('description')){
      option === '+' ? setBorderDes('2px solid rgb(92, 230, 138)') : setBorderDes('2px solid rgb(233, 62, 77)')
    } else if (e.target.className.includes('value')) {
      option === '+' ? setBorderVal('2px solid rgb(92, 230, 138)') : setBorderVal('2px solid rgb(233, 62, 77)')
    }
  }

  const removeBorder = () => {
    setBorderDes('1px solid black');
    setBorderVal('1px solid black')
  }


  return (
    <form onSubmit={onFormSubmit} className="input-cont">
      <select value={option} onChange={onOptionChange} className="select" >
        <option className="positive">+</option>
        <option className="negative">-</option>
      </select>
      <input type="text" placeholder="description..." value={description} className={`description`} style={{border:borderDes}} onChange={onDescriptionChange} onFocusCapture={borderChange} onBlur={removeBorder} />

      <input type="number" placeholder="value..." value={value} className={`value`} style={{border:borderVal}} onChange={onValueChange} onFocusCapture={borderChange} onBlur={removeBorder}  />
      
      <button className="button">
        <i className="fa-regular fa-circle-check" ref={iconRef} ></i>
      </button>
    </form>
  )
}


export default connect(null, { getInput }) (Input);




