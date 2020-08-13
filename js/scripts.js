function triCompare(num1, num2, num3) {
  let triangle;

  if (num1 === num2 && num1 === num3) {
    triange = "a equilateral triangle";
  } else if (num1 + num2 <= num3 || num1 + num3 <= num2 || num2 + num3 <= num1) {
    triangle = "not a triangle";
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
     triangle = "isosceles triangle";
  } else {
    triangle = "a scalene triangle";
  }
  
  return triangle;
};

$(document).ready(function() {
  $("#userInput").submit(function() {
    const length1 = parseInt($("input#length1").val());
    const length2 = parseInt($("input#length2").val());
    const length3 = parseInt($("input#length3").val());

    let triType = triCompare(length1, length2, length3);

    $("#triangle").text(triType);
    $("userAnswer").show();

    event.preventDefault;
  });

});