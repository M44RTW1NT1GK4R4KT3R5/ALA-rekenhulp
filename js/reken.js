// hard aan t werk
function toetsmaker(niveau){ /*zet bij niveau het gekozen niveau uit de dropdownlist*/
    document.getElementById("resultaat").innerHTML =null;
    if (niveau <1){
        document.getElementById("nakijk").disabled = true;
        for (i=1;i<=12;i++) { //deze loop verwijdert alle vragen
            document.getElementById('s' + i).innerHTML = ".........";
            document.getElementById('a' + i).value = null;
            document.getElementById('a' + i).disabled = true;
            document.getElementById('a' + i).style.background = "#EEE";
        }
    }else{
        document.getElementById("nakijk").disabled = false;
        for (i=1;i<=12;i++){ //deze loop maakt alle vragen
            document.getElementById('s'+i).innerHTML = i+'x'+niveau+'=';
            document.getElementById('a' + i).value = null;
            document.getElementById('a' + i).disabled = false;
            document.getElementById('a' + i).style.background = "#EEE";
        }
    }
}
function nakijken(niveau){
    var goed = 0;
    var fout = 0;
    for (i=1;i<=12;i++) { //deze loop controleert alle vragen
        if (document.getElementById('a'+i).value == niveau*i){ //als correct
            goed++;
            document.getElementById('a'+i).style.background = "#0f0";
        } else { //als fout
            fout++;
            document.getElementById('a'+i).style.background = "#f44";
        }
    }
    var cijfer = Math.round((goed/12*9+1)*10)/10;
    if (fout >4) {
        document.getElementById("resultaat").innerHTML = goed + " goed, " + fout + " fout, Cijfer: " + cijfer + " Gebruik de oefensommen om te trainen."
        document.getElementById("knopplek").innerHTML = "<a href='Oefensommen.pdf'>Oefensommen</a>";
    }else{
        document.getElementById("resultaat").innerHTML = goed+" goed, "+fout+" fout, Cijfer: "+cijfer;
    }

}