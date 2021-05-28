const crosssymbol = '<ion-icon name="close-outline"></ion-icon>';
const circlesymbol = '<ion-icon name="ellipse-outline"></ion-icon>';

let isGaeRunning = true;

let fields = ["e", "e", "e", "e", "e", "e", "e", "e", "e"];

function handleClick(fieldid)
{
    if(isGaeRunning)
    {
        if (fields[parseInt(fieldid)] == "e")
        {
            fields[parseInt(fieldid)] = "o";
            document.getElementById(fieldid).innerHTML = circlesymbol;
            checkforwinner();
            setCross();
        }
    }
}


function setCross()
{
    let fieldid = Math.round(Math.random() * 8);
    if (fields[parseInt(fieldid)] == "e")
    {
        fields[parseInt(fieldid)] = "x";
        document.getElementById(fieldid).innerHTML = crosssymbol;
        checkforwinner();
    }
    else
    {
        setCross();
    }
}

function checkforwinner() {
    if (fields[0] == "x" && fields[1] == "x" && fields[2] == "x") {
        setwinner("x", [0, 1, 2]);
        return true;
    }
    else if (fields[3] == "x" && fields[4] == "x" && fields[5] == "x") {
        setwinner("x", [3, 4, 5]);
        return true;
    }
    else if (fields[6] == "x" && fields[7] == "x" && fields[8] == "x") {
        setwinner("x", [6, 7, 8]);
        return true;
    }
    else if (fields[0] == "x" && fields[4] == "x" && fields[8] == "x") {
        setwinner("x", [0, 4, 8]);
        return true;
    }
    else if (fields[2] == "x" && fields[4] == "x" && fields[6] == "x") {
        setwinner("x", [2, 4, 6]);
        return true;
    }
    else if (fields[0] == "x" && fields[3] == "x" && fields[6] == "x") {
        setwinner("x", [0, 3, 6]);
        return true;
    }
    else if (fields[1] == "x" && fields[4] == "x" && fields[7] == "x") {
        setwinner("x", [1, 4, 7]);
        return true;
    }
    else if (fields[2] == "x" && fields[5] == "x" && fields[8] == "x") {
        setwinner("x", [2, 5, 8]);
        return true;
    }
    if (fields[0] == "o" && fields[1] == "o" && fields[2] == "o") {
        setwinner("o", [0, 1, 2]);
        return true;
    }
    else if (fields[3] == "o" && fields[4] == "o" && fields[5] == "o") {
        setwinner("o", [3, 4, 5]);
        return true;
    }
    else if (fields[6] == "o" && fields[7] == "o" && fields[8] == "o") {
        setwinner("o", [6, 7, 8]);
        return true;
    }
    else if (fields[0] == "o" && fields[4] == "o" && fields[8] == "o") {
        setwinner("o", [0, 4, 8]);
        return true;
    }
    else if (fields[2] == "o" && fields[4] == "o" && fields[6] == "o") {
        setwinner("o", [2, 4, 6]);
        return true;
    }
    else if (fields[0] == "o" && fields[3] == "o" && fields[6] == "o") {
        setwinner("o", [0, 3, 6]);
        return true;
    }
    else if (fields[1] == "o" && fields[4] == "o" && fields[7] == "o") {
        setwinner("o", [1, 4, 7]);
        return true;
    }
    else if (fields[2] == "o" && fields[5] == "o" && fields[8] == "o") {
        setwinner("o", [2, 5, 8]);
        return true;
    }
    else if (
        fields[0] != "e" &&
        fields[1] != "e" &&
        fields[2] != "e" &&
        fields[3] != "e" &&
        fields[4] != "e" &&
        fields[5] != "e" &&
        fields[6] != "e" &&
        fields[7] != "e" &&
        fields[8] != "e"
    ) {
        setwinner("d")
    }
}
function setwinner(winner, winnerline) {
    isGaeRunning = false;
    if (winner == "o") {
        Highlighting(winnerline);
        document.getElementById("status").innerHTML = "Du hast gewonnen!";
        document.getElementById("card").style.backgroundColor = "green";
    }
    else if (winner == "x") {
        Highlighting(winnerline);
        document.getElementById("status").innerHTML = "Du hast verloren!";
        document.getElementById("card").style.backgroundColor = "red";
    }
    else{
        document.getElementById("status").innerHTML = "Unentschieden!";
        document.getElementById("card").style.backgroundColor = "yellow";
    }

}

function Highlighting(winningline) {
    document.getElementById(winningline[0]).style.backgroundColor = "green";
    document.getElementById(winningline[1]).style.backgroundColor = "green";
    document.getElementById(winningline[2]).style.backgroundColor = "green";
}

function reset(){

    fields = ["e", "e", "e", "e", "e", "e", "e", "e", "e"];
    for(i = 0; i <= 8; i++)
    {
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).style.backgroundColor = "white";
    }
    document.getElementById("status").innerHTML = "Bereit zu spieln?";
    document.getElementById("card").style.backgroundColor = "lightblue";
    isGaeRunning = true;
}