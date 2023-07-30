const getSleepHours = day =>{
  if(day === 'monday'){
    return 6;
  }else if(day === 'tuesday'){
    return 6;
  }else if(day === 'wednsday'){
    return 5;
  }else if(day === 'thursday'){
    return 5;
  }else if(day === 'friday'){
    return 8;
  }else if(day === 'saturday'){
    return 9;
  }else if(day === 'sunday'){
    return 9;
  }
}

const getActualSleepHours = () =>{
  var sum = getSleepHours('monday') +
          getSleepHours('tuesday') +
          getSleepHours('wednsday') +
          getSleepHours('thursday') +
          getSleepHours('friday') +
          getSleepHours('saturday') +
          getSleepHours('sunday');
    return sum;
}
console.log(getActualSleepHours());

const getIdealSleepHours = () =>{
  const idealHours = 8;
  return idealHours * 7;
} 
console.log(getIdealSleepHours());

const calculateSleepDebt = () =>{
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();

  if(actualSleepHours < idealSleepHours){
    console.log('You need to get some rest')
  }else if (actualSleepHours > idealSleepHours){
    console.log('You sleep more than you should')
  }else{
    console.log('Your sleep is just fine')
  }
}
console.log(calculateSleepDebt());