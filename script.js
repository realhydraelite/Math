
//the number is to long sometimes.
//it doesnt round up.
function basicMath(){
  var num1=Number(prompt("what is the first number"));
  var num2=Number(prompt("what is the second number"));
  var witch=prompt("what are you doing");
  if(witch=="adding"){
    var adding=num1+num2;
    document.getElementById("adding").innerHTML =adding;
  }else if(witch=="sub"){
    var subtraction=num1-num2;
    document.getElementById("sub").innerHTML = subtraction;
  }else if(witch=="multi"){
    var multiplication=num1*num2;
    document.getElementById("multi").innerHTML = multiplication;
  }else if(witch=="divid"){
    var division=num1/num2;
    document.getElementById("divid").innerHTML =division;
  }
}