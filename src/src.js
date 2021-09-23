
/* document.getElementById('formFile').onchange=function(e){
    const x = e.target.files[0].name.split(".");
    console.log(x[x.length-1]);
    if(x[x.length-1] == 'png' ||  x[x.length-1] == 'jpg' ||  x[x.length-1] == 'jpeg'){
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function(){
            image = document.querySelector('#jaja');
            image.src = reader.result;
            image.style.height = '250px';
        }
    }
    else
    {
        e.target.type = '';
        e.target.type = 'file';
        alert("Solo se aceptan formatos PNG, JPEG o JPG");
    }
} */ 

//valida formato
function validate(input) {
    debugger;
    var validExtensions = ['jpg','png','jpeg']; //array of valid extensions
    var fileName = input.files[0].name;
    var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
    if ($.inArray(fileNameExt, validExtensions) == -1) {
        input.type = ''
        input.type = 'file'
        $('#user_img').attr('src',"");
        alert("Solo se aceptan formatos: "+validExtensions.join(', '));
    }
    else{
        if (input.files && input.files[0]) {
            var filerdr = new FileReader();
            filerdr.onload = function (e) {
                $('#user_img').attr('src', e.target.result);
            }
            filerdr.readAsDataURL(input.files[0]);
        }
    }
}
//cargar imagen
function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
}

//validar igualdad contraseñas
var check = function() {
    if (document.getElementById('password').value == document.getElementById('ConfirmarPassword').value) {
      document.getElementById('messageconfirmar').style.color = 'green';
      document.getElementById('messageconfirmar').innerHTML = 'Coinciden';
    } else {
      document.getElementById('messageconfirmar').style.color = 'red';
      document.getElementById('messageconfirmar').innerHTML = 'No Coinciden';
    }
}

//validar formato
const contraseña = document.getElementById('password');
var checkContraseña = function(){
    var formato = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;
    if (contraseña.value.match(formato)) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Formato válido';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Formato inválido';
    }

    if (document.getElementById('password').value == document.getElementById('ConfirmarPassword').value) {
        document.getElementById('messageconfirmar').style.color = 'green';
        document.getElementById('messageconfirmar').innerHTML = 'Coinciden';
      } else {
        document.getElementById('messageconfirmar').style.color = 'red';
        document.getElementById('messageconfirmar').innerHTML = 'No Coinciden';
      }
}
