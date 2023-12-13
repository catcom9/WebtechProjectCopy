function newsletter(){
    firstName = document.getElementById("first_name").value;
    lastName = document.getElementById("last_name").value;
    email = document.getElementById("email").value;

    console.log(firstName);


    if (isNaN(firstName) == "" || isNaN(lastName) == "" || isNaN(email) == ""){
        window.alert("Fill out all the form please");
        return
    }

    window.alert("Thanks " + firstName + ".\nWe will send you a confirmation email at " + email);
    
}


function help_icon(index){
    var ids = ["Missing", "Contact", "Returns", "Instructions", "Buy", "Broken"]

    for(let i = 0; i!=6; i++){
        document.getElementById(ids[i]).style = "display: none"
    }


    document.getElementById(ids[index]).style = "display: block"
}