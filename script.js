

async function getData(){
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

//click -event occurs
document.getElementById("button-submit").addEventListener('click', getData);
