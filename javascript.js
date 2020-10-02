function display(){
    var name = document.getElementById('nam');
    alert("Welcome To NextBridge " + name.value);
}

function togl(){
    var temp = document.getElementById('toggle');
    if (temp.innerHTML == "My First day at Nextbridge") {
        temp.innerHTML = "Tommorow is my second day"; 
    }
    else
    {
        temp.innerHTML = "My First day at Nextbridge"
    }
}


