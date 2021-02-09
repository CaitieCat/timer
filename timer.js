const times = process.argv.slice(2);

for (let i = 0; i < times.length; i++){
  times[i] = (parseInt(times[i]));
  if(times[i] < 0){

  } else if (Number.isInteger(times[i]) === false){
  } else {
  setTimeout(() =>{
  process.stdout.write('.');  
  }, times[i]);
  }
};