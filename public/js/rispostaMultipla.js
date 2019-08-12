class rispostaMultipla{
 
    constructor(testo){
        this.testo=testo;
        this.risposte=[];
    }
    aggiungiRisposta(ris){
        this.risposte.push(ris);
    }
    stringaHTML(idDom){
        let stringa=[
    '<li class="list-group-item justify-content-between align-items-center senzaBordi">',
        ,'<div class="card card3d" id="'+idDom+'">',
            '<div class="card-body">',
                '<p class="card-text">'+this.testo+'.</p>',
            '</div>',
            '<ul class="list-group">'];
        this.risposte.map((el,index)=>{
            stringa.push('   <a href="#" class="list-group-item list-group-item-action" data-valore="'+el.valore+'" onclick="controlloRispostaMultipla(event,\''+idDom+'\',this)">'+el.testo+'</a>');
        });
        stringa.push('</ul> </div><li>');
        return stringa.join('');
       
    }

}

class listaDomandeMultiple{
    constructor(){
        this.arrayDom=[];
        this.nameID='DomandaMultipla';
    }
    aggiungiQuesitoMultiplo(domanda){
        this.arrayDom.push(domanda);
    }
    mettiLeDomandeMultipleInDiv(divID){
        console.log(this.arrayDom);

        $('#'+divID).remove('ul');

        let ul=$('<ul class="list-group"></ul>');
        
        for (let i=0;i<this.arrayDom.length;i++){
            ul.append(this.arrayDom[i].stringaHTML(this.nameID+i));
        }
        $('#'+divID).append(ul);
    }

}