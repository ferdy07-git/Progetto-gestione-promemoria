"use strict"

import * as f from './utils.js'

import promptSync from 'prompt-sync'

const input=promptSync();

let promemoria=[];
let nome,ora,stato;
let i;
let trovato=false;

let scelta;
do{
    console.log("Menù: ");
    console.log("1)Crea promemoria\n2)Visualizza promemoria\n3)Ricerca promemoria\n4)Modifica promemoria\n5)Rimuovi promemoria\n6)Completa attività\n0)Esci");
    scelta=input(":");
    console.log("\n");

    switch(scelta){
        case '1':{
            nome=input("Dai un nome al promemoria: ");
            ora=input("A che ora devo ricordartelo? ");
            stato=false;

            promemoria.push(f.CreaPromemoria(nome,ora,stato));

            console.log("\n");

            break;
        }
        case '2':{
            f.VisualizzaPromemoria(promemoria);
            console.log("\n");
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
            
            break;
        }
        case '6':{

            break;
        }
    }

}while(scelta!=0);


