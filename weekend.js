let day = 'Saturday';

day = day.toLocaleLowerCase();
let daysToSat;

switch (day) {
  case 'sunday':
    daysToSat = 6;
    break;
  case 'monday':
    daysToSat = 5;
    break;
  case 'tuesday':
    daysToSat = 4;
    break;
  case 'wednesday':
    daysToSat = 3;
    break;
  case 'thursday':
    daysToSat = 2;
    break;
  case 'friday':
    daysToSat = 1;
    break;
  case 'saturday':
    daysToSat = 0;
    break;
  default:
    daysToSat = null;
    break;
}

if (daysToSat === null) {
  console.log('Unknown day!');
} else {
  if (daysToSat === 0) {
    console.log('It\'s Saturday!!!');
  } else {
    console.log(`There are ${daysToSat} days to Saturday.`);
  }
}

