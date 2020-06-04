Challenge 1 (FRONTEND)
Hacer un formulario de registro en HTML que envíe por POST a /signup los siguientes campos y validación en el lado del navegador:
Usuario: texto de 10 a 20 caracteres, que sea un email
Contraseña: texto de 10 a 20 caracteres
Raza: a elegir entre humano, elfo, enano y hobbit
Si no se cumplen las condiciones de validación, se informará al usuario y no se hará el envío de los datos. En caso contrario, se enviarán. (editado) 


Challenge 1 (BACKEND)
Hacer un servidor en Node+Express que recoja una petición por POST en /signup los campos del formulario del paso anterior y haga las mismas validaciones en el lado del servidor.
Si no se cumplen las condiciones de validación, se emitirá una respuesta al navegador que redirija al usuario de nuevo al formulario. En caso contrario, ocurrirán dos cosas:
- Se emitirá una respuesta al navegador que redirija al usuario a /confirmEmail
- Se enviará un email al proporcionado por el usuario. En el cuerpo de dicho email habrá un enlace de confirmación que tendrá este formato:
/checkEmail?token=XXX
Donde XXX será una cadena de caracteres alfanumérica generada aleatoriamente que comprenderá solamente números (del 0 al 9) y/o letras minúsculas (de la a a la z).