// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');
// Consulta SQL.
//var q1 = 'INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) VALUES ("Diego", "A01197185", "A01197185@tec.mx", "ITI"), ("Xavier", "A01197195", "A01197195@tec.mx", "IME")';
//var q1 = 'UPDATE Alumnos SET Nombre = "Mauricio" WHERE Id = 2';
var q1 = 'DELETE FROM Alumnos WHERE Id = 4';
var q2 = 'SELECT * FROM Alumnos';

// Parámetros de conexión a la base de datos.
var con = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "123",
  database : 'parcial2_a01197185'
});

// Funcion que nos permite comprobar la conexión a la base de datos.
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// Funcion que nos devolverá resultados de la base de datos.
con.connect(function(err) {
  if (err) throw err;
  con.query(q1, function (err, bucl1) {
    if (err) throw err;
    // Bucle que recore los resultados y pinta en consola.
    for(i=0; i<bucl1.length; i++){
    	console.log(bucl1[i]);
    }
    });
  con.query(q2, function (err, bucl2) {
    if (err) throw err;
    // Bucle que recore los resultados y pinta en consola.
    for(i=0; i<bucl2.length; i++){
    	console.log(bucl2[i]);
    }
  });
});