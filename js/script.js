/* 
problema: Calcolo del prezzo del biglietto del treno

- Creare form
1) Chiedere all'utente quanti km vuole percorrere come input
2) Chiedere all'utente l'età come input
3) Creare button che verrà utilizzato per sottoscrivere il form
4) Calcolare prezzo totale del viaggio
    -attenzione, il biglietto è di 0.21€ al km
5) SE l'utente è minorenne
    ALLORA si applica sconto del 20%
6) SE l'utente è over 65
    ALLORA si applica sconto del 40%
7) Indicare prezzo finale in pagina con la somma dei km ed età (con i possibili sconti)

*/


// Creare button che verrà utilizzato per sottoscrivere il form
const myButton = document.getElementById('my-button');

myButton.addEventListener('click',
function(){

        // Chiedere all'utente quanti km vuole percorrere come input

        let km = document.getElementById("km").value;

        // Chiedere all'utente l'età come input

        let age = document.getElementById("age").value;

        let name = document.getElementById("name").value;

        const priceperKm = 0.21;
        let price = (priceperKm * km);
        let discount = 0;

        if ((isNaN(km)) || (age == '0')){
            alert ("Errore, compila tutti i campi");
        } else {
            // SE l'utente è minorenne o over

                if(age == 'minorenne'){
                    discount = (price * 0.2);

                }else if(age == 'over'){
                    discount = (price * 0.4);

                }
                //qui ci sarà la somma per fare il prezzo
            
                price = ((priceperKm * km) - discount);
                console.log ('price', price, typeof price);


            
            //stampa in pagina
            document.querySelector('.price-area').innerHTML = '€' + price.toFixed(2);
            document.querySelector('.nameFinal').innerHTML = name;

            document.querySelector('.carrozza').innerHTML = Math.floor(Math.random() * 11);
            document.querySelector('.code-cp').innerHTML = Math.floor(Math.random() * 99000);

            const payButton = document.getElementById('payment');

            payButton.addEventListener('click',
            function(){
                alert ('Congratulazioni! Sarai reindirizzato al pagamento!')
            }
            )
        }
    }
    );


