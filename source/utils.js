"use strict"

/**
 * @author De Angelis Ferdinando <ferdydeangeliss@gmail.com>
 */

/**
 * Crea un promemoria
 * @param {string} n - nome promemoria
 * @param {Number} o - orario promemoria
 * @param {boolean} s - stato di completamento promemoria
 */
export function CreaPromemoria(n,o,s){
    const nuovoPromemoria = {
        nome:n,
        ora:o,
        stato:s
    };
    return nuovoPromemoria;
}

/**
 *  Controlla se all'interno dell'array è presente un duplicato
 * @param {Array<Object>} promemoria - Array contenente i promemoria
 * @param {string} nome - nome preso da input 
 * 
 * @returns {boolean} true se c'è un duplicato, false se non ci sono duplicati
 */
export function ControllaDuplicato(promemoria, nome) {
    return promemoria.some(p => p.nome === nome);
}

/**
 * Visualizza l'intero array di oggetti con stampa formattata
 * 
 * @param {Array<Object>} promemoria - Array contenente i promemoria
 */
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

/**
 * Filtra i promemoria in base a criteri come nome,ora e stato di completamento
 * 
 * @param {Array<Object>} promemoria - Array contenente i promemoria
 * @param {string} filtra - criterio di filtraggio
 * @returns {Array<Object>} Ritorna l'array ordinato in base al criterio selezionato
 */
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

/**
 * Ricerca del promemoria tramite il nome preso da input
 * @param {Array<Object>} promemoria - Array contenente i promemoria
 * @param {string} n - nome del promemoria da ricercare
 */
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


/**
 * Modifica il promemoria
 * @param {string} n - vecchio nome promemoria
 * @param {*} promemoria - Array contenente i promemoria
 * @param {*} n_mod - nuovo nome promemoria
 * @param {*} o - orario promemoria
 */
export function ModificaPromemoria(n,promemoria,n_mod,o){
    promemoria.forEach(x => {
        if(x.nome===n){
            x.nome=n_mod,
            x.ora=o;
        }
    });
}

/**
 * Rimuove il promemoria tramite il nome preso da input
 * @param {string} n - nome del promemoria da rimuovere
 * @param {Array<Object>} promemoria - Array contenente i promemoria
 */
export function RimuoviPromemoria(n, promemoria) {
    for (let i = promemoria.length - 1; i >= 0; i--) {
        if (promemoria[i].nome === n) {
            promemoria.splice(i, 1);
        }
    }
}

/**
 * Completa l'attività 
 * @param {string} n - nome dell'attività da completare 
 * @param {Array<Object>} promemoria - Array contenente i promemoria
 */
export function CompletaAttivita(n,promemoria){
    promemoria.forEach(x => {
        if(x.nome===n){
            x.stato=true;
        }
    });
}