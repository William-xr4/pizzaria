var menu = ["Pizza Vegetariana", "Portuguesa", "Brasiliense", "Armonia", "Tropical"];

function getMenu(){
    var htmldata ="" ;
    var i;
    menu.sort();
    for(i=0; i<menu.length; i++){
        htmldata = htmldata + menu[i] + "<br>";
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
    var htmldata ="";
    var j;
    var img = "<img id='im1' src='pizzaImg.png'>";
    var item = document.getElementById("addItem").value;
    menu.sort();
    for(j=0; j<menu.length; j++){
        htmldata = htmldata + img + menu[j] + "<br>";
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function Adicionar(){
    var item = document.getElementById("addItem").value;
    menu.push(item);
    addItem();
}