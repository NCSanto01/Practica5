const postClientData = async()=>{
    let inputFName = document.getElementById('fname').value;
    let inputLName = document.getElementById('lname').value;
    let inputIdentification = document.getElementById('identification').value;
    let inputEmail = document.getElementById('email').value;

    console.log("Posting");
    let request = await fetch("/clientes", { 
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
    }
    else{
        console.log("Error");
    }
}

const getClientData = async()=>{
    let request = await fetch("/clientes", {
        method: 'GET',
        credentials:"same-origin",
        dataType: "json"
    })

    if(request.ok) {
        console.log("Success!");
        console.log(await request.json());
        let data = await request.json();
        let name = data.name;
        let lastName = data.lastName;
        let email = data.email;
        let dni = data.dni;
    }
    else{
        console.log("Error");
    }

}