/*function colorize() {
    var element = document.getElementById("hello");
    element.style.backgroundColor='#0000FF';
    element.style.backgroundColor='#FF00BF';
    element.style.color='white';}*/
let myColors = ['red', 'blue','Green','Yellow','white'];
let i =0;              
    function clickMe(){
     
      $('.hello').css("background-color", myColors[i++]);
    }

         
        