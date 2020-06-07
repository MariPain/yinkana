const http = require('http');
const express = require('express');
const app = express();
const connection = require('./connection');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require("crypto");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

const init = async() => {
    const db = await connection(); // obtenemos la conexión

    await db.collection('user').insertOne({ // insertamos un usuario
        name: 'devsin.site'
    });
};

init();

function checkEmail(emailOrNot) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if (!regexEmail.test(emailOrNot)) {
        return false;
    }
    return true;
}

function checkPassword(passOrNot) {
    if (passOrNot.length < 10 || passOrNot.length > 20) {
        return false;
    }

    return true;

}

app.post('/signup', (req, res) => {
    let subject = "Confirmación de correo electrónico"
    let id = crypto.randomBytes(20).toString('hex');
    let str = "http://localhost:3000/checkEmail?token=" + id;
    let text = "Haz click en el siguiente enlace para confirmar tu correo:" + str
    let html = '<a href="http://localhost:3000/checkEmail?token=' + id + '">HAZ CLICK</a>';
    let email = req.body.email
    let password = req.body.password
    console.log(req.body.password)
    if (!checkEmail(email)) {
        res.redirect('/index.html')
            // redirige a Index.html
    } else if (!checkPassword(password)) {
        res.redirect('/index.html')
            // redirigir a /index.html ...
    } else {
        sendMail(email, subject, text, html)
        res.redirect('/confirmEmail')
    }
});

function sendMail(email, subject, text, html) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pedraza.pruebas.thebridge@gmail.com',
            pass: 'mailparapruebas'
        }
    });

    let mailOptions = {
        from: 'pedraza.pruebas.thebridge@gmail.com',
        to: email,
        subject: subject,
        text: text,
        html: html
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else
            console.log('Email sent: ' + info.response);
    });
}


app.get('/confirmEmail', (req, res) => {
    res.redirect('confirmEmail.html')
})

// res.redirect('/confirmEmail')
function confMsg() {
    alert("Tus datos se han recibido correctamente, comprueba el correo para activar la cuenta");
};

app.get('/checkEmail', (req, res) => {
    let token = req.query.token
})

// Otras validaciones
// FUNCION COMPRUEBA MAIL

//probando la de Silv

server.get('/checkEmail', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'confirmed.html'))

    MongoClient.connect(databaseUrl, (err, database) => {
        let exercice = database.db('exercice');
        let comparetoken = req.query.token

        let member = exercice.collection('sectamembers').findOne({ "token": comparetoken })

        if (member) {
            sendMailVerified(member.email, `${domain}/Login`)
            exercice.collection('sectamembers').delete(member.token)
        } else {
            console.log('No puedes acceder a los datos');
            res.redirect('/');
        }
        database.close()
            // [4509405950, 589934859043]

    });
})

// function checkData(usuario, contraseña, raza, token) {
//     //if(existe usuario en bd)
//     //if(existe contraseña en db)
//     //if(existe raza en db)
//     //if(existe token en db)
//     // borrar token de bd

// }
app.listen(3000, function() {
    console.log('Servidor web escuchando en el puerto 3000');
});