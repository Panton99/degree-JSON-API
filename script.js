

async function getData(){ //create fetch and get respons
    const response = await fetch('https://degree-json-api.netlify.app/degrees.json', {
        headers:{
            'Content-Type': 'application/degrees.json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
        }
    }).then(
        response => {
	    //get the status and status text on console
	    console.log(response.status, response.statusText);
	    return response.json();
    }).then( 
       response => console.log(JSON.stringify(response))
    ).then(
    	display(response)
    ).catch(error => {
	    console.log(error);
    });
}

function display(data) {
    let table = 
        `<tr>
          <th>School</th>
          <th>Program/Major</th>
          <th>Type</th>
          <th>Year conferred</th>
        </tr>`;
    
    // Loop to access all rows 
    for (var row of data.list) {
        table += `<tr> 
   	 <td>${row.School} </td>
   	 <td>${row.Progrma/Major}</td>
   	 <td>${row.Type}</td> 
   	 <td>${row.Yearconferred}</td>          
</tr>`;
    }

