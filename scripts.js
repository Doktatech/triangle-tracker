function triangle(){
  var a =parseInt(document.getElementById('a').value);
  var b =parseInt(document.getElementById('b').value);
  var c =parseInt(document.getElementById('c').value);
  if (a+b>c && b+c>a && a+c>b) {
    if (a===b && b===c && a===c) {
        alert("Equirateral");
    }else if (a!=b && b!=c && a!=c){
        alert ("Scalene");
    }else{
        alert ("Isosceles");
      }
  }else{
      alert("triangle cant form" );
    }

  }
