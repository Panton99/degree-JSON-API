

async function getData(){ //create fetch and get response
    const response = await fetch('https://degree-json-api.netlify.app/degrees.json', {
        headers:{
            'Content-Type': 'application/degrees.json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
        }
    }).then(
        response => response.json()
    ).then(
       response => console.log(JSON.stringify(response))
    )
    .catch(error => {
	    console.log(error);
    });
}


