let createdP = document.getElementById("createdP");

function createP(){
    if (createdP == null) {
        let p = document.createElement("P");
        p.id="createdP";
        document.body.appendChild(p);
    }
    createdP = document.getElementById("createdP");
}

function addTextToP(inputText){
    if (createdP != null) {
        let txt = document.createTextNode(inputText);
        createdP.append(txt);
    } else {
        alert("You must create the paragraph element first!")
    }
}

function deleteP(){
    createdP = document.getElementById("createdP");
    if (createdP != null) {
        createdP.parentNode.removeChild(createdP);
    } else {
        alert("There is nothing to delete.")
    }
}