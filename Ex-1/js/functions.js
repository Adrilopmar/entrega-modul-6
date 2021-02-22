function veuremes(id){
    if(id=="mes"){
      document.getElementById("desplegar").style.display="block";
      document.getElementById("mes").style.display="none";
      // Document.getElementById("imghistoria").style.alignSelf="center";
    }
    else{
      document.getElementById("desplegar").style.display="none";
      document.getElementById("mes").style.display="inline";
      // Document.getElementById("imghistoria").style.alignSelf="flex-start";
    }
  }
$('#myModal').on('shown.bs.modal', function () {
$('#myInput').trigger('focus')
})
/* funcio finestra modal*/
function registre(id){
    if(id=="aqui"){
      document.getElementById("UsuariNou").style.display="block";
      document.getElementById("aqui").style.display="none";
      
    }
    else{
      document.getElementById("UsuariNou").style.display="none";
      document.getElementById("aqui").style.display="block";
      
    }
  }