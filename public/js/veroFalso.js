class veroFalso{

    constructor(testo,risposta){
     this.testo=testo;
     this.risposta=risposta;   
    }
    
}
class arrayDomande{

    constructor(){
        this.arrayD=[];
    }

    aggiugiDomanda(VF){

        this.arrayD.push(VF)
    }
    
    

    mettiLeDomandeInDiv(divID){
    
    $('#'+divID).remove('ul');

    let ul=$('<ul class="list-group"></ul>');
    
    for (let i=0;i<this.arrayD.length;i++){
        
       let cardStr=['<li class="list-group-item justify-content-between align-items-center senzaBordi">',       
        '<div class="card text-center card3d">',
                '<div class="card-body">',
                  '<p class="card-text">'+this.arrayD[i].testo+'</p>',
                  '<a href="#" class="btn btn-outline-primary btn-lg buttonRisp" ',
                  'onclick="verificaRisposta(event,this,true,'+i+')">Vero</a>',
                  '<a href="#" class="btn btn-outline-primary btn-lg buttonRisp"',
                  'onclick="verificaRisposta(event,this,false,'+i+')">Falso</a>',
                '</div>',             
        '</div>',
'</li>']; 

        ul.append(cardStr.join(''));
        
    }

    $('#'+divID).append(ul);
           

    }


}