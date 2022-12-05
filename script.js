

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
       printData(response);
    )
    .catch(error => {
	    console.log(error);
    });
}

function printData(data) {
    var print = document.getElementById("data");
    for (var i = 0; i < data.length; i++) {
       var element = document.createElement("element");
       element.innerHTML = 'University: ' + data[i].School + ', Program/Major: ' + data[i].Program/Major + ', Type: ' + data[i].Type + ', Year conferred: ' + data[i].Year conferred;
       print.appendChild(element);
    }
}
