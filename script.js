

// async function getData(){
//     const response = await fetch('https://degree-json-api.netlify.app/degrees.json', { headers: { "Accept": "application/json" }).then(
//         response => response.json()
//     ).then(
//         data => statusCode: 200,
	    
//     )
//     .catch(error => {
//         if(error == "server") {
//             return console.log(error);
//         }
//     })

// }



import fetch from "node-fetch";

const API_ENDPOINT = "https://degree-json-api.netlify.app/degrees.json";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data.Schools
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));


// document.getElementById("button").addEventListener();
// getData().then(data => {
//     console.log(data);
// });

// getData();
