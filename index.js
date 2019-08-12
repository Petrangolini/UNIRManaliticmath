//nodemon index.js
const express=require('express');
const WolframAlphaAPI = require('wolfram-alpha-api');

const Datastore=require('nedb');

const app=express();

const waApi = WolframAlphaAPI('JX3KVL-X7T4X4P5W7');



app.listen(3000,()=>console.log('listening at 3000'));

app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

const database=new Datastore('database.db');
database.loadDatabase();

waApi.getFull('y\'\' +y=0').then((data)=>{
   
});



app.post('/api',(req,res)=>{
    
    waApi.getFull('lim (sin x - x)/x^3 as x->0').then((data)=>{
        res.json(data);
    });
});



app.post('/dammidati',(req,res)=>{
    let data=req.body;
    database.find({
        campo:data.campo,
//        argomento:data.argomento,
        }, (err,dati)=>{
            res.json(dati);
        });
    

});


//inserisci i dati
app.post('/inseriscidati',(req,res)=>{
    let data=req.body;

    database.count({ argomento: data.argomento, campo:data.campo }, function (err, count) {
        
        data.indice=count;
        database.insert(data);
        //salva i dati e dopo ritornali tutti
        database.find({
            campo:data.campo,
            argomento:data.argomento,
            }, (err,dati)=>{
                res.json(dati);
        });

    });

    
});

app.delete('/cancelladato',(req,res)=>{
    let data=req.body;
    database.remove({_id:data._id},{},function(err,numRemoved){ 

        database.find({
            campo:data.campo,
            argomento:data.argomento,
            }, (err,dati)=>{
                res.json(dati);
            });
        
      });
});
// modifica indice
app.post('/modificaindice',(req,res)=>{
    let data=req.body;

    for(let el of data){

        database.update({_id:el._id},{$set:{indice:el.indice}},{},()=>{

        }); 

    }
    


});
