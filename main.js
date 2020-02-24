/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(arr){
  arr.push('Colin');
}
function addMeToStart(arr){
  arr.unshift('Colin');
}
function changeLast(arr, num){
arr.pop();
arr.push(num);
}

function changeAllValuesTo(arr,value){
  for (let i = 0; i < arr.length; i++){
arr[i] = value;
    }
  }
function oddOrEven(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
    arr[i] = 'even';
        } else {
          arr[i]= 'odd';
        }
      }
}

function changeNextThreeToValue(start1,arr1,value1){
  for (let i = 0; i < arr1.length; i++){
    if (i >= start1 && i < start1 + 3){
      arr1[i] = value1;}
    }
  }

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}