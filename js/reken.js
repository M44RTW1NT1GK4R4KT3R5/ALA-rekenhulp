// hard aan t werk
function toetsmaker(niveau){ /*zet bij niveau het gekozen niveau uit de dropdownlist*/
 for (i=1;i<=10;i++){ //deze loop maakt alle vragen
     document.getElementById('s'+i).innerHTML = niveau+'x'+i+'=';
 }
    nakijken(niveau);
}
function nakijken(niveau){

}