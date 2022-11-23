import React, { useState } from 'react';

import Header from '../header/Header';
import Contents from '../contents/Contents';
import './App.css';
import Input from '../input/Input';

const App = () => {
  const [data, setData] = useState([])


  const getInput = (des, val, opt) => {
     setData([...data, {des, val, opt}]);
    }
    
    console.log(data);

  return (
    <div className='container'>
        <header className='head'>
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

export default App;