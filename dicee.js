/**
 * Return random value 1-6
 */
function randVal(){
    return Math.floor(Math.random()*6+1);
}

/**
 * Update h1 text to variable "text".
 * If multiple h1s present, updates first
 * @param {string} text - text to update to
 */
function updateHeader(text){
    document.querySelector("h1").textContent=text;
    return;
}

/**
 * Update src referenced by class.
 * If multiple present, updates first.
 * @param {string} className - name of class to update attribute of
 * @param {string} path - src path to update to
 */
function updateClassSource(className,path){
    var imgRef=document.getElementsByClassName(className)[0];
    imgRef.setAttribute("src",path);
}


/**
 * Update the text of a paragraph within a class. Will assign each update 
 * a sequential number number. Used to show player names
 * @param {string} className - name of class to update
 * @param {string} text - base text to use, will add " [sequential number]"
 */
function updateClassText(className,text){
    var lookup="."+className+" "+"p"
    var classRef=document.querySelectorAll(lookup);
    var numRefs=classRef.length;
    for(i=0;i<numRefs;i++){
        refUpd=classRef[i];
        refUpd.textContent=text+" "+(i+1);
    }
}

/**
 * Roll a die and assign a winner, update image and header
 * to reflect the winner
 */
function diceRoll(){
    var playerOneVal=randVal();
    var playerTwoVal=randVal();
    if(playerOneVal>playerTwoVal){
        updateHeader("Player One Wins!");
    }
    else if(playerOneVal<playerTwoVal){
        updateHeader("Player Two Wins!");
    }
    else{
        updateHeader("Draw!");
    }

    //Setup paths using the vals
    var playerOneImgPath="images/dice"+playerOneVal+".png";
    var playerTwoImgPath="images/dice"+playerTwoVal+".png";

    //update image references and text
    updateClassSource("img1",playerOneImgPath);
    updateClassSource("img2",playerTwoImgPath);
    updateClassText("dice","Player");
}



