"use strict"

export function CreaPromemoria(n,o,s){
    const nuovoPromemoria = {
        nome:n,
        ora:o,
        stato:s
    };
    return nuovoPromemoria;
}

export function VisualizzaPromemoria(promemoria){
    promemoria.forEach(x => {
        console.log(`Nome promemoria: ${x.nome}`);
        console.log(`Ora: ${x.ora}`);
        if(x.stato){
            console.log(`Stato: Completato`);
        }else{
            console.log(`Stato: Non completato`);
        }
    });
}

export function RicercaPromemoria(promemoria,n){
    promemoria.forEach(x => {
        if(x.nome===n){
        console.log(`Nome promemoria: ${x.nome}`);
        console.log(`Ora: ${x.ora}`);
        if(x.stato){
            console.log(`Stato: Completato`);
        }else{
            console.log(`Stato: Non completato`);
        }
        }
        console.log('\n');
    });
}

export function ModificaPromemoria(n,promemoria,n_mod,o){
    promemoria.forEach(x => {
        if(x.nome===n){
            x.nome=n_mod,
            x.ora=o;
        }
    });
}