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
        console.log("\n");
    });
}

export function FiltraPromemoria(promemoria, filtra) {
    switch (filtra){
        case '1':{
            promemoria.sort((a, b) => a.nome.localeCompare(b.nome));
            break;
        }
        case '2': {
            promemoria.sort((a, b) => {
                const orarioA = a.ora.split(':');
                const orarioB = b.ora.split(':');
                
                const oraA = parseInt(orarioA[0]);
                const oraB = parseInt(orarioB[0]);
                
                if (oraA !== oraB) {
                    return oraA - oraB;
                }
                
                const minutiA = parseInt(orarioA[1]);
                const minutiB = parseInt(orarioB[1]);
                return minutiA - minutiB;
            });
                break;
        }
        case '3':{
            promemoria.sort((a, b) => Number(b.stato) - Number(a.stato));
            break;
        }
    }
    
    promemoria.forEach(x => {
        console.log(`Nome promemoria: ${x.nome}`);
        console.log(`Ora: ${x.ora}`);
        console.log(`Stato: ${x.stato ? 'Completato' : 'Non completato'}`);
        console.log("\n"); 
    });

    return promemoria;
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

export function RimuoviPromemoria(n, promemoria) {
    for (let i = promemoria.length - 1; i >= 0; i--) {
        if (promemoria[i].nome === n) {
            promemoria.splice(i, 1);
        }
    }
}

export function CompletaAttivita(n,promemoria){
    promemoria.forEach(x => {
        if(x.nome===n){
            x.stato=true;
        }
    });
}