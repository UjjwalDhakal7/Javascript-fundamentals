// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Given is an array of tempratires of one day, calculate the temperature of one day, calculate the temperature amplitude. Kepp in mind that sometimes there might be a sensor error.

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/* 1. understanding a problem
   - What is temperature amplitude? differennce between highest and lowest temperature on the array.
   - How to compute the max and min temperatures? 
   - What does a sensor error look like? What to do pn error? 

   2. Breaking up problems into smaller chunks
   - how to ignore errors?
   - find max value and min value.
   - difference between max and min value.


const calcTempAmplitude = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 0; i <= temperature.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > maxTemp) maxTemp = temps[i];
    if (temps[i] < minTemp) minTemp = temps[i];
  }
  console.log(maxTemp);
  console.log(minTemp);
  return maxTemp - minTemp;
};

const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

// Debugging

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // Fix bug
    value: Number(prompt('Degree Celsius')),
  };
  // Find bug
  console.log(measurement);
  //console.table(measurement);

  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const Kelvin = measurement.value + 273;
  return Kelvin;
};
// Identify bug
console.log(measureKelvin());
*/

// Uding a debugger

const calcTempAmplitude = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 0; i <= temperature.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > maxTemp) maxTemp = temps[i];
    if (temps[i] < minTemp) minTemp = temps[i];
  }
  console.log(maxTemp);
  console.log(minTemp);
  return maxTemp - minTemp;
};

const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);
