function triangle(){
  var a =parseInt(document.getElementsByName('lengthOne').value);
  var b =parseInt(document.getElementsByName('lengthTwo').value);
  var c =parseInt(document.getElementsByName('lengthThree').value);{
    if (a===b && b===c) {
      alert(This is an Equirateral Triangle);

    } else {if (a===b || a===c || b===c ) {

      alert(This is an Isosceles Triangle);

    }else {
      alert (This triangle is Scalene);

    }

    }
  }
}
