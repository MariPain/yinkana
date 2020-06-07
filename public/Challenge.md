Challenge 1 (FRONTEND)
Hacer un formulario de registro en HTML que envíe por POST a /signup los siguientes campos y validación en el lado del navegador:
Usuario: texto de 10 a 20 caracteres, que sea un email
Contraseña: texto de 10 a 20 caracteres
Raza: a elegir entre humano, elfo, enano y hobbit
Si no se cumplen las condiciones de validación, se informará al usuario y no se hará el envío de los datos. En caso contrario, se enviarán. (editado) 


Challenge 2 (BACKEND)
Hacer un servidor en Node+Express que recoja una petición por POST en /signup los campos del formulario del paso anterior y haga las mismas validaciones en el lado del servidor.
Si no se cumplen las condiciones de validación, se emitirá una respuesta al navegador que redirija al usuario de nuevo al formulario. En caso contrario, ocurrirán dos cosas:
- Se emitirá una respuesta al navegador que redirija al usuario a /confirmEmail
- Se enviará un email al proporcionado por el usuario. En el cuerpo de dicho email habrá un enlace de confirmación que tendrá este formato:
/checkEmail?token=XXX
Donde XXX será una cadena de caracteres alfanumérica generada aleatoriamente que comprenderá solamente números (del 0 al 9) y/o letras minúsculas (de la a a la z).


Challenge 3 ()
Hacer una vista para /confirmEmail que muestre un mensaje al usuario de confirmación de que se recibieron sus datos, y se le ha enviado un email para que verifique su identidad.
Por otro lado, en el servidor se añadirá el endpoint /checkEmail?token=XXX que recogerá por GET el valor del parámetro token, que lo cotejará con el que le generó aleatoriamente a ese mismo usuario.
Para poder hacer esa comprobación, previamente debió en el tratamiento del endpoint /signup almacenar los datos del mismo (usuario, contraseña, raza y el propio token generado) en una base de datos.
Si el token coincide con el de la base de datos, se enviará otro email al usuario con un mensaje de "Registro confirmado" y un enlace a /login y se eliminará dicho token de la base de datos.


<a href="http:localhost:3000/checkEmail?token=" + id>

var str = "/checkEmail?token="+id;
var result = str.link(`"https://www.w3schools.com"`);
var mailOptions = {
  from: 'arena.thebridge@gmail.com',
  to: email,
  subject: 'Confirmación de correo electrónico',
  text: 'Haz click en el siguiente enlace para confirmar tu correo:'+str
};