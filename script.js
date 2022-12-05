

async function getData(){ //create fetch and get respons
    const response = await fetch('https://degree-json-api.netlify.app/degrees.json', {
        headers:{
            'Content-Type': 'application/degrees.json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
        }
    }).then(
        response => {
	    console.log(response.status, response.statusText);
	    return response.json();
    }).then( 
       response => console.log(JSON.stringify(response))
    ).catch(error => {
	    console.log(error);
    });
}


