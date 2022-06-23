    var valor1=document.getElementById("taller-1");
    var valor2=document.getElementById("taller-2");
    var valor3=document.getElementById("taller-3");
    var valor4=document.getElementById("taller-4");
    var valor5=document.getElementById("taller-5");
    var valor6=document.getElementById("taller-6");

function ID_taller1(valor){
    
    if( valor == "taller-1"){
        document.getElementById("result").innerHTML="Taller de Peque&ntildeas Pinceladas";
    }
}
function ID_taller2(valor){
    if(valor=="taller-2"){
        document.getElementById("result").innerHTML="Taller de Canto";

    }

}
function ID_taller3(valor){
    
    if( valor == "taller-3"){
        document.getElementById("result").innerHTML="Taller de Peque&ntildeas Pinceladas Latinoamericana";
    }
}
function ID_taller4(valor){
    if(valor=="taller-4"){
        document.getElementById("result2").innerHTML="Taller de Guitarra";

    }

}
function ID_taller5(valor){
    
    if( valor == "taller-5"){
        document.getElementById("result2").innerHTML="Taller de Bricolaje";
    }
}

function ID_taller6(valor){

    if(valor=="taller-6"){
        document.getElementById("result2").innerHTML="Taller de Atelier";

    }

}

function mostrar_info_online(){
    document.getElementById("tF").style.display="block";
}
function mostrar_info_taller1(){
	document.getElementById("taller-1").style.display='block';
	document.getElementById("taller-2").style.display='none';
	document.getElementById("taller-3").style.display='none';
	document.getElementById("taller-4").style.display='none';
	document.getElementById("taller-5").style.display='none';
	document.getElementById("taller-6").style.display='none';
}
function mostrar_info_taller2(){
	document.getElementById("taller-2").style.display='block';
	document.getElementById("taller-1").style.display='none';
	document.getElementById("taller-3").style.display='none';
	document.getElementById("taller-4").style.display='none';
	document.getElementById("taller-5").style.display='none';
	document.getElementById("taller-6").style.display='none';

}
function mostrar_info_taller3(){
	document.getElementById("taller-3").style.display='block';
	document.getElementById("taller-1").style.display='none';
	document.getElementById("taller-2").style.display='none';
	document.getElementById("taller-4").style.display='none';
	document.getElementById("taller-5").style.display='none';
	document.getElementById("taller-6").style.display='none';
}
function mostrar_info_taller4(){
	document.getElementById("taller-4").style.display='block';
	document.getElementById("taller-1").style.display='none';
	document.getElementById("taller-2").style.display='none';
	document.getElementById("taller-3").style.display='none';
	document.getElementById("taller-5").style.display='none';
	document.getElementById("taller-6").style.display='none';
}
function mostrar_info_taller5(){
	document.getElementById("taller-5").style.display='block';
	document.getElementById("taller-1").style.display='none';
	document.getElementById("taller-2").style.display='none';
	document.getElementById("taller-3").style.display='none';
	document.getElementById("taller-4").style.display='none';
	document.getElementById("taller-6").style.display='none';
}
function mostrar_info_taller6(){
	document.getElementById("taller-6").style.display='block';
	document.getElementById("taller-1").style.display='none';
	document.getElementById("taller-2").style.display='none';
	document.getElementById("taller-3").style.display='none';
	document.getElementById("taller-4").style.display='none';
	document.getElementById("taller-5").style.display='none';
}


function isValidDate(day,month,year) {
    var dteDate;
 
    month=month-1;
 
    dteDate=new Date(year,month,day);
 
    //Devuelva true o false...
    return ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear()));
}

//FUNCIONES DE VALIDACION
function validate_fecha(fecha){
    var valores=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");
 
    if(fecha.search(valores)==0)
    {
        var values=fecha.split("-");
        if(isValidDate(values[2],values[1],values[0]))
        {
            return true;
        }
    }
    return false;
}

function calcularEdad(){
    var fecha=document.getElementById("user_date").value;
    if(validate_fecha(fecha)==true){
        // Si la fecha es correcta, calculamos la edad
        var values=fecha.split("-");
        var dia = values[2];
        var mes = values[1];
        var ano = values[0];
 
        // valores actuales
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth()+1;
        var ahora_dia = fecha_hoy.getDate();
 
        // realizamos el calculo
        edad = (ahora_ano + 1900) - ano;
        if ( ahora_mes < mes ){
            edad--;
        }
        if ((mes == ahora_mes) && (ahora_dia < dia))
        {
            edad--;
        }
        if (edad > 1900)
        {
            edad -= 1900;
        }        
        var meses=0;// calculamos los meses
        if(ahora_mes>mes)
            meses=ahora_mes-mes;
        if(ahora_mes<mes)
            meses=12-(mes-ahora_mes);
        if(ahora_mes==mes && dia>ahora_dia)
            meses=11;
        var dias=0;// calculamos los dias
        if(ahora_dia>dia)
            dias=ahora_dia-dia;
        if(ahora_dia<dia){
            ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
            dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
        }
        document.getElementById("result").innerHTML="La fecha "+fecha+" es correcta";
    }else{
        document.getElementById("result").innerHTML="La fecha "+fecha+" es incorrecta";
    }
}

//FUNCIONES DE VALIDACION
function iniciar1() {
    var boton = document.getElementById("enviar1");
    boton.addEventListener("click", enviarformulario1);
    }

//CHEQUEA SI EL FORMULARIO ES VALIDO O NO
function enviarformulario1() {
    var formulario1 = document.querySelector("form[name='formulario1']");
    var valido1 = formulario1.checkValidity();
          if (valido1) {
               formulario1.submit();
               alert("¡Felicitaciones! La inscripción se realizó con éxito. Le enviaremos un mail con la confirmación");
             } 
         else {
               alert("El formulario no puede ser enviado");
          }
     }
window.addEventListener("load", iniciar1);


function iniciar2() {
    var boton = document.getElementById("enviar2");
       boton.addEventListener("click", enviarformulario2);
    }

function enviarformulario2() {
         var formulario2 = document.querySelector("form[name='formulario2']");
         var valido2 = formulario2.checkValidity();
        if (valido2) {
               alert("¡Felicitaciones! La inscripción se realizó con éxito. Le enviaremos un mail con la confirmación");
               formulario2.submit();

            } 
         else {
            alert("El formulario no puede ser enviado");
          }
     }
window.addEventListener("load", iniciar2);
//Limpiar 1 
function limpiarFormulario1() {
   var boton= document.getElementById("limpiar1");
    boton.addEventListener("click", limpiarformulario1);
}

function limpiarformulario1() {
         var formulario1 = document.querySelector("form[name='formulario1']");
               formulario1.reset();
 }
window.addEventListener("load", limpiarFormulario1);

//Limpiar2
function limpiarFormulario2() {
   var boton= document.getElementById("limpiar2");
    boton.addEventListener("click", limpiarformulario2);
}

function limpiarformulario2() {
         var formulario2 = document.querySelector("form[name='formulario2']");
               formulario2.reset();
 }
window.addEventListener("load", limpiarFormulario2);