"use strict"

import * as f from './utils.js'

import promptSync from 'prompt-sync'

const input=promptSync();

let promemoria=[];
let nome,ora,stato;

let scelta;
do{
    console.log("Menù: ");
    console.log("1)Crea promemoria\n2)Visualizza promemoria\n3)Modifica promemoria\n4)Rimuovi promemoria\n0)Esci");
    scelta=input(":");

    switch(scelta){
        case '1':{
            nome=input("Dai un nome al promemoria: ");
            ora=input("A che ora devo ricordartelo? ")
            stato=false;

            promemoria.push(f.CreaPromemoria(nome,ora,stato));
            
            console.log(promemoria);//stampa grezza per verificare il corretto funzionamento
            break;
        }
        case '2':{

            break;
        }
        case '3':{

            break;
        }
        case '4':{

            break;
        }
    }

}while(scelta!=0);


