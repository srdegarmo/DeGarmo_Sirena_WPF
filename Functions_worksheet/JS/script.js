
 /*
Sirena DeGarmo
SDI Section #3
Functions worksheet
1/28/2015

 alert("Testing to see if the JS file is attached to the html.");

 //EXAMPLE - calculate area of a rectangle
 var width = 5;
 var height = 6;
 var area = calculateArea(width, height);
 console.log("The area of the rectangle is " + area);

 function calculateArea(w, h){
  return w*h;
 }
*/

 //Calculate the circumference of a circle
 //Define variables for givens - pi & radius
 var pi = 3.14;
 var radius = 2;
 //use variable to create a storage bin for the function's result
 var circumference = calcCircumference(pi, radius);
 console.log("The circumference of the circle is " + circumference);
 //call calcCircumference function
 function calcCircumference(pi, radius){
  //tell machine what data to give us from the function
  return pi*radius*2;
 }

//Calculate how many bee stings it would take to kill an animal based on the animal's weight