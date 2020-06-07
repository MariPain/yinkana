//PREPARNDO MONGODB INFO EN https://eldevsin.site/conexion-a-mongodb-nativamente-y-con-mongoose/

const { MongoClient } = require('mongodb');

// Nombre de bd
const dbUser = 'testDB';
// Conexión URL (estas corriendo en local :D)
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url, {
    useUnifiedTopology: true
});

module.exports = async() => {
    // Conectamos al servidor
    await client.connect();

    return client.db(dbUser); // retornamos la conexión con el nombre de la bd a usar
};