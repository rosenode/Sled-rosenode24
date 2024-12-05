const getSleepHours = day => {
    if (day === 'monday') {
     return 8;
    } if (day === 'tuesday') {
     return 8;
    } if (day === 'wednesday') {
     return 8;
    } if (day === 'thursday') {
     return 8;
    } if (day === 'friday') {
     return 8;
    } if (day === 'saturday') {
     return 8;
    } if (day === 'sunday') {
     return 8;
    }
   }
   
   const getActualSleepHours = () => {
     return getSleepHours('monday') +
     getSleepHours('tuesday') +
     getSleepHours('wednesday') +
     getSleepHours('thursday') +
     getSleepHours('friday') +
     getSleepHours('saturday') +
     getSleepHours('sunday');
   }
   
   const getIdealSleepHours = () => {
     const idealHours = 7;
       return idealHours * 7
   }
   
   const calculateSleepDebt = () => {
     const actualSleepHours = getActualSleepHours();
     const idealHours = getIdealSleepHours();
     if (actualSleepHours === idealHours) {
       console.log('You got the perfect amount of sleep.');
     } if (actualSleepHours > idealHours) {
       console.log('You got ' + (actualSleepHours - idealHours) + ' hours of sleep more than what is ideal this week. You got more sleep than you needed.');
     } else {
       console.log('You got ' + (idealHours - actualSleepHours) + ' hours less of sleep. You should get some rest.');
     }
     }
   
   calculateSleepDebt()


let OutputDiv = document.getElementById("OutputDiv");
let theCalculation = calculateSleepDebt();
OutputDiv.innerHTML = `<p>${theCalculation}</p>`;