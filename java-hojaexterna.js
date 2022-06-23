
/*Funciones pag principal*/
function mostrar_e(){
  document.getElementById("mostrar").style.display="block";
}
 
function ocultar_e(){
  document.getElementById("mostrar").style.display="none";

}

const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const form = document.getElementById("formulario-contacto")
const parrafo = document.getElementById("warnings")

        form.addEventListener("submit", e=>{
          e.preventDefault() 
          let warnings = ""
          let entrar = false
          let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ 
           parrafo.innerHTML = ""
    if(nombre.value.length<3){
      warnings += '- El nombre ingresado no es valido -<br>'
      entrar = true;
    }
    if(!regexEmail.test(email.value)){
     warnings += '- El email ingresado no es valido -<br>'
      entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        form.submit()      
    }
})
