var previousNumber;
var screen = document.getElementById('screen');

screen.value = '0';


function displayScreen(el) {
 //Display 'this' number on screen
 screen.value === '0' ? screen.value = el.value : screen.value = screen.value + el.value;

 //make screen value a number and store it to previousNumber
 previousNumber = Number(screen.value);
}

document.querySelector('.add').addEventListener('click', function() {
  //display plus sign in screen
  screen.value = screen.value + this.value;
})
