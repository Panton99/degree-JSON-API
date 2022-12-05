

async function getData(){
    const response = await fetch('https://degree-json-api.netlify.app/degrees.json', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
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
        if(error == "server") {
            return console.log(error);
        }
    })

}


// document.getElementById("button").addEventListener();
// getData().then(data => {
//     console.log(data);
// });

getData();
