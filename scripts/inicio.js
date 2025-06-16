$(document).ready(function () {
  $("#boton_Enviar").on("click", validarFormulario);
  // $('#boton_Enviar').on('click',function(){
  //     $(this).hide();
  // })
  $("#inputNombre").on("change", validarNombre);
});

function validarFormulario() {
  validarNombre();
  rutValido();
  emailValido($("#inputEmail").val());
}

function validarNombre() {
  if ($("#inputNombre").val() == "") {
    $("#inputNombre").addClass("is-invalid");
  } else {
    $("#inputNombre").removeClass("is-invalid");
  }
}

function rutValido() {
  if (!validaRut($("#inputRut").val())) {
    $("#inputRut").addClass("is-invalid");
  } else {
    $("#inputRut").removeClass("is-invalid");
  }
}

function validaRut(rutCompleto) {
  if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
  var tmp = rutCompleto.split("-");
  var digv = tmp[1];
  var rut = tmp[0];
  if (digv == "K") digv = "k";
  return dv(rut) == digv;
}

function dv(dig_ver) {
  var M = 0,
    S = 1;
  for (; dig_ver; dig_ver = Math.floor(dig_ver / 10))
    S = (S + (dig_ver % 10) * (9 - (M++ % 6))) % 11;
  return S ? S - 1 : "k";
}

function emailValido(email) {
  if (email == "") {
    $("#inputEmail").addClass("is-invalid");
  } else {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $("#inputEmail").addClass("is-invalid");
    }else{
        $("#inputEmail").removeClass("is-invalid");
    }
  }
}
