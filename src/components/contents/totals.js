

export const totals = (all) => {
  if(all.length < 1) return 0; 

  else {
    let sum = 0;
    all.forEach(cur => {
      sum += parseInt(cur.val);
    })
    return sum;
  }
}


export const totalBudget = (inc, exp) => {
  if ( inc.length < 1 && exp.length < 1) return 0;
  
  else {
    let sumInc = 0;
    let sumExp = 0;

    inc.forEach(el => {
      sumInc += parseInt(el.val); 
    })

    exp.forEach(ele => {
      sumExp += parseInt(ele.val) 
    })

    return sumInc - sumExp;
  }
}


export const capitalise = (des) => {
  const arr = des.split(' ');
  const newArr = arr.map(cur => {
    return cur[0].toUpperCase() + cur.slice(1);
  })
  return newArr.join(' ')
}


export const addCommas = (val) => {
  const str = val.toString();
  if (str[0] === '-') {
    const newStr = str.slice(1);
    return `-${workCommas(newStr)}`;
  }

  else {
    return workCommas(str);
  }
}


const workCommas = (str) => {
  if (str.length > 3 && str.length < 7) {
    return `${str.substring(0, str.length - 3)},${str.substring(str.length - 3, str.length)}`
  }

  else if (str.length >= 7 && str.length < 10) {
    return `${str.substring(0, str.length - 6)},${str.substring(str.length - 6, str.length - 3)},${str.substring(str.length - 3, str.length)}`
  }

  else if (str.length >= 10 && str.length < 13) {
    return `${str.substring(0, str.length - 9)},${str.substring(str.length - 9, str.length - 6)},${str.substring(str.length - 6, str.length - 3)},${str.substring(str.length - 3, str.length)}`
  }

  else{
    return parseInt(str);
  }
}








