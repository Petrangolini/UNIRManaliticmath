class domandaTesto{
 
    constructor(testo,id){
        this.testo=testo;
        this.risposte=[];
        this.idDomanda=id==null?"":id;
    }
    aggiungiRisposta(ris){
        this.risposte.push(ris);
    }
    stringaHTML(idDom){
        let stringa=[
                    '<div class="card card3d" id="'+this.idDomanda+'">',
                '<div class="card-body">',
                   '<h5 class="card-title">'+this.testo+'</h5>',
                    '<p class="card-text">'];
                   
                     
        this.risposte.map((el,index)=>{
            stringa.push('   <span class="partiDiTesto" data-valore="'+el.valore+'" onclick="trovaRispostaDomandaTesto(event,this,\''+this.idDomanda+'\')">'+el.testo+'</span>' );
        });
        stringa.push('<p></div> </div>');
        return stringa.join('');
       
    }

}


class listaDomandaTesto{
    constructor(){
        this.arrayDom=[];
        this.nameID='DomandaTesto';
    }
    aggiungiDomandaTesto(domanda){
        domanda.idDomanda=this.nameID+this.arrayDom.length;
        this.arrayDom.push(domanda);
    }
    mettiLeDomandeMultipleInDiv(divID){
        console.log(this.arrayDom);

        $('#'+divID).remove('ul');

        let ul=$('<ul class="list-group"></ul>');

        for (let i=0;i<this.arrayDom.length;i++){
            
            let li=$('<li class="list-group-item justify-content-between align-items-center senzaBordi"></li>');

            li.append(this.arrayDom[i].stringaHTML(this.nameID+i));
            ul.append(li);
        }
        $('#'+divID).append(ul);
    }

}