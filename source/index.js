"use strict"

/**
 * @author De Angelis Ferdinando <ferdydeangeliss@gmail.com>
 */

/**
 * Importa le funzioni dal file utilis.js
 * @module utils
 */
import * as f from './utils.js'

/**
 * Importa il modulo prompt-sync per l'input dell'utente
 * @module prompt-sync 
 */
import promptSync from 'prompt-sync'

const input=promptSync();

/**
 * Array che contiene i promemoria
 * @type {Array<Object>}
 */
let promemoria=[];

/**
 * Proprietà dell'oggetto promemoria
 * @type {string} 
 * @type {Number} 
 * @type {boolean}
 */
let nome,ora,stato;

let trovato=false;

let scelta;
do{
    console.log("Menù: ");
    console.log("1)Crea promemoria\n2)Visualizza promemoria\n3)Ricerca promemoria\n4)Modifica promemoria\n5)Rimuovi promemoria\n6)Completa attività\n0)Esci");
    scelta=input(":");
    console.log("\n");

    switch(scelta){
        case '1':{
            let ris,n_rin;
            nome=input("Dai un nome al promemoria: ");
            ora=input("A che ora devo ricordartelo? ");
            stato=false;

            /**
             * Controlla se il promemoria creato è già presente nell'array
             */
            if (!f.ControllaDuplicato(promemoria, nome)) {
                promemoria.push(f.CreaPromemoria(nome,ora,stato));
            } else {
                /**
                 * Chiede all'utente se vuole rinominarlo
                 */
                console.log("Promemoria con questo nome già esistente!");
                console.log("Vuoi rinominarlo?");
                ris=input("si/no: ");

                if(ris === "si"){
                    /**
                     * Crea il promemoria con il nuovo nome
                     */
                    n_rin=input("Dai un nome al promemoria: ");
                    promemoria.push(f.CreaPromemoria(n_rin,ora,stato));
                }
                else if(ris === "no"){
                    console.log("Il promemoria non è stato creato perchè è duplicato.")
                }
            }
        
            console.log("\n");

            break;
        }
        case '2':{
            let ris,filtra;
            f.VisualizzaPromemoria(promemoria);
            console.log("\n");
            
            console.log("Vuoi filtrare i promemoria?");
            ris=input("si/no: ");

            if(ris === 'si'){
                console.log("Per cosa vuoi filtrare?\n 1)Nome\n2)Orario\n3)Stato");
                filtra=input(":");
                console.log("\n");
                f.FiltraPromemoria(promemoria,filtra);
            }
            else if(ris === 'no'){
                break;
            }

            break;
        }
        case '3':{
            nome=input("Inserisci il nome del promemoria: ");
            console.log("\n");
            f.RicercaPromemoria(promemoria,nome);
            console.log("\n");
            break;
        }
        case '4':{
            let n_mod;
            console.log("Che promemoria vuoi modificare? ");
            nome=input("nome promemoria: ");

            promemoria.forEach(x => {
                if(x.nome===nome){
                    trovato=true;
                }
            });

            if(trovato){
                n_mod=input("Dai un nome al promemoria: ");
                ora=input("A che ora devo ricordartelo? ");
                f.ModificaPromemoria(nome,promemoria,n_mod,ora);
                console.log("Promemoria modificato con successo!");

                console.log("\n");
                f.VisualizzaPromemoria(promemoria);
            }
            else{
                console.log("\nPromemoria non trovato. Riprova!");
            }
            trovato=false;
            break;
        }
        case '5':{
            let conferma;
            console.log("Che promemoria vuoi eliminare?");
            nome=input("nome promemoria:");

            promemoria.forEach(x => {
                if(x.nome===nome){
                    trovato=true;
                }
            });

            if(trovato){
                console.log("\nSei sicuro di voler eliminare questo promemoria?");
                conferma=input("si/no: ");

                if(conferma === 'si'){
                    f.RimuoviPromemoria(nome,promemoria);
                    console.log("Promemoria rimosso con successo!");
                    console.log("\n");
                    f.VisualizzaPromemoria(promemoria);
                }
                else if(conferma === 'no'){
                    console.log("Procedura di rimozione annullata");
                }
            }
            else{
                console.log("\nPromemoria non trovato. Riprova!");
            }
            trovato=false;

            break;
        }
        case '6':{
            console.log("Quale attività vuoi completare?");
            nome=input("nome promemoria:");

            promemoria.forEach(x => {
                if(x.nome===nome){
                    trovato=true;
                }
            });

            if(trovato){
                f.CompletaAttivita(nome,promemoria);
                console.log("Attività completata!")
            }
            else{
                console.log("\nPromemoria non trovato. Riprova!");
            }
            trovato=false;

            break;
        }
    }

}while(scelta!=0);


