

async function getData(){
    const response = await fetch('https://degree-json-api.netlify.app/degrees.json', { headers: { "Accept": "application/json" }).then(
        response => response.json()
    ).then(
        data => statusCode: 200,
	    
    )
    .catch(error => {
        if(error == "server") {
            return console.log(error);
        }
    })

}


getData();
