function isLetter (char) {
  return char.length === 1 && char.match(/[a-z]/i);
}


function enviar () {
  var campos = ["Nombre","Apellido","email","Telefono","Edad"];
  var Nombre = document.getElementById("Nombre").value;
  var Apellido = document.getElementById("Apellido").value;
  var Telefono = document.getElementById("Telefono").value;
  var Mail = document.getElementById("Mail").value;
  var Edad = document.getElementById("Edad").value;
  var valido=true;
  for (var i = 0; i <Nombre.length; i++) {
    if ( !isLetter(Nombre[i]) ) {
      valido= false;
      alert("el campo nombre tiene caracteres incorrectos... solo puede tener letras de la la A a la Z");
      return;
    }
  }
  for (var i = 0; i <Apellido.length; i++) {
    if ( !isLetter(Apellido[i]) ) {
      valido= false;
      alert("el campo apellido tiene caracteres incorrectos... solo puede tener letras de la la A a la Z");
      return;
    }
  }
  if (Edad <= 20){
    alert("necesitamos que seas mayor a 21")
    valido = false;
  }
  
  for(var i = 0; i < telefono.length; i++){
    if (isNaN(telefono[i])){
      alert("El telefono no puede contener caracteres");
      valido = false;
      return;
    }
    elif(telefono.length!= 8 && telefono.length!=12){
      alert("El telefono debe tener 8 o 12 numeros");
      valido = false;
      return;
    }
  }

  for (var i = 0; i < campos.length; i++) {
    var valorCampo = document.getElementById(campos[i]).value;

    if (valorCampo == null || valorCampo.length == 0) {
      alert("tenés que completar el campo " + campos[i]);
      return;
    }
  }
}
  
  