function basicMath(){
  var num1=Number(prompt("what is the first number"));
  var num2=Number(prompt("what is the second number"));
  var witch=prompt("what are you doing");
  if(witch=="adding"){
    var adding=num1+num2;
    document.getElementById("endnum").innerHTML =adding;
  }else if(witch=="sub"){
    var subtraction=num1-num2;
    document.getElementById("endnum").innerHTML = subtraction;
    alert(subtraction);
  }else if(witch=="multi"){
    var multiplcation=num1*num2;
    document.getElementById("endnum").innerHTML = multiplcation;
    alert(multiplcation);
  }else if(witch=="divid"){
    var division=num1/num2;
    document.getElementById("endnum").innerHTML =division;
    alert(division);
  }
}