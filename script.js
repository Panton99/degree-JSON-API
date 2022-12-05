

async function getData(){ //create fetch and get response
    const response = await fetch('https://degree-json-api.netlify.app/degrees.json', {
        headers:{
            'Content-Type': 'application/degrees.json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
        }
    }).then(
        response => {
	if (response.status >= 400 && response.status < 600) {
      		throw new Error("Error: from server");
    	}
	response.json()}
    ).then(
       response => console.log(JSON.stringify(response))
    )
    .catch(error => {
	    console.log(error);
    });
}


