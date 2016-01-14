// hard aan t werk
var antwoorden = [];
function toetsmaker(niveau){ /*zet bij niveau het gekozen niveau uit de dropdownlist*/
    var tafels = [1,2,3,4,5,6,7,8,9,10,11,12];
    antwoorden = [];
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
            var getal = Math.floor((Math.random() * tafels.length));
            document.getElementById('s'+i).innerHTML = tafels[getal]+'x'+niveau+'=';
            document.getElementById('a' + i).value = null;
            document.getElementById('a' + i).disabled = false;
            document.getElementById('a' + i).style.background = "#EEE";
            antwoorden.splice(i-1,0,tafels[getal]*niveau);
            tafels.splice(getal,1);
        }
    }
}
function nakijken(niveau){
    var goed = 0;
    var fout = 0;
    for (i=1;i<=12;i++) { //deze loop controleert alle vragen
        if (document.getElementById('a'+i).value == antwoorden[i-1]){ //als correct
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