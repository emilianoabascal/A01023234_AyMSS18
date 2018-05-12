var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var neo4j = require('neo4j-driver').v1;
var cors = require('cors');



app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

// Bases de datos =================================================
var driver = neo4j.driver('bolt://neo4j',neo4j.auth.basic('neo4j','test'));
var session = driver.session();

// Cors ===============================================================
var whitelist = ['http://192.168.100.28:4200','http://localhost:4200', 'http://107.170.214.237', 'http://localhost:8080']
var corsOptions = {
  origin: function (origin, callback) {
    //console.log("orgine: ",origin);
    if (origin == undefined || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Ruta no permitida por los CORS'))
    }
  },
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// Peticiones / Rutas ==================================================
app.get('/',function(req,res){
  session
  .run('match (x:Primas) return x')
  .then(function(result){
    //console.log(result.records);
    res.status(200).send(result.records);
    session.close();
  })
  .catch(function(result){
     console.log(err);
  })
});
app.get('/productoElaborados',function(req,res){
    session
    .run('MATCH (n:ProductoElaborado) RETURN n ')
    .then(function(result){
      res.status(200).send(result.records);
      session.close();
    })
    .catch(function(result){
       console.log(err);
    })
  });

  app.put('/eliminarProductoElaborados',function(req,res){
    var nombre = req.body.nombre;
      session
      
      .run('Match (x:ProductoElaborado{nombre:"' + nombre + '"}) optional match (x)-[r]->() delete x, r')
      .then(function(result){
        res.status(200).send(result.records);
        session.close();
      })
      .catch(function(result){
         console.log(err);
      })
    });

app.put('/elaborarProducto',function(req,res){
    var nombre = req.body.nombre;
    var cont = 0;
    session
    .run('MATCH (:Receta { nombre:"' + nombre + '"})-[r]->(Primas) RETURN Primas.cantidad-r.cantidad,Primas.nombre')
    .then(function(result){

        result.records.forEach(function(records){
            if(records._fields[0]>0)
            {
                //break;
                cont++
            }
            else{
                //cont++
            }
            if (cont == result.records.length){
                result.records.forEach(function(records)
                {
                    session
                    .run('MATCH (n { nombre:"'+records._fields[1]+'" }) SET n.cantidad='+records._fields[0]+' RETURN n.cantidad')
                    .then(function(result2){

                    })
                    .catch(function(result){
                       console.log(err);
                    })
                });
            }
        });
        session
        .run('MATCH (n:ProductoElaborado { nombre:"'+nombre+'" }) SET n.cantidad= n.cantidad+1 RETURN n.cantidad')
        .then(function(result){
            console.log(result);
        })
        .catch(function(result){
            console.log(err);
        })
      res.status(200).send(result.records.keys);
      session.close();
    })
    .catch(function(result){
       console.log(err);
    })
  });


app.get('/fechas',function(req,res){

    var d = new Date();
    var Y = d.getFullYear();
    var M =d.getMonth();
    var D =d.getDate();
    M++;
    var fechaA=( '' + D + '-' + M + '-' + Y + '' )
    session
    .run('MATCH (n:Primas) RETURN n')
    .then(function(result){

        result.records.forEach(function(records){

            if (fechaA == records._fields[0].properties.fecha)
            {

                session
                .run('MATCH (n { nombre:"'+records._fields[0].properties.nombre+'" }) SET n.cantidad="0" RETURN n.cantidad')
                .then(function(result){

                })
                .catch(function(result){
                   console.log(err);
                })

            }

        });
      res.status(200).send(result.records.keys);
      session.close();
    })
    .catch(function(result){
       console.log(err);
    })
  });

app.get('/recetas',function(req,res){
  session
  .run('MATCH (n:Receta) return n')
  .then(function(result){
    res.status(200).send(result.records);
    session.close();
  })
  .catch(function(result){
     console.log(err);
  })
});

app.post('/agregarReceta',function(req,res){
    var nombre = req.body.nombre;
    var ingrediente = req.body.ingrediente;
    var cantidad = req.body.cantidad;

    console.log(nombre);
    console.log(ingrediente);
    var query = 'CREATE (x:Receta {nombre:"' + nombre + '",ingrediente:"' + ingrediente + '",cantidad:"' + cantidad + '"}) RETURN x';

    session
    .run(query)
    .then(function(result){
        for(var i = 0; i < ingrediente.length;i++){
            session
                .run('match(x:Primas{nombre:"' + ingrediente[i] + '"}),(y:Receta{nombre:"' + nombre + '"}) create(y)-[z:Requiere{cantidad:toFloat("' + cantidad[i] + '")}]->(x)  RETURN x,y,z')
                .then(function(result){
                    console.log(result.records);
                })
                .catch(function(result){
                    console.log(err);
                })
        }
        session
        .run('create(v:ProductoElaborado{nombre: "' + nombre + '", cantidad :toFloat(0),ingedientes: "' + ingrediente + '"})<-[z:Tiene]-(n) return n,v,z')
        .then(function(result){
            //console.log(result);
        })
        .catch(function(result){
            console.log(err);
        })
    res.send(ingrediente);
    })
    .catch(function(result){
       console.log(err);
    })

});
app.put('/deleteReceta',function(req,res){
    var nombre = req.body.nombre;
    //console.log(req);
    var query = 'Match (x:Receta{nombre:"' + nombre + '"}) optional match (x)-[r]->() delete x, r';
    //console.log(req);
    session
        .run(query)
        .then(function(result){
            res.send(req.body);
        })
        .catch(function(result){
           console.log(err);
        })
});

app.put('/deleteProducto',function(req,res){
    var nombre = req.body.nombre;

    var query = 'Match (x:Primas{nombre:"' + nombre + '"}) detach delete x';
    //console.log(req);
    session
        .run(query)
        .then(function(result){
            res.send(req.body);
        })
        .catch(function(result){
           console.log(err);
        })
});

app.put('/cantidadProducto',function(req,res){
    var nombre = req.body.nombre;
    var cantidad = req.body.cantidad;

    var query = 'MATCH (n { nombre:"'+nombre+'" }) SET n.cantidad="'+cantidad+'" RETURN n.cantidad';
    //console.log(req);
    session
        .run(query)
        .then(function(result){
            res.send(req.body);
        })
        .catch(function(result){
           console.log(err);
        })
});

app.post('/addPrima',function(req,res){
        var departamento = req.body.departamento;
        var unidad = req.body.unidad;
        var nombre = req.body.nombre;
        var cantidad = req.body.cantidad;
        var precio = req.body.precio;
        var fechaCad = req.body.fechaCad;

        var query = 'match (x:Departamento {nombre:"' + departamento +'"}), (y:Unidad {nombre:"'+unidad+'"}) create (n:Primas {nombre:"'+nombre+'", cantidad:toFloat('+cantidad+'), precio:toFloat('+precio+')})-[r:Pertenece]->(x), (n)-[s:Usa]->(y) RETURN x,y,r';
        session
            .run(query)
            .then(function(result){
                res.status(200).send(result.records);
            })
            .catch(function(result){
               console.log(err);
            })
});

app.post('/modPrima',function(req,res){
        var departamento = req.body.departamento;
        var unidad = req.body.unidad;
        var nombre = req.body.nombre;
        var nombreNew = req.body.nombreNew;
        var cantidad = req.body.cantidad;
        var precio = req.body.precio;
        var fechaCad = req.body.fechaCad;
        console.log(req.body)
        var query = 'MATCH (x:Prima {nombre:"' + nombreNew +'"}) SET  x.nombre = "'+nombre+'", x.unidad = "'+unidad+'", x.cantidad='+cantidad+', x.precio= '+precio+', x.departamento ="'+departamento+'" return n';
        session
            .run(query)
            .then(function(result){
                res.status(200).send(result.records);
            })
            .catch(function(result){
               console.log(err);
            })
});



app.listen(3000);
console.log('servidor node port 3000');

 module.exports=app;