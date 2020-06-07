//PARTE DE LUCIA CON MONGOOSE
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/yincana', {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })

// .then(db => console.log("Database is connected"))
//     .catch(err => console.log(err))

// const Schema = mongoose.Schema
//     //const bcrypt = require ('bcrypt-node.js')

// const userSchema = new Schema({
//     email: { type: String, unique: true, lowercase: true },
//     password: { type: String, select: false },
//     raza: String
// })
//---------------------HASTA AQUI--------------



//VENIA COMENTADO
/*userSchema.pre('save',(next) =>{
    let user = this
    if (!user.isModified('password')) return next()

    bcrypt.genSalt(10,(err, salt) =>{
    if (err) return next()

    bcrypt.hash(user.password, salt, null,(err,hash)=>{
        if (err) return next (err)

        user.password=hash
        next()
        })
    })
})*/

module.exports = mongoose.model("user", userSchema)