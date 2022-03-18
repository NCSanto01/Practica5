const postClientData = async()=>{
    let inputFName = document.getElementById('fname').value;
    let inputLName = document.getElementById('lname').value;
    let inputIdentification = document.getElementById('identification').value;
    let inputEmail = document.getElementById('email').value;

    console.log("Posting");
    let request = await fetch("/setClientes", { 
        method: 'POST',
        credentials: "same-origin", 
        headers: { 						 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: inputFName,
            lastName: inputLName,
            email: inputEmail,
            dni: inputIdentification
        }), 
        dataType: "json"
    })

    if(request.ok) {
        console.log("Success!");
        console.log(await request.json());
        
        //Se borran los datos
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("identification").value = "";
    }
    else{
        console.log("Error");
    }
}

const getClientData = async()=>{
    let request = await fetch("/getClientes", {
        method: 'GET',
        credentials:"same-origin",
        dataType: "json"
    })

    if(request.ok) {
        console.log("Success!");
        let data = await request.json();
        let name = data.name;
        let lastName = data.lastName;
        let email = data.email;
        let dni = data.dni;

        document.getElementById("fname").value = name;
        document.getElementById("lname").value = lastName;
        document.getElementById("email").value = email;
        document.getElementById("identification").value = dni;
    }
    else{
        console.log("Error");
    }

}