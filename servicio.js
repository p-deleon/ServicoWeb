var express = require('express');
var app = express();
const port = process.env.port || 4041
const bodyParser = require("body-parser");

// Soporte para bodies codificados en jsonsupport.
app.use(bodyParser.json());
// Soporte para bodies codificados
app.use(bodyParser.urlencoded({ extended: false })); 


//Array de prueba 
const usuarios = [{'nombre':'Prado','apellido': 'De Leon', 'telefono': '809-213-1234'}]

// Manda el array usarios al iniciar servidor
app.get('/',(req,res) =>{
    res.send(usuarios)
});

// Crea un nuevor Array donde solo muestra los objetos con el nombre especificado
app.get('/:nombre',(req,res) =>{
    const {nombre} = req.params;
    const usuario = usuarios.filter((usuario) => usuario.nombre === nombre)
    res.json({ok:true, usuario })
});

//  Permite mandar los elementos al Array usarios en el servidor 
app.post('/',(req,res) =>{
    const {nombre,apellido,telefono} = req.body;
    usuarios.push({nombre,apellido,telefono});
    res.json({ok:true, usuarios})
});


// corre el servidor en el puerto 4041
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
