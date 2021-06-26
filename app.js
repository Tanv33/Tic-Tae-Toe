var player1 = prompt("Enter First Player Name", "Bot1");
var player2 = prompt("Enter Second Player Name", "Bot2");
let playerturn = true;
let arr = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function show(a, index) {
    // onclick putting X & O
    if (arr[Math.floor(index / 3)][index % 3] === "") {
        if (playerturn === true) {
            a.innerHTML = `<Center style= "color:rgb(185, 26, 26)"> X </Center>`;
            arr[Math.floor(index / 3)][index % 3] = "X";
            playerturn = false;
        } else {
            a.innerHTML = "<Center> O </Center>";
            arr[Math.floor(index / 3)][index % 3] = "O";
            playerturn = true;
        }
    }
    // Winning condition for PLayer1 & Player2
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] === "X" && arr[i][1] === "X" && arr[i][2] === "X") {
            document.write(`<center style ="color: teal;
    background-color: cornsilk;"> <h1>Congratulations "${player1}" You Win </h1> </center>`);
        }
        if (arr[i][0] === "O" && arr[i][1] === "O" && arr[i][2] === "O") {
            document.write(`<center style ="color: teal;
    background-color: cornsilk;"> <h1>Congratulations "${player2}" You Win </h1> </center>`);
        }
        if (arr[0][i] === "X" && arr[1][i] === "X" && arr[2][i] === "X") {
            document.write(`<center style ="color: teal;
    background-color: cornsilk;"> <h1>Congratulations "${player1}" You Win </h1> </center>`);
        }
        if (arr[0][i] === "O" && arr[1][i] === "O" && arr[2][i] === "O") {
            document.write(`<center style ="color: teal;
    background-color: cornsilk;"> <h1>Congratulations "${player2}" You Win </h1> </center>`);
        }
    }
    if (arr[0][0] === "X" && arr[1][1] === "X" && arr[2][2] === "X") {
        document.write(`<center style ="color: teal;
    background-color: cornsilk;"> <h1>Congratulations "${player1}" You Win </h1> </center>`);
    }
    if (arr[0][0] === "O" && arr[1][1] === "O" && arr[2][2] === "O") {
        document.write(`<center style ="color: teal;
    background-color: cornsilk;"> <h1>Congratulations "${player2}" You Win </h1> </center>`);
    }
    if (arr[0][2] === "X" && arr[1][1] === "X" && arr[2][0] === "X") {
        document.write(`<center style ="color: teal;
    background-color: cornsilk;"> <h1>Congratulations "${player1}" You Win </h1> </center>`);
    }
    if (arr[0][2] === "O" && arr[1][1] === "O" && arr[2][0] === "O") {
        document.write(`<center style ="color: teal;
    background-color: cornsilk;"> <h1>Congratulations "${player2}" You Win </h1> </center>`);
    }
    // Draw Condition
    var checkDraw = true;
    // console.log("line72");
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            if (arr[j][k] === "") {
                checkDraw = false;
            }
        }
    }
    if (checkDraw === true) {
        document.write(`<center style ="color: teal;
        background-color: cornsilk;"> <h1> "Draw"</h1> </center>`);
    }
}