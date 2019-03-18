/*function numbers(el) {
  document.getElementById('screen').value = return el;
}
*/

var total;
var firstNum;
var displayScreen = document.getElementById('screen');
var currentNumber;

displayScreen.value = '0';

function updateScreen(el) {
      if (displayScreen.value === '0') {
        displayScreen.value = el.value;
    } else {
      displayScreen.value = displayScreen.value + el.value;
    }
    currentNumber = Number(displayScreen.value)
}
